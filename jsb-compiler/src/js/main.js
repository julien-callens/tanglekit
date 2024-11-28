import antlr4 from "antlr4";
import fs from "fs";
import {JSBVisitor} from "./JSBVisitor.js";
import JSBParser from "./generated/JSBParser.js";
import JSBLexer from "./generated/JSBLexer.js";

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
}

parseText(`
<div class='randomClass'>
        <p class={{varBean}}>variable in class: {{varBean}}</p>
        <button onClick={{handleClick()}}>Click me</button>
        <NestedComponent/>
        <AnotherNestedComponent>
            content of AnotherNestedComponent
        </AnotherNestedComponent>

       {{children}}
</div>
`);
