import {compileTangleToAST, generateJS} from "../js/main.js";
import * as fs from "node:fs";

const testFile = fs.readFileSync("./src/test/Test.tngl", "utf-8");

const ast = compileTangleToAST(testFile);

fs.writeFileSync("astTest.json", JSON.stringify(ast, null, 2));

const js = generateJS(ast, "./src/test/Test.tngl");

fs.writeFileSync("./src/test/output.js", js);
