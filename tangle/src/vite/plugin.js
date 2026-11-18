import path from "node:path";
import {readFile} from "node:fs/promises";
import {compileTangleToAST, generateJS} from "../js/main.js";

export default function tanglePlugin() {
    const compiled = new Map();

    return {
        name: "vite-plugin-tangle",
        enforce: "pre",

        buildStart() {
            compiled.clear();
        },

        handleHotUpdate({file, modules}) {
            if (!file.endsWith(".tngl")) return;
            // Vite can reuse an importer's transform when only its JS import timestamp changed.
            const affected = new Set(modules);
            for (const module of affected) {
                for (const importer of module.importers) {
                    if (importer.id?.endsWith(".tngl")) affected.add(importer);
                }
            }
            return [...affected];
        },

        async transform(code, id) {
            if (!id.endsWith(".tngl")) return null;
            const visited = new Map();

            const compile = async (file, chain, source) => {
                if (chain.includes(file)) {
                    throw new Error(`Circular Tangle import: ${[...chain, file].join(" -> ")}`);
                }
                if (visited.has(file)) return visited.get(file);

                source ??= await readFile(file, "utf8");
                const cached = compiled.get(file);
                const ast = cached?.source === source ? cached.ast : compileTangleToAST(source);
                const imports = [];
                const dependencies = [];
                for (const imp of ast.imports) {
                    if (imp.type === "styleImport") {
                        imports.push(imp);
                        continue;
                    }
                    const child = path.resolve(path.dirname(file), imp.path);
                    if (child === file) continue; // Historically redundant direct self-imports are ignored.
                    this.addWatchFile(child);
                    const entry = await compile(child, [...chain, file]);
                    dependencies.push(entry);
                    imports.push({...imp, props: entry.ast.props.map(prop => ({
                        name: prop.name, required: prop.assignedType === null,
                    }))});
                }

                let entry = cached;
                if (cached?.ast !== ast || dependencies.some((dep, i) => dep !== cached.dependencies[i])) {
                    const js = await generateJS({...ast, imports}, file);
                    entry = {source, ast, dependencies, js};
                    compiled.set(file, entry);
                }
                visited.set(file, entry);
                return entry;
            };

            try {
                const entry = await compile(path.resolve(id), [], code);
                return {code: entry.js, map: null};
            } catch (err) {
                this.error(`Error processing ${id}: ${err.message}`);
            }
        },
    };
}
