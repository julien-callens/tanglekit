import {ValidationError} from "../classes/ValidationError.js";

export function formatImports(imports) {
    return imports.map(imp => {
        const binding = imp.type === "componentImport" ? `${imp.id} from ` : "";
        return `import ${binding}${JSON.stringify(imp.path)};`;
    }).join("\n");
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

export function assignedValue(node) {
    if (node.assignedType === null) return "null";
    const expression = typeof node.value === "object" ? node.value : {type: node.assignedType, value: node.value};
    return emitExpression(expression);
}

export function emitExpression(node) {
    switch (node.type) {
        case "int":
        case "bool":
        case "text":
        case "string":
            return JSON.stringify(node.value);
        case "name":
            return node.value;
        case "functionCall":
            return `${node.functionPath.join(".")}(${node.arguments.map(emitExpression).join(", ")})`;
        case "operation":
            return node.operands.map((operand, i) =>
                (i ? ` ${node.operators[i - 1]} ` : "") + emitExpression(operand)
            ).join("");
        case "group":
            return `(${emitExpression(node.operand)})`;
        case "not":
            return `!${emitExpression(node.operand)}`;
        case "incrementDecrement":
            return node.prefix ? node.operator + node.name : node.name + node.operator;
        default:
            throw new Error(`Unknown expression type '${node.type}'`);
    }
}

export function formatCode(code) {
    return code.map(node => {
        switch (node.type) {
            case "variableDeclaration":
                return `${node.varDef} ${node.name} = ${assignedValue(node)};`;
            case "variableModification":
                return `${node.name} ${node.operator} ${assignedValue(node)};`;
            case "ifStatement":
                return `if (${emitExpression(node.condition)}) {${formatCode(node.body)}}`;
            case "functionDeclaration":
                return `function ${node.name}(${node.args.map(emitExpression).join(", ")}) {${formatCode(node.body)}}`;
            case "return":
                return `return ${node.expression ? emitExpression(node.expression) : ""};`;
            case "comment":
                return `// ${node.value}\n`;
            default:
                return emitExpression(node) + ";";
        }
    }).join("\n");
}
