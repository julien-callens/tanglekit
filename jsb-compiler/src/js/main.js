import antlr4 from "antlr4";
import fs from "fs";
import BasicJSBParser from "./generated/BasicJSBParser.js";
import BasicJSBLexer from "./generated/BasicJSBLexer.js";
import {generateJS} from "./JSGenerator.js";
import {BasicJSBVisitor} from "./basic/BasicJSBVisitor.js";

function parseText(input) {
    const chars = new antlr4.InputStream(input);
    const lexer = new BasicJSBLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new BasicJSBParser(tokens);
    const tree = parser.document();

    const visitor = new BasicJSBVisitor();
    const ast = visitor.visit(tree);

    console.log(JSON.stringify(ast, null, 2))

    fs.writeFileSync("ast.json", JSON.stringify(ast, null, 2));
    console.log("Parse tree saved to ast.json");

    const js = generateJS(ast);
    fs.writeFileSync("output.js", js);
    console.log("Generated JS saved to output.js");
    console.log(js);
}

parseText(`
<code>
    let test = 1;
    let testing = true;
    let test2 = 'test';
    
</code>
<div class="test">
    <div><p>{{test}}tyets</p><p>test</p></div>
    <p>{{testing}}</p>
    test
</div>
`);
