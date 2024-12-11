import * as path from "node:path";
import fs from "fs";
import {ValidationError} from "../classes/ValidationError.js";

export function createImports(imports, filePath, ctx) {
    let output = "";
    for (const imp of imports) {
        if (imp.type === "component") {
            output += `import ${imp.id} from '${imp.path.replace('.jsb', '.js')}';\n`;
            ctx.imports.push(imp.id);
        } else if (imp.type === "styleImport") {
            output += `import '${imp.path}';\n`;
        }
    }
    return output;
}

export function validateImports(imports, filePath) {
    imports.forEach((imp) => {
        if (imp.type === "component") {
            const componentPath = path.resolve(path.dirname(filePath), imp.path);
            const componentAST = JSON.parse(
                fs.readFileSync(
                    path.resolve(path.dirname(componentPath), "../out/ast", path.basename(componentPath, ".jsb") + ".ast.json"),
                    "utf-8"
                )
            );

            imp.expectedProps = componentAST.props?.map((prop) => ({
                name: prop.name,
                required: prop.value === null || prop.value === undefined,
                defaultValue: prop.value,
            }));
        }
    });
}


export function validateAndProcessElements(elements, imports, ctx) {
    let output = "";

    function processElement(element) {
        if (element.type === "element" && imports.some((imp) => imp.id === element.tagName)) {
            const component = imports.find((imp) => imp.id === element.tagName);

            validatePropsForElement(element, component);

            output += `${component.id}(${JSON.stringify(element.attributes)});\n`;
        } else if (element.children) {
            element.children.forEach(processElement);
        }
    }

    if (elements) {
        processElement(elements);
    }

    return output;
}

function validatePropsForElement(element, component) {
    const expectedProps = component.expectedProps || [];
    const providedProps = element.attributes || [];

    const providedNames = providedProps.map((attr) => attr.name);

    expectedProps?.forEach((expectedProp) => {
        if (expectedProp.required && !providedNames.includes(expectedProp.name)) {
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


export function createProps(props, ctx) {
    if (props) {
        props.forEach((prop) => {
            const isRequired = prop.value === undefined || prop.value === null;

            ctx.variables.push({
                name: prop.name,
                type: prop.assignedType,
                value: prop.value,
                required: isRequired,
            });
        });
    }

    let output = "";

    ctx.variables.forEach((variable) => {
        if (!variable.required && variable.value !== undefined) {
            let variableDeclaration = `let ${variable.name} = `;
            if (variable.type === "string") {
                variableDeclaration += `"${variable.value}";\n`;
            } else {
                variableDeclaration += `${variable.value};\n`;
            }
            output += variableDeclaration;
        }
    });

    return output;
}


export function createCode(code, ctx) {
    if (code) {
        code.forEach((content) => {
            if (content.type === "variableDeclaration") {
                ctx.variables.push({
                    def: content.varDef,
                    name: content.name,
                    type: content.assignedType,
                    value: content.value,
                });
            } else if (content.type === "functionDeclaration") {
                ctx.functions.push({
                    name: content.name,
                    args: content.args,
                    body: content.body,
                });
            }
        });
    }
}
