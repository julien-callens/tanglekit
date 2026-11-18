import {mkdtemp, readFile, realpath, rm, writeFile} from "node:fs/promises";
import {tmpdir} from "node:os";
import path from "node:path";
import {createServer as httpServer} from "node:http";
import {createServer} from "vite";
import {afterEach, beforeEach, expect, test, vi} from "vitest";
import tanglePlugin from "../src/js/main.js";

let root;
beforeEach(async () => { root = await realpath(await mkdtemp(path.join(tmpdir(), "tangle-import-"))); });
afterEach(async () => { await rm(root, {recursive: true, force: true}); });

function save(name, source) {
    return writeFile(path.join(root, name + ".tngl"), source);
}

function importer(name, attrs = "") {
    return `<import>${name} from './${name}.tngl';</import><${name} ${attrs}/>`;
}

function compiler() {
    const plugin = tanglePlugin();
    const watched = new Set();
    return {
        watched,
        buildStart: plugin.buildStart,
        async transform(name) {
            const file = path.join(root, name + ".tngl");
            return plugin.transform.call({
                addWatchFile(file) { watched.add(path.basename(file)); },
                error(message) { throw new Error(message); },
            }, await readFile(file, "utf8"), file);
        },
    };
}

test("unchanged parents and grandparents revalidate and recover on the same instance", async () => {
    await save("Root", importer("Parent"));
    await save("Parent", importer("Child"));
    await save("Child", "<p/>");
    const warm = compiler();
    await warm.transform("Root");
    expect(warm.watched).toEqual(new Set(["Child.tngl", "Parent.tngl"]));

    await save("Child", "<props>let label;</props><p>{{label}}</p>");
    for (const instance of [warm, compiler()]) {
        await expect(instance.transform("Root")).rejects.toThrow("Missing required prop 'label' for component 'Child'");
        await expect(instance.transform("Parent")).rejects.toThrow("Missing required prop 'label'");
    }
    await save("Parent", importer("Child", 'label="ok"'));
    await expect(warm.transform("Parent")).resolves.toHaveProperty("code");
    await expect(warm.transform("Root")).resolves.toEqual(await compiler().transform("Root"));
    warm.buildStart();
    await expect(warm.transform("Root")).resolves.toEqual(await compiler().transform("Root"));
});

test("reports an indirect cycle with its chain and retries after repair", async () => {
    await save("A", importer("B"));
    await save("B", importer("C"));
    await save("C", importer("A"));
    const instance = compiler();
    const chain = ["A", "B", "C", "A"].map(name => path.join(root, name + ".tngl")).join(" -> ");
    await expect(instance.transform("A")).rejects.toThrow("Circular Tangle import: " + chain);
    await save("C", "<p/>");
    await expect(instance.transform("A")).resolves.toHaveProperty("code");
});

test("Vite reruns parent transforms on a hot update to a child's contract", async () => {
    await save("Child", "<b/>");
    await save("Parent", importer("Child"));
    const server = await createServer({
        root, configFile: false, logLevel: "silent", plugins: [tanglePlugin()],
        server: {middlewareMode: true, hmr: {server: httpServer()}, watch: null, preTransformRequests: false},
    });
    try {
        const sent = vi.spyOn(server.ws, "send");
        async function change(name, source) {
            sent.mockClear();
            await save(name, source);
            server.watcher.emit("change", path.join(root, name + ".tngl"));
            await vi.waitFor(() => expect(sent).toHaveBeenCalled());
        }
        await server.transformRequest("/Parent.tngl");
        await server.transformRequest("/Child.tngl");
        await change("Child", "<props>let label;</props><b>{{label}}</b>");
        await expect(server.transformRequest("/Parent.tngl")).rejects.toThrow("Missing required prop 'label'");
        await change("Parent", importer("Child", 'label="OK"'));
        expect((await server.transformRequest("/Parent.tngl")).code).toContain('"OK"');
    } finally {
        await server.close();
    }
});
