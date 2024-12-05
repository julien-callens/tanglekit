import htmlTags from "html-tags";

const generateName = createVariableNameGenerator();

export function generateJS(ast) {
    let output = "";
    let ctx = {
        variable: [],
        function: [],
        imports: [],
    };

    const {imports, props, code, elements} = ast;

    ctx = updateContext(props, code, ctx);
    output += formatContext(ctx);

    output += `function createFragment(ctx) {\n`;

    let {tagName, attributes, children} = elements;

    if (elements) {
        if (!isValidElement(tagName)) {
            return;
        }

        if (isComponent(tagName, ctx)) {
            const component = ctx[tagName];
            console.log(component);
        }

        let element = `const ${tagName} = document.createElement('${tagName}');\n`;

        for (const attr in attributes) {
            element += `${tagName}.setAttribute('${attributes[attr].name}', '$.attributes[attr].content.value}');\n`;
        }

        for (const child of children) {
            if (child.type === "element") {

                const elementName = generateName();

                element += createElement(
                    elementName,
                    child.tagName,
                    child.attributes,
                    child.children,
                    ctx
                );

                element += `${tagName}.appendChild(${elementName});\n`;
            } else if (child.type === "text") {
                element += `${tagName}.innerHTML += '${child.value}';\n`;
            }
        }

        output += element;
    }

    let outputEnd = seedContext(ctx);

    outputEnd += `document.body.appendChild(createFragment(ctx));\n`;

    return `${output}\nreturn ${tagName};\n}\n${outputEnd}`;
}

function updateContext(props, code, ctx) {
    if (props) {
        props.forEach((prop) => {
            let variable = prop.assigned;
            let type = variable.type;

            if (type === "string") {
                variable = `${variable.value}`;
            }

            ctx["variable"] = [
                ...ctx["variable"],
                {
                    name: prop.name,
                    type: type,
                    value: variable,
                }
            ]
        });
    }

    if (code) {
        code.forEach((content) => {
            if (content.type === "variableDeclaration") {
                let variable = content.assigned;
                let type = variable.type;

                if (type === "string") {
                    variable = `${variable.value}`;
                }

                ctx["variable"] = [
                    ...ctx["variable"],
                    {
                        name: content.name,
                        type: type,
                        value: variable,
                    }
                ]
            }
        });
    }

    console.log(JSON.stringify(ctx, null, 4));

    return ctx;
}

function createElement(name, tag, attributes, children, ctx) {
    if (!isValidElement(tag)) {
        return '';
    }

    if (isComponent(tag, ctx)) {
        const component = ctx[tag];
        console.log(component);
    }

    let element = `const ${name} = document.createElement('${tag}');\n`;

    for (const child of children) {
        if (child.type === "element") {
            const elementName = generateName();

            element += createElement(
                elementName,
                child.tagName,
                child.props,
                child.children,
                generateName,
                ctx
            );

            element += `${name}.appendChild(${elementName});\n`;
        } else if (child.type === "text") {
            element += `${name}.innerHTML += '${child.value}';\n`;
        } else if (child.type === "embeddedStatement") {
            const expression = child.expression;
            if (expression.type === "name") {
                element += `${name}.innerHTML += ${expression.value};\n`;
            }
        }
    }

    return element;
}

function formatContext(ctx) {
    let context = '';

    for (const variable in ctx) {
        if (ctx[variable].type === 'variable') {
            context += `let ${variable} = ${ctx[variable].value};\n`;
        }
    }

    // for (const func in ctx) {
    //     context += ctx[func].value;
    // }

    return context;
}

function seedContext(variableContext) {
    const variables = Object.keys(variableContext);
    return `const ctx = { ${variables.join(', ')} };\n`;
}

function isValidElement(tagName) {
    const isValid = htmlTags.includes(tagName);

    if (!isValid) {
        console.error(`Invalid element: ${tagName}`);
    }

    return isValid;
}

function isComponent(tagName, componentContext) {
    return componentContext.hasOwnProperty(tagName);
}

function createVariableNameGenerator() {
    const usedNames = new Set();
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const length = 8;

    return function generateName() {
        let name;
        do {
            name = '';
            for (let i = 0; i < length; i++) {
                name += charset.charAt(Math.floor(Math.random() * charset.length));
            }
        } while (usedNames.has(name));

        usedNames.add(name);
        return name;
    };
}
