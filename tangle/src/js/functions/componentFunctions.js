import {ValidationError} from "../classes/ValidationError.js";
import path from "node:path";
import {getAST} from "./astCache.js";
import {generateName} from "./helperFunctions.js";

export function validateImports(imports, filePath) {
    imports.forEach((imp) => {
        if (imp.type === "componentImport") {
            const componentPath = path.resolve(path.dirname(filePath), imp.path);
            const componentAST = getAST(componentPath);

            if (!componentAST) {
                throw new Error(`AST not found for ${componentPath}. Make sure the file is compiled first.`);
            }

            imp.props = componentAST.props?.map((prop) => ({
                name: prop.name,
                required: prop.value === null || prop.value === undefined,
                defaultValue: prop.value,
            }));
        }
    });
}

export function formatImports(imports) {
    let output = "";
    let styleImports = [];

    for (const imp of imports) {
        if (imp.type === "componentImport") {
            output += `import ${imp.id} from '${imp.path}';`;
        } else if (imp.type === "styleImport") {
            output += `import '${imp.path}';`;
            styleImports.push(imp.path);
        }
    }

    let styleOutput = formatStyleImports(styleImports);

    return {imports: output, styles: styleImports, formattedStyles: styleOutput};
}

export function formatStyleImports(styleImports) {
    let output = "";
    for (const styleImport of styleImports) {
        let name = generateName();
        output += `const ${name} = document.createElement('link');`;
        output += `${name}.rel = 'stylesheet';`;
        output += `${name}.href = '${styleImport}';`;
        output += `document.head.appendChild(${name});`;
    }

    return output;
}

export function validatePropsForElement(element, component) {
    const expectedProps = component.props || [];
    const providedProps = element.attributes || [];

    const providedNames = providedProps.map((attr) => attr.name);

    expectedProps.forEach((expectedProp) => {
        if (expectedProp.required && !providedNames.includes(expectedProp.name) && expectedProp.name !== "children") {
            throw new ValidationError(
                `Missing required prop '${expectedProp.name}' for component '${component.id}'`,
                `Expected Props: ${JSON.stringify(expectedProps.map((p) => p.name))} Provided Props: ${JSON.stringify(providedNames)}`
            );
        }
    });

    providedProps.forEach((prop) => {
        if (!expectedProps?.some((expected) => expected.name === prop.name)) {
            throw new ValidationError(
                `Unexpected prop '${prop.name}' passed to component '${component.id}'`,
                `Valid Props: ${JSON.stringify(expectedProps.map((p) => p.name))} Provided Props: ${JSON.stringify(providedNames)}`
            );
        }
    });
}

export function formatProps(props, type) {
    if (!props?.length) return "";

    if (type === "in") {
        return props.map((prop) => `${prop.name}: ${transformValue(prop.attributeType, prop.content)}`).filter(Boolean).join(", ");
    }

    const propsContent = props
        .map(prop => prop.name)
        .filter(Boolean)
        .join(", ");

    const seededProps = props
        .filter(prop => prop.value !== null && prop.value !== undefined)
        .map(prop => ({
            name: prop.name,
            value: transformValue(prop.assignedType, prop.value)
        }));

    const requiredProps = props
        .filter(prop => prop.value === null || prop.value === undefined)
        .map(prop => prop.name);

    return {props: propsContent, seededProps, requiredProps};
}

export function formatCode(code) {
    let output = "";
    code.forEach((content) => {
        if (content === null || content === undefined) return;
        switch (content.type) {
            case "variableDeclaration":
                output += `${content.varDef} ${content.name} = ${transformValue(content.assignedType, content.value)};`;
                break;

            case "ifStatement":
                output += generateIfStatement(content);
                break;

            case "variableModification":
                output += `${content.name} ${content.operator} ${transformValue(content.assignedType, content.value)};`;
                break;

            case "functionCall":
                output += generateFunctionCall(content);
                break;

            case "comment":
                output += `// ${content.value}`;
                break;

            case "functionDeclaration":
                output += `function ${content.name}(${content.args.map(arg => arg.value).join(", ")}) {`;
                if (content.body && Array.isArray(content.body)) {
                    output += formatCode(content.body);
                }
                output += "}";
                break;

            default:
                output += `// Unhandled node: ${content.type}`;
                break;
        }
    });

    return output;
}

function generateIfStatement(content) {
    const {condition, body} = content;
    const ifCondition = generateCondition(condition);

    const bodyCode = formatCode(body);

    return `if (${ifCondition}) {${bodyCode}}`;
}

export function generateFunctionCall(callNode) {
    const fnPath = callNode.functionPath.join(".");
    const args = callNode.arguments.map(arg => transformValue(arg.type, arg.value)).join(", ");
    return `${fnPath}(${args});`;
}

function generateCondition(condition) {
    if (!condition) return "true";
    const left = transformValue(condition.left.type, condition.left.value);
    const op = condition.operator;
    const right = transformValue(condition.right.type, condition.right.value);
    return `${left} ${op} ${right}`;
}

export function transformValue(type, value, toHTML = false) {
    switch (type) {
        case "string":
        case "text":
            return `"${value}"`;
        case "int":
        case "name":
        case "variable":
        case "bool":
            return toHTML ? `"${value}"` : `${value}`;
        case "functionCall":
            return `${generateFunctionCall(value)}`;
        case "embeddedStatement":
            return transformValue(value.type, value.value || value.expression);
        default:
            return null;
    }
}
