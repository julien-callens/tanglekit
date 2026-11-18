import {expect, test} from 'vitest'
import {compileTangleToAST} from "../src/js/main.js";

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
      "type": "styleImport",
      "path": "./styles.css"
    },
    {
      "type": "componentImport",
      "id": "NestedComponent",
      "path": "./NestedComponent.tngl"
    },
    {
      "type": "componentImport",
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
  </import><p>test</p>`);

    expect(ast.imports).toStrictEqual([
        {
            "type": "styleImport",
            "path": "./styles.css"
        },
        {
            "type": "componentImport",
            "id": "NestedComponent",
            "path": "./NestedComponent.tngl"
        }
    ]);
});

test("variable declarations in code blocks", async () => {
    const ast = compileTangleToAST(`<code>
    let variable = 'balls';
    const count = 10;
  </code><p>test</p>`);

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

test.each([
    ["<p/>\n<div/>", /line 2:0 .*Only one root element is allowed.*'<' expecting <EOF>/],
    ["<div>\n  <b>ok</i>\n</div>", /line 2:9 .*expected <\/b>, found <\/i>/],
    ["<p/>trailing", /line 1:4 .*'trailing' expecting <EOF>/],
])("rejects malformed documents with a source location", (source, diagnostic) => {
    expect(() => compileTangleToAST(source)).toThrow(diagnostic);
});
