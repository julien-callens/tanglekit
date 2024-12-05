import htmlTags from "html-tags";

const generateName = createVariableNameGenerator();

export function generateJS(ast) {
    const variableContext = {};
    const functionContext = {};
    const componentContext = {};
    let output = "";

    const {imports, props, code, elements} = ast;

    updateContext(props, code, variableContext);
    output += formatContext(variableContext, functionContext);

    output += `function createFragment(ctx) {\n`;

    if (elements) {
        if (!isValidElement(elements.tagName)) {
            return;
        }

        if (isComponent(elements.tagName, componentContext)) {
            const component = componentScope[elements.tagName];
            console.log(component);
        }

        let element = `const ${elements.tagName} = document.createElement('${elements.tagName}');\n`;

        for (const attr in elements.attributes) {
            element += `${elements.tagName}.setAttribute('${elements.attributes[attr].name}', '${elements.attributes[attr].value.value}');\n`;
        }

        for (const child of elements.children) {
            if (child.type === "element") {

                const elementName = generateName();

                element += createElement(
                    elementName,
                    child.tagName,
                    child.attributes,
                    child.children,
                    componentContext
                );

                element += `${elements.tagName}.appendChild(${elementName});\n`;
            } else if (child.type === "text") {
                element += `${elements.tagName}.innerHTML += '${child.value}';\n`;
            }
        }

        output += element;
    }

    let outputEnd = seedContext(variableContext);

    outputEnd += `document.body.appendChild(createFragment(ctx));\n`;

    return `${output}\nreturn ${elements.tagName};\n}\n${outputEnd}`;
}

function updateContext(props, code, variableContext) {
    if (props) {
        props.forEach((prop) => {
            variableContext[prop.variable] = prop.value;
        });
    }

    if (code) {
        code.forEach((content) => {
            if (content.type === "variableDeclaration") {
                let variable = content.value.value;

                if (content.value.type === "string") {
                    variable = `'${variable}'`;
                }

                variableContext[content.name] = {
                    type: "variable",
                    value: variable,
                };
            }
        });
    }
}

function createElement(name, tag, attributes, children, ctx) {
    if (!isValidElement(tag)) {
        return '';
    }

    if (isComponent(tag, ctx)) {
        const component = componentScope[tag];
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

function formatContext(variableContext, functionContext) {
    let context = '';

    for (const variable in variableContext) {
        if (variableContext[variable].type === 'variable') {
            context += `let ${variable} = ${variableContext[variable].value};\n`;
        }
    }

    for (const func in functionContext) {
        context += functionContext[func].value;
    }

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
