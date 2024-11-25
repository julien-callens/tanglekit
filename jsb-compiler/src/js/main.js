import JSBSyntaxLexer from "./generated/JSBLexer.js";
import JSBSyntaxParser from "./generated/JSBParser.js";
import { CharStream, CommonTokenStream } from "antlr4";
import fs from "fs";

function convertTreeToJSON(tree, parser) {
    const node = {
        name: parser.ruleNames[tree.ruleIndex] || tree.getText(),
        children: [],
    };

    for (let i = 0; i < tree.getChildCount(); i++) {
        const child = tree.getChild(i);
        if (child.ruleIndex !== undefined) {
            node.children.push(convertTreeToJSON(child, parser));
        } else {
            node.children.push({ name: child.getText() });
        }
    }

    return node;
}

function parseText(input) {
    const chars = new CharStream(input);
    const lexer = new JSBSyntaxLexer(chars);
    const tokens = new CommonTokenStream(lexer);
    const parser = new JSBSyntaxParser(tokens);
    const context = parser.document();

    const treeJSON = convertTreeToJSON(context, parser);

    fs.writeFileSync("parseTree.json", JSON.stringify(treeJSON, null, 2));
    console.log("Parse tree saved to parseTree.json");
}

parseText(`
<div class='randomClass'>
        <p class={{variable}}>variable: {{variable}}</p>
        <button onClick={{handleClick()}}>Click me</button>
        <NestedComponent/>
        <AnotherNestedComponent>
            content of AnotherNestedComponent
        </AnotherNestedComponent>

       {{children}}
</div>
`);
