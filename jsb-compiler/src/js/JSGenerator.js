import htmlTags from "html-tags";

const generateName = createVariableNameGenerator();

export function generateJS(ast) {
    let output = "";
    let ctx = {
        variables: [],
        functions: [],
        imports: [],
    };

    console.log(`AST: ${JSON.stringify(ast, null, 4)}`);

    const {imports, props, code, elements} = ast;

    ctx = updateContext(imports, props, code, ctx);

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
            element += `${tagName}.setAttribute('${attributes[attr].name}', '${attributes[attr].content.value}');\n`;
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

function updateContext(imports, props, code, ctx) {
    if (props) {
        props.forEach((prop) => {
            let variable = prop.assigned;
            let type = variable.type;

            if (type === "string") {
                variable = `${variable.value}`;
            }

            ctx["variables"] = [
                ...ctx["variables"],
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

                ctx["variables"] = [
                    ...ctx["variables"],
                    {
                        name: content.name,
                        type: type,
                        value: variable,
                    }
                ]
            }
        });
    }

    console.log(`\x1b[32mContext:\x1b[0m ${JSON.stringify(ctx, null, 4)}`);

    return ctx;
}

function formatContext(ctx) {
    let context = '';
    const variables = ctx.variables;

    for (const variable of variables) {
        if (variable.type === 'string') {
            context += `let ${variable.name} = "${variable.value}";\n`;
        }
    }

    return context;
}

function seedContext(ctx) {
    const variables = ctx.variables.map(variable => variable.name).join(', ');
    const functions = ctx.functions.map(func => func.name).join(', ');
    return `const ctx = { ${variables} ${functions ? `, ${functions}` : ''} }\n`;
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
