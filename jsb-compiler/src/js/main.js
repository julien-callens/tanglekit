import antlr4 from "antlr4";
import fs from "fs";
import JSBParser from "./generated/JSBParser.js";
import JSBLexer from "./generated/JSBLexer.js";
import {generateJS} from "./JSGenerator.js";
import {JSBVisitor} from "./JSBVisitor.js";
import {formatProps, validateImports} from "./functions/componentFunctions.js";
import * as path from "node:path";

const processedFiles = new Set();

function render(filePath) {
    fs.mkdirSync(path.resolve(path.dirname(filePath), '../out/ast'), {recursive: true});
    processJSBFile(filePath);
    createEntryPoint(filePath);
}

function createEntryPoint(filePath) {
    const resolvedFilePath = path.resolve(filePath);
    const entryPoint = path.resolve(path.dirname(resolvedFilePath), '../out', 'index.js');
    const baseName = path.basename(resolvedFilePath, '.jsb');

    const ast = JSON.parse(fs.readFileSync(path.resolve(path.dirname(resolvedFilePath), '../out/ast', path.basename(resolvedFilePath, '.jsb') + '.ast.json'), 'utf-8'));
    const props = ast.props;

    let indexContent = `import ${baseName} from \"./${baseName}.js\";\n\ndocument.body.appendChild(`;
    indexContent += `${path.basename(resolvedFilePath, '.jsb')}(`;
    indexContent += `{${formatProps(props, "in")}}`;
    indexContent += `));`;

    fs.writeFileSync(entryPoint, indexContent);
}

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
    const lexer = new JSBLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new JSBParser(tokens);

    const tree = parser.document();

    const visitor = new JSBVisitor();
    const ast = visitor.visit(tree);

    fs.writeFileSync(
        path.resolve(path.dirname(resolvedFilePath), '../out/ast', path.basename(resolvedFilePath, '.jsb') + '.ast.json'),
        JSON.stringify(ast, null, 4)
    );

    if (ast.imports !== null && ast.imports !== undefined && ast.imports.length > 0) {

        ast.imports.forEach((imp) => {
            if (path.extname(imp.path) === '.jsb') {
                const resolvedImportPath = path.resolve(path.dirname(resolvedFilePath), imp.path);

                if (resolvedImportPath === resolvedFilePath) {
                    console.error(`\x1b[31mSelf-referencing import detected in ${resolvedFilePath}: ${imp.path}\x1b[0m`);
                    ast.imports = ast.imports.filter((i) => i.path !== imp.path);
                    return;
                }

                processJSBFile(resolvedImportPath);
            }
        });
    }

    fs.writeFileSync(
        path.resolve(path.dirname(resolvedFilePath), '../out/ast', path.basename(resolvedFilePath, '.jsb') + '.ast.json'),
        JSON.stringify(ast, null, 4)
    );

    validateImports(ast.imports, resolvedFilePath);

    const js = generateJS(ast, resolvedFilePath);

    fs.writeFileSync(
        path.resolve(path.dirname(resolvedFilePath), '../out', path.basename(resolvedFilePath, '.jsb') + '.js'),
        js
    );
}

render("./src/js/examples/BasicSyntax.jsb");
