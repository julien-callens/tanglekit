import * as path from "node:path";
import fs from "fs";
import {ValidationError} from "../classes/ValidationError.js";

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
    for (const imp of imports) {
        if (imp.type === "component") {
            output += `import ${imp.id} from '${imp.path.replace('.jsb', '.js')}';\n`;
        } else if (imp.type === "styleImport") {
            output += `import '${imp.path}';\n`;
        }
    }
    return output;
}

export function validatePropsForElement(element, component) {
    const expectedProps = component.props || [];
    const providedProps = element.attributes || [];

    const providedNames = providedProps.map((attr) => attr.name);

    expectedProps?.forEach((expectedProp) => {
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
    if (props !== null && props !== undefined && props.length > 0) {
        let propsContent = "";
        props.forEach((prop, index) => {
            if (type === "in") {
                const value = transformValue(prop.content.type, prop.content.value);
                propsContent += `${prop.name}: ${value}`;
            } else {
                propsContent += `${prop.name}`;
            }
            if (index < props.length - 1) {
                propsContent += ", ";
            }
        });
        return propsContent;
    }
    return "";
}

export function formatCode(code) {
    let output = "";
    code.forEach((content) => {
        if (content.type === "variableDeclaration") {
            output += `${content.varDef} ${content.name} = ${transformValue(content.assignedType, content.value)};\n`;
        } else if (content.type === "functionDeclaration") {
            output += `function ${content.name}(${content.args.map((arg) => arg.value).join(", ")}) {\n`;
            output += `${content.body}\n`;
            output += "}\n";
        }
    });
    return output;
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
        case "embeddedStatement":
            return transformValue(value.type, value.value);
        default:
            return null;
    }
}
