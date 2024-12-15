import antlr4 from "antlr4";
import TangleParser from "./generated/TangleParser.js";
import TangleLexer from "./generated/TangleLexer.js";
import {TangleVisitor} from "./classes/TangleVisitor.js";
import tanglePlugin from "../vite/plugin.js";
import path from "node:path";
import {formatCode, formatImports, formatProps} from "./functions/componentFunctions.js";
import {elementTransformer} from "./functions/transformer.js";
import {generateName} from "./functions/helperFunctions.js";

export function compileTangleToAST(sourceCode) {
    const chars = new antlr4.InputStream(sourceCode);
    const lexer = new TangleLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new TangleParser(tokens);

    const tree = parser.document();

    const visitor = new TangleVisitor();
    return visitor.visit(tree);
}

export function generateJS(ast, filePath) {
    const {imports, props, code, elements} = ast;
    const componentName = path.basename(filePath, '.tngl');
    const ctx = {
        variables: [],
        functions: [],
        imports: imports
    };

    let output = "";

    output += formatImports(imports);

    const propsOutput = formatProps(props) ? `{${formatProps(props)}}` : "";

    output += `export default function ${componentName}(${propsOutput}) {\n`;

    output += formatCode(code);

    let handler = elementTransformer[elements.type];

    const firstElementComponent = imports.find((imp) => imp.id === elements.tagName) || null;
    let name = "";

    if (firstElementComponent) {
        handler = elementTransformer.component;
        output += handler(elements, firstElementComponent, ctx);
    } else {
        name = generateName();
        if (handler) {
            output += handler(elements, name, ctx);
        }
    }

    output += `\nreturn ${firstElementComponent?.id || name};\n`

    output += "}\n";

    return output;
}

export default tanglePlugin;
