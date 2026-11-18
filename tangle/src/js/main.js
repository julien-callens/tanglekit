import antlr4 from "antlr4";
import TangleParser from "./generated/TangleParser.js";
import TangleLexer from "./generated/TangleLexer.js";
import {TangleVisitor} from "./classes/TangleVisitor.js";
import tanglePlugin from "../vite/plugin.js";
import path from "node:path";
import {assignedValue, formatCode, formatImports} from "./functions/componentFunctions.js";
import {renderNode} from "./functions/transformer.js";
import prettier from "prettier";

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
            if (offendingSymbol?.type === TangleLexer.TAG_OPEN && recognizer.getExpectedTokens().contains(antlr4.Token.EOF)) {
                msg = `Only one root element is allowed (${msg})`;
            }
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
        throw new Error(`Compilation failed due to syntax errors. ${errorListener.errors[0]}`);
    }

    const visitor = new TangleVisitor();
    return visitor.visit(tree);
}

export function generateJS(ast, filePath) {
    const {imports, props, code, elements} = ast;
    const componentName = path.basename(filePath, '.tngl');
    let nextId = 0;
    // '$' cannot occur in a Tangle identifier.
    const mutableLocals = code.filter(node => node.type === "variableDeclaration" && node.varDef === "let");
    const ctx = {
        imports,
        mutableNames: new Set(mutableLocals.map(node => node.name)),
        nextName: () => `$node${nextId++}`,
    };
    const root = ctx.nextName();
    const render = renderNode(elements, root, ctx);

    const params = props.length ? `{${props.map(prop => prop.name).join(", ")}} = {}` : "";
    let output = formatImports(imports) + `export default function ${componentName}(${params}) {`;
    for (const prop of props) {
        if (prop.assignedType !== null) {
            output += `${prop.name} ??= ${assignedValue(prop)};`;
        } else if (prop.name !== "children") {
            const message = JSON.stringify(`Missing required prop '${prop.name}' for component '${componentName}'`);
            output += `if (${prop.name} === undefined) throw new Error(${message});`;
        }
    }
    if (ctx.hasBoundText || ctx.hasClickUpdates) output += "const $textUpdates = [];";
    if (ctx.hasClickUpdates) {
        output += `function $afterClick(listener) {
            if (typeof listener !== "function") return listener;
            return function(event) {
                listener.call(this, event);
                for (const update of $textUpdates) update();
            };
        }`;
    }
    output += formatCode(code) + render + `return ${root};}`;
    return prettier.format(output, {parser: "babel"});
}

export default tanglePlugin;
