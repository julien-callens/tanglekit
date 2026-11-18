import {mkdtemp, readFile, rm, writeFile} from "node:fs/promises";
import {tmpdir} from "node:os";
import path from "node:path";
import {fileURLToPath} from "node:url";
import {JSDOM} from "jsdom";
import {build} from "vite";
import {afterEach, expect, test} from "vitest";
import tanglePlugin from "../src/js/main.js";

const examples = fileURLToPath(new URL("./examples/", import.meta.url));
const cleanups = [];
afterEach(async () => {
    while (cleanups.length) await cleanups.pop()();
});

async function fixture(files) {
    const root = await mkdtemp(path.join(tmpdir(), "tangle-render-"));
    cleanups.push(() => rm(root, {recursive: true, force: true}));
    for (const [name, content] of Object.entries(files)) {
        await writeFile(path.join(root, name), content);
    }
    return root;
}

async function bundle(entry) {
    const [{output}] = await build({
        root: path.dirname(entry),
        configFile: false,
        logLevel: "silent",
        plugins: [tanglePlugin()],
        build: {write: false, minify: false, lib: {entry, name: "Fixture", formats: ["iife"]}},
    });
    const {window} = new JSDOM("", {runScripts: "outside-only"});
    cleanups.push(() => window.close());
    window.eval(output.find(file => file.type === "chunk").code);
    return {window, render: window.Fixture, assets: output.filter(file => file.type === "asset")};
}

test("builds the existing nested component and extracts its CSS", async () => {
    const {window, render, assets} = await bundle(path.join(examples, "BasicSyntax.tngl"));
    const root = render();
    expect(root).toBeInstanceOf(window.HTMLDivElement);
    expect(root.querySelector("p.balls").textContent).toBe("variable: balls");
    expect(root.querySelector("h2").textContent).toContain("I am a nested component! balls");
    expect(root.querySelector("h2 h2 p").textContent).toBe("content of AnotherNestedComponent");
    expect(assets.some(file => file.fileName.endsWith(".css") && file.source.includes(".balls"))).toBe(true);
});

test("component roots, repeated instances, defaults and slot renderers return DOM nodes", async () => {
    const dir = await fixture({
        "Root.tngl": `<import>Box from './Box.tngl'; Leaf from './Leaf.tngl';</import>
            <props>let message; let n;</props>
            <Box><Leaf/><Leaf/>:{{message}}/{{n}}<Box/>
            {{if (n)}}{{if (n > 1)}}many{{else if (n === 1)}}one{{else}}none{{/if}}
            {{else}}zero{{/if}}</Box>`,
        "Box.tngl": "<props>let children;</props><article>{{children}}</article>",
        "Leaf.tngl": '<props>let label = "leaf";</props><b>{{label}}</b>',
    });
    const {window, render} = await bundle(path.join(dir, "Root.tngl"));
    for (const [n, branch] of [[0, "zero"], [1, "one"], [2, "many"]]) {
        const root = render({message: "<em>hello</em>", n});
        expect(root).toBeInstanceOf(window.HTMLElement);
        expect(root.tagName).toBe("ARTICLE");
        const leaves = root.querySelectorAll("b");
        expect(leaves).toHaveLength(2);
        expect(leaves[0]).not.toBe(leaves[1]);
        expect(root.querySelector("article").childNodes).toHaveLength(0);
        expect(root.querySelector("em")).toBeNull();
        expect(root.textContent.trim()).toBe(`leafleaf:<em>hello</em>/${n}${branch}`);
    }
    expect(() => render({n: 0})).toThrow("Missing required prop 'message'");
});

test("appending literal text and interpolation preserves click listeners and expression values", async () => {
    const dir = await fixture({
        "Expressions.tngl": String.raw`<props>let notify;</props>
        <code>
            let x = 1 + 2;
            let n = 9;
            let flag = true;
            // the assignments below must run
            n = 0;
            flag = false;
            function getMessage() { return '<b>say "hi"</b>'; }
            function click() { notify(getMessage(), x, n, flag); }
        </code>
        <div><button onClick={{click()}}>go</button> "path\name" {{getMessage()}}
            {{if (x === 3)}}{{if (!flag)}}{{n}}{{else}}bad{{/if}}{{/if}}</div>`,
    });
    const {window, render} = await bundle(path.join(dir, "Expressions.tngl"));
    const calls = [];
    const root = render({notify: (...args) => calls.push(args)});
    const message = '<b>say "hi"</b>';
    expect(root.childNodes[1].nodeType).toBe(window.Node.TEXT_NODE);
    expect(root.textContent).toBe(String.raw`go "path\name" ` + message + "0");
    expect(root.querySelector("b")).toBeNull();
    root.querySelector("button").click();
    expect(calls).toEqual([[message, 3, 0, false]]);
});

