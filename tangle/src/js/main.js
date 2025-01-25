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

    class TangleErrorListener {
        constructor() {
            this.errors = [];
        }

        syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
            const errorMsg = `Syntax Error at line ${line}:${column} - ${msg}`;
            this.errors.push(errorMsg);
        }

        // extra methods to help with reporting when developing
        // required by the interface, but we don't need them

        reportAmbiguity(recognizer, dfa, startIndex, stopIndex, exact, ambigAlts, configs) {
        }

        reportAttemptingFullContext(recognizer, dfa, startIndex, stopIndex, conflictingAlts, configs) {
        }

        reportContextSensitivity(recognizer, dfa, startIndex, stopIndex, prediction, configs) {
        }
    }

    const errorListener = new TangleErrorListener();
    lexer.removeErrorListeners()
    lexer.addErrorListener(errorListener);
    parser.removeErrorListeners()
    parser.addErrorListener(errorListener);

    const tree = parser.document();

    if (errorListener.errors.length > 0) {
        errorListener.errors.forEach(error => console.error(error));
        throw new Error(`Compilation failed due to syntax errors. ${errorListener.errors[0]}`);
    }

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

    const formattedImports = formatImports(imports);

    output += formattedImports.imports;

    const formattedProps = formatProps(props)

    const propsOutput = formattedProps ? `{${formattedProps.props}}` : "";

    output += `export default function ${componentName}(${propsOutput}) {\n`;

    output += formattedImports.formattedStyles;

    if (formattedProps && formattedProps.seededProps) {
        output += formattedProps.seededProps.map((prop) => `${prop.name} = ${prop.value};\n`).join("");
    }

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

    return {jsCode: output, dependencies: formattedImports.styles};
}

export default tanglePlugin;
