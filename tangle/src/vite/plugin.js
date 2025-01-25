import path from 'node:path';
import {promises as fs} from 'fs';
import crypto from 'crypto';
import {storeAST} from '../js/functions/astCache.js';
import {validateImports} from '../js/functions/componentFunctions.js';
import {compileTangleToAST, generateJS} from "../js/main.js";

const processedFiles = new Map();

function hashContent(content) {
    return crypto.createHash('sha256').update(content).digest('hex');
}

async function readAndHashFile(filePath) {
    const sourceCode = (await fs.readFile(filePath, 'utf-8')).normalize();
    const hash = hashContent(sourceCode);
    return {sourceCode, hash};
}

export default function tanglePlugin() {
    const dependencyGraph = new Map();

    async function processTangleFile(filePath) {
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

        const {jsCode, dependencies} = generateJS(ast, filePath);
        processedFiles.set(filePath, {jsCode, hash});

        dependencyGraph.set(filePath, dependencies);

        return jsCode;
    }

    return {
        name: 'vite-plugin-tangle',
        enforce: 'pre',

        async transform(code, id) {
            if (!id.endsWith('.tngl')) {
                return null;
            }

            try {
                const jsCode = await processTangleFile(id);

                const deps = dependencyGraph.get(id) || [];
                for (const dep of deps) {
                    this.addWatchFile(dep);
                }

                const importStmts = deps
                    .filter((dep) => dep.endsWith('.css'))
                    .map((dep) => `import "${dep}";`)
                    .join('\n');

                return {
                    code: `${importStmts}\n${jsCode}`,
                    map: null,
                };
            } catch (err) {
                this.error(`Error processing ${id}: ${err.message}`);
            }
        },
    };
}