test("the demo entry displays its count and updates on consecutive clicks", async () => {
    const entry = fileURLToPath(new URL("../../tangle-demo/src/main.js", import.meta.url));
    const {window} = await bundle(entry);
    const body = window.document.body;
    expect(body.textContent).toContain("Count = 6");
    expect(body.textContent).toContain("Count is greater than 5");
    expect(body.textContent).toContain("Clicks = 0");
    expect(body.textContent).toContain("this is an extra component");
    const button = body.querySelector("button");
    button.click();
    expect(body.textContent).toContain("Clicks = 1");
    button.click();
    expect(body.textContent).toContain("Clicks = 2");
});

test("compiles the README language examples and runs its full component", async () => {
    const readme = await readFile(new URL("../README.md", import.meta.url), "utf8");
    const usage = readme.split("### 1) `<import>` Block")[1].split("The generated module imports")[0];
    const snippets = [...usage.matchAll(/^ *```(\w*)\n([\s\S]*?)^ *```/gm)];
    const files = {
        "styles.css": ".example { color: blue; }",
        "NestedComponent.tngl": '<props>let someProp = ""; let prop = ""; let prop2 = "";</props><b>{{someProp}}</b>',
        "AnotherNestedComponent.tngl": "<props>let children;</props><section>{{children}}</section>",
    };
    const exports = [];
    let fullExample;
    for (const [index, [_, language, body]] of snippets.entries()) {
        let source = body.trim();
        if (language === "js") source = `<code>\n${source}\n</code>`;
        if (source.startsWith("{{")) source = `<div>${source}</div>`;
        if (/<\/(?:code|props|import)>$/.test(source)) source += "\n<div/>";
        const name = `Example${index}`;
        files[name + ".tngl"] = source;
        exports.push(`export {default as ${name}} from "./${name}.tngl";`);
        if (body.includes("function increment(")) fullExample = name;
    }
    files["examples.js"] = exports.join("\n");
    const dir = await fixture(files);
    const {render: examples} = await bundle(path.join(dir, "examples.js"));
    const root = examples[fullExample]({requiredCount: 5});
    expect(root.querySelector("h2").textContent).toBe("Welcome to TangleKit");
    expect(root.querySelector("b").textContent).toBe("Yes, it's above 5");
    const counter = [...root.querySelectorAll("p")].find(p => p.textContent.startsWith("Clicks = "));
    expect(counter.textContent).toBe("Clicks = 0");
    root.querySelector("button").click();
    expect(counter.textContent).toBe("Clicks = 1");
});

test("returns, nested calls and prefix/postfix updates retain their expression values", async () => {
    const dir = await fixture({
        "Updates.tngl": `<code>
            let count = 2;
            function add(a, b) { return a + b; }
            let before = count++;
            let after = --count;
            count--;
            ++count;
            let result = add(1, add(before, after)) * (count + 1);
            result = add(result, 0);
        </code><p>{{before}} {{after}} {{count}} {{result}} {{count--}}</p>`,
    });
    const {render} = await bundle(path.join(dir, "Updates.tngl"));
    expect(render().textContent).toBe("2 2 2 15 2");
});

test("both click forms update existing text bindings within their own component instance", async () => {
    const dir = await fixture({
        "Counter.tngl": `<props>let initial;</props><code>
            let count = initial;
            function increment() { count += 1; }
            function snapshot() { return count; }
        </code><section><button onClick={{increment()}}>call</button>
            <button onClick={{increment}}>reference</button>
            <output>{{count}}</output>{{if (true)}}<b>{{count}}</b>{{/if}}
            <i>{{snapshot()}}</i></section>`,
    });
    const {render} = await bundle(path.join(dir, "Counter.tngl"));
    const first = render({initial: 0});
    const second = render({initial: 10});
    const text = first.querySelector("output").firstChild;
    for (const [index, button] of [...first.querySelectorAll("button")].entries()) {
        button.click();
        expect(first.querySelector("output").firstChild).toBe(text);
        expect(text.data).toBe(String(index + 1));
        expect(first.querySelector("b").textContent).toBe(text.data);
        expect(first.querySelector("i").textContent).toBe("0");
        expect(second.querySelector("output").textContent).toBe("10");
    }
});
