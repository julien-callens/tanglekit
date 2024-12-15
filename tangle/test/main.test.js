import {processTangleFile} from "./testFunctions.js";
import {expect, test} from 'vitest'
import {compileTangleToAST} from "../src/js/main.js";

test("full syntax e2e test", async () => {
    let generatedJS = await processTangleFile("test/examples/BasicSyntax.tngl");
    expect(generatedJS).toBe(`import NestedComponent from './NestedComponent.tngl';
import AnotherNestedComponent from './AnotherNestedComponent.tngl';
export default function BasicSyntax() {
let variable = "balls";

const SqJBlfdq = document.createElement('div');
SqJBlfdq.setAttribute('class', "randomClass");

const gKEtnNWj = document.createElement('p');
gKEtnNWj.setAttribute('class', variable);
gKEtnNWj.innerHTML += "variable: ";
gKEtnNWj.innerHTML += variable;
SqJBlfdq.appendChild(gKEtnNWj);

const nestedcomponent = NestedComponent({prop: null, prop2: variable});
SqJBlfdq.appendChild(nestedcomponent);

const anothernestedcomponent = AnotherNestedComponent({children: [() => {
const rZuCyZTK = document.createElement('p');
rZuCyZTK.innerHTML += "content of AnotherNestedComponent";
return rZuCyZTK}, () => {return document.createTextNode(" test ")}, () => {
const anothernestedcomponent = AnotherNestedComponent({children: [() => {
const XYitJizj = document.createElement('p');
XYitJizj.innerHTML += "content of AnotherNestedComponent";
return XYitJizj}, () => {return document.createTextNode(" test ")}, ]});
return anothernestedcomponent}, ]});
SqJBlfdq.appendChild(anothernestedcomponent);

return SqJBlfdq;
}
`);
});

test("ast generation test", async () => {
    const ast = compileTangleToAST(`<import>
    "./styles.css";
    NestedComponent from './NestedComponent.tngl';
    AnotherNestedComponent from './AnotherNestedComponent.tngl';
</import>

<code>
    let variable = 'balls';
</code>

<div class='randomClass'>
        <p class={{variable}}>variable: {{variable}}</p>

        <NestedComponent prop="beans" prop2={{variable}} />
        <AnotherNestedComponent>
            <p>content of AnotherNestedComponent</p>
            test
            <AnotherNestedComponent>
                        <p>content of AnotherNestedComponent</p>
                        test
                    </AnotherNestedComponent>
        </AnotherNestedComponent>
</div>
`);

    const expectedAst = JSON.parse(`{
  "imports": [
    {
      "type": "style",
      "path": "./styles.css"
    },
    {
      "type": "component",
      "id": "NestedComponent",
      "path": "./NestedComponent.tngl"
    },
    {
      "type": "component",
      "id": "AnotherNestedComponent",
      "path": "./AnotherNestedComponent.tngl"
    }
  ],
  "props": [],
  "code": [
    {
      "type": "variableDeclaration",
      "varDef": "let",
      "name": "variable",
      "assignedType": "string",
      "value": "balls"
    }
  ],
  "elements": {
    "type": "element",
    "tagName": "div",
    "attributes": [
      {
        "type": "attribute",
        "name": "class",
        "attributeType": "string",
        "content": "randomClass"
      }
    ],
    "children": [
      {
        "type": "element",
        "tagName": "p",
        "attributes": [
          {
            "type": "attribute",
            "name": "class",
            "attributeType": "embeddedStatement",
            "content": {
              "type": "name",
              "value": "variable"
            }
          }
        ],
        "children": [
          {
            "type": "text",
            "value": "variable: "
          },
          {
            "type": "embeddedStatement",
            "expression": {
              "type": "name",
              "value": "variable"
            }
          }
        ]
      },
      {
        "type": "element",
        "tagName": "NestedComponent",
        "attributes": [
          {
            "type": "attribute",
            "name": "prop",
            "attributeType": "string",
            "content": "beans"
          },
          {
            "type": "attribute",
            "name": "prop2",
            "attributeType": "embeddedStatement",
            "content": {
              "type": "name",
              "value": "variable"
            }
          }
        ],
        "children": []
      },
      {
        "type": "element",
        "tagName": "AnotherNestedComponent",
        "attributes": [],
        "children": [
          {
            "type": "element",
            "tagName": "p",
            "attributes": [],
            "children": [
              {
                "type": "text",
                "value": "content of AnotherNestedComponent"
              }
            ]
          },
          {
            "type": "text",
            "value": " test "
          },
          {
            "type": "element",
            "tagName": "AnotherNestedComponent",
            "attributes": [],
            "children": [
              {
                "type": "element",
                "tagName": "p",
                "attributes": [],
                "children": [
                  {
                    "type": "text",
                    "value": "content of AnotherNestedComponent"
                  }
                ]
              },
              {
                "type": "text",
                "value": " test "
              }
            ]
          }
        ]
      }
    ]
  }
}
`)
    expect(ast).toStrictEqual(expectedAst);
});

test("imports are correctly parsed and transformed", async () => {
    const ast = compileTangleToAST(`<import>
    "./styles.css";
    NestedComponent from './NestedComponent.tngl';
  </import>`);

    expect(ast.imports).toStrictEqual([
        {type: "style", path: "./styles.css"},
        {type: "component", id: "NestedComponent", path: "./NestedComponent.tngl"}
    ]);
});

test("variable declarations in code blocks", async () => {
    const ast = compileTangleToAST(`<code>
    let variable = 'balls';
    const count = 10;
  </code>`);

    expect(ast.code).toStrictEqual([
        {
            type: "variableDeclaration",
            varDef: "let",
            name: "variable",
            assignedType: "string",
            value: "balls"
        },
        {
            type: "variableDeclaration",
            varDef: "const",
            name: "count",
            assignedType: "int",
            value: 10
        }
    ]);
});

test("simple element structure", async () => {
    const ast = compileTangleToAST(`<div class="container">Hello World</div>`);

    expect(ast.elements).toStrictEqual({
        type: "element",
        tagName: "div",
        attributes: [
            {
                type: "attribute",
                name: "class",
                attributeType: "string",
                content: "container"
            }
        ],
        children: [
            {type: "text", value: "Hello World"}
        ]
    });
});

test("embedded variables in elements", async () => {
    const ast = compileTangleToAST(`<p class={{variable}}>Value: {{variable}}</p>`);

    expect(ast.elements).toStrictEqual({
        type: "element",
        tagName: "p",
        attributes: [
            {
                type: "attribute",
                name: "class",
                attributeType: "embeddedStatement",
                content: {
                    type: "name",
                    value: "variable"
                }
            }
        ],
        children: [
            {type: "text", value: "Value: "},
            {
                type: "embeddedStatement",
                expression: {
                    type: "name",
                    value: "variable"
                }
            }
        ]
    });
});


test("nested components", async () => {
    const ast = compileTangleToAST(`
    <MyComponent prop="testProp">
      <ChildComponent />
    </MyComponent>
  `);

    expect(ast.elements).toStrictEqual({
        type: "element",
        tagName: "MyComponent",
        attributes: [
            {
                type: "attribute",
                name: "prop",
                attributeType: "string",
                content: "testProp"
            }
        ],
        children: [
            {
                type: "element",
                tagName: "ChildComponent",
                attributes: [],
                children: []
            }
        ]
    });
});
