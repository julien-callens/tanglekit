import {createVariableNameGenerator} from "./functions/helperFunctions.js";
import {formatCode, formatImports, formatProps} from "./functions/componentFunctions.js";
import {elementTransformer} from "./functions/transformer.js";
import * as path from "node:path";

export const generateName = createVariableNameGenerator();

export function generateJS(ast, filePath) {
    const {imports, props, code, elements} = ast;
    const componentName = path.basename(filePath, '.jsb');
    const ctx = {
        variables: [],
        functions: [],
        imports: imports
    };

    let output = "";

    output += formatImports(ctx.imports);

    output += `export default function ${componentName}({${formatProps(props)}}) {\n`;

    output += formatCode(code);

    let elementsOutput = "";
    let handler = elementTransformer[elements.type];

    const firstElementComponent = imports.find((imp) => imp.id === elements.tagName) || null;
    let name = "";

    if (firstElementComponent) {
        handler = elementTransformer.component;
        elementsOutput += handler(elements, firstElementComponent, ctx);
    } else {
        name = generateName();
        if (handler) {
            elementsOutput += handler(elements, name, ctx);
        }
    }

    output += elementsOutput;

    if (props.some((prop) => prop.name === "children")) {
        output += "children.forEach((child) => {\n";
        output += `${firstElementComponent?.id || name}.appendChild(child());\n`;
        output += "});\n";
    }

    output += `\nreturn ${firstElementComponent?.id || name};\n`

    output += "}\n";

    return output;
}


