import antlr4 from "antlr4";
import fs from "fs";
import {JSBVisitor} from "./JSBVisitor.js";
import JSBParser from "./generated/JSBParser.js";
import JSBLexer from "./generated/JSBLexer.js";
import {generateJS} from "./JSGenerator.js";
import {exec} from "child_process";

function parseText(input) {
    const chars = new antlr4.InputStream(input);
    const lexer = new JSBLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new JSBParser(tokens);
    const tree = parser.document();

    const visitor = new JSBVisitor();
    const ast = visitor.visit(tree);

    console.log(JSON.stringify(ast, null, 2))

    fs.writeFileSync("ast.json", JSON.stringify(ast, null, 2));
    console.log("Parse tree saved to ast.json");

    const js = generateJS(ast);
    fs.writeFileSync("output.js", js);
    exec(`dprint fmt ${"output.js"}`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error formatting file: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Formatting stderr: ${stderr}`);
            return;
        }
        console.log(`File formatted successfully: ${stdout}`);
    });
    console.log("Generated JS saved to output.js");
    console.log(js);
}

parseText(`
<code>
    let test = 'balls';
    let testing = 'benas';
</code>
<div class="test">
    <p>{{test}}</p>
    <p>{{testing}}</p>
    test
</div>
`);
