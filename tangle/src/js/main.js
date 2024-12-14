import antlr4 from "antlr4";
import fs from "fs";
import TangleParser from "./generated/TangleParser.js";
import TangleLexer from "./generated/TangleLexer.js";
import {generateJS} from "./JSGenerator.js";
import {TangleVisitor} from "./TangleVisitor.js";
import {formatProps, validateImports} from "./functions/componentFunctions.js";
import * as path from "node:path";

const processedFiles = new Set();

function render(filePath) {
    fs.mkdirSync(path.resolve(path.dirname(filePath), '../out/ast'), {recursive: true});
    processTangleFile(filePath);
    createEntryPoint(filePath);
}

function createEntryPoint(filePath) {
    const resolvedFilePath = path.resolve(filePath);
    const entryPoint = path.resolve(path.dirname(resolvedFilePath), '../out', 'index.js');
    const baseName = path.basename(resolvedFilePath, '.tngl');

    const ast = JSON.parse(fs.readFileSync(path.resolve(path.dirname(resolvedFilePath), '../out/ast', path.basename(resolvedFilePath, '.tngl') + '.ast.json'), 'utf-8'));
    const props = ast.props;

    let indexContent = `import ${baseName} from \"./${baseName}.js\";\n\ndocument.body.appendChild(`;
    indexContent += `${path.basename(resolvedFilePath, '.tngl')}(`;
    indexContent += `{${formatProps(props, "in")}}`;
    indexContent += `));`;

    fs.writeFileSync(entryPoint, indexContent);
}

function processTangleFile(filePath) {
    const resolvedFilePath = path.resolve(filePath);

    if (processedFiles.has(resolvedFilePath)) {
        console.log(`\x1b[90mSkipping already processed file: ${resolvedFilePath} \x1b[0m`);
        return;
    }
    processedFiles.add(resolvedFilePath);

    const input = fs.readFileSync(resolvedFilePath, 'utf-8');
    console.log(`\x1b[32mProcessing:\x1b[0m ${resolvedFilePath}`);
    const chars = new antlr4.InputStream(input);
    const lexer = new TangleLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new TangleParser(tokens);

    const tree = parser.document();

    const visitor = new TangleVisitor();
    const ast = visitor.visit(tree);

    fs.writeFileSync(
        path.resolve(path.dirname(resolvedFilePath), '../out/ast', path.basename(resolvedFilePath, '.tngl') + '.ast.json'),
        JSON.stringify(ast, null, 4)
    );

    if (ast.imports !== null && ast.imports !== undefined && ast.imports.length > 0) {

        ast.imports.forEach((imp) => {
            if (path.extname(imp.path) === '.tngl') {
                const resolvedImportPath = path.resolve(path.dirname(resolvedFilePath), imp.path);

                if (resolvedImportPath === resolvedFilePath) {
                    console.error(`\x1b[31mSelf-referencing import detected in ${resolvedFilePath}: ${imp.path}\x1b[0m`);
                    ast.imports = ast.imports.filter((i) => i.path !== imp.path);
                    return;
                }

                processTangleFile(resolvedImportPath);
            }
        });
    }

    fs.writeFileSync(
        path.resolve(path.dirname(resolvedFilePath), '../out/ast', path.basename(resolvedFilePath, '.tngl') + '.ast.json'),
        JSON.stringify(ast, null, 4)
    );

    validateImports(ast.imports, resolvedFilePath);

    const js = generateJS(ast, resolvedFilePath);

    fs.writeFileSync(
        path.resolve(path.dirname(resolvedFilePath), '../out', path.basename(resolvedFilePath, '.tngl') + '.js'),
        js
    );
}

render("./src/js/examples/BasicSyntax.tngl");
