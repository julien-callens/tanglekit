import path from "node:path";
import {compileTangleToAST, generateJS} from "../src/js/main.js";
import {storeAST} from "../src/js/functions/astCache.js";
import {validateImports} from "../src/js/functions/componentFunctions.js";
import crypto from "crypto";
import {promises as fs} from "fs";

const processedFiles = new Map();

function hashContent(content) {
    return crypto.createHash('sha256').update(content).digest('hex');
}

async function readAndHashFile(filePath) {
    const sourceCode = (await fs.readFile(filePath, 'utf-8')).normalize();
    const hash = hashContent(sourceCode);
    return {sourceCode, hash};
}

export async function processTangleFile(filePath) {
    filePath = path.normalize(filePath);

    const {sourceCode, hash} = await readAndHashFile(filePath);

    if (processedFiles.has(filePath)) {
        const cachedEntry = processedFiles.get(filePath);
        if (cachedEntry.hash === hash) {
            return cachedEntry.jsCode;
        }
    }

    const ast = compileTangleToAST(sourceCode);

    storeAST(filePath, ast);

    if (ast.imports && ast.imports.length > 0) {
        const tnglImports = ast.imports.filter(imp => path.extname(imp.path) === '.tngl');

        for (const imp of tnglImports) {
            const resolvedImportPath = path.resolve(path.dirname(filePath), imp.path).normalize();

            if (resolvedImportPath === filePath) {
                ast.imports = ast.imports.filter(i => i.path !== imp.path);
                continue;
            }

            await processTangleFile(resolvedImportPath);
        }

        validateImports(ast.imports, filePath);
    }

    storeAST(filePath, ast);

    const jsCode = generateJS(ast, filePath);
    processedFiles.set(filePath, {jsCode, hash});

    return jsCode;
}
