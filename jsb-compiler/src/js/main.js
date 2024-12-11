import antlr4 from "antlr4";
import fs from "fs";
import BasicJSBParser from "./generated/BasicJSBParser.js";
import BasicJSBLexer from "./generated/BasicJSBLexer.js";
import {generateJS} from "./basic/BasicJSGenerator.js";
import {BasicJSBVisitor} from "./basic/BasicJSBVisitor.js";
import {validateImports} from "./basic/functions/componentFunctions.js";
import * as path from "node:path";

const processedFiles = new Set();

function processJSBFile(filePath) {
    const resolvedFilePath = path.resolve(filePath);

    if (processedFiles.has(resolvedFilePath)) {
        console.log(`\x1b[90mSkipping already processed file: ${resolvedFilePath} \x1b[0m`);
        return;
    }
    processedFiles.add(resolvedFilePath);

    const input = fs.readFileSync(resolvedFilePath, 'utf-8');
    console.log(`\x1b[32mProcessing:\x1b[0m ${resolvedFilePath}`);
    const chars = new antlr4.InputStream(input);
    const lexer = new BasicJSBLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new BasicJSBParser(tokens);

    const tree = parser.document();

    const visitor = new BasicJSBVisitor();
    const ast = visitor.visit(tree);

    fs.writeFileSync(
        path.resolve(path.dirname(resolvedFilePath), '../out/ast', path.basename(resolvedFilePath, '.jsb') + '.ast.json'),
        JSON.stringify(ast, null, 4)
    );

    if (ast.imports !== null && ast.imports !== undefined && ast.imports.length > 0) {
        validateImports(ast.imports, resolvedFilePath);

        ast.imports.forEach((imp) => {
            if (path.extname(imp.path) === '.jsb') {
                const resolvedImportPath = path.resolve(path.dirname(resolvedFilePath), imp.path);

                if (resolvedImportPath === resolvedFilePath) {
                    console.error(`\x1b[31mSelf-referencing import detected in ${resolvedFilePath}: ${imp.path}\x1b[0m`);
                    return;
                }

                processJSBFile(resolvedImportPath);
            }
        });
    }

    const js = generateJS(ast, resolvedFilePath);
    fs.writeFileSync(
        path.resolve(path.dirname(resolvedFilePath), '../out', path.basename(resolvedFilePath, '.jsb') + '.js'),
        js
    );


}


processJSBFile("./src/js/basic/examples/basicSyntax.jsb");
