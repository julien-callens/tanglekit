import {compileTangleToAST} from "../js/main.js";
import * as fs from "node:fs";

const testFile = fs.readFileSync("../../test/examples/extendedSyntax/Syntax.tngl", "utf-8");
console.log(`testFile: ${testFile}`);

const ast = compileTangleToAST(testFile);
console.log(`ast: ${JSON.stringify(ast, null, 2)}`);

fs.writeFileSync("astTest.json", JSON.stringify(ast, null, 2));
