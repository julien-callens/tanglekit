import {formatProps, transformValue, validatePropsForElement} from "./componentFunctions.js";
import {generateName} from "./helperFunctions.js";

function formatOnClick(attribute, name) {
    let content = attribute.content;
    return `${name}.addEventListener('click', () => {${transformValue(content.type, content)}});`;
}

export const elementTransformer = {
    element: (element, startName, ctx) => {
        const name = startName || generateName();
        let output = `const ${name} = document.createElement('${element.tagName}');`;

        for (const attribute of element.attributes) {
            if (attribute.name === "onClick") {
                output += formatOnClick(attribute, name);
            } else {
                const transformedValue = transformValue(attribute.attributeType, attribute.content, true);
                output += `${name}.setAttribute('${attribute.name}', ${transformedValue});`;
            }
        }

        for (const child of element.children) {
            const isComponent = isComponentChild(child, ctx);

            switch (child.type) {
                case "element":
                    if (isComponent) {
                        const componentImport = ctx.imports.find((imp) => imp.id === child.tagName);
                        output += elementTransformer.component(child, componentImport, ctx);
                        output += `${name}.appendChild(${child.tagName.toLowerCase()});`;
                    } else {
                        const elementName = generateName();
                        output += elementTransformer.element(child, elementName, ctx);
                        output += `${name}.appendChild(${elementName});`;
                    }
                    break;

                case "text":
                    output += `${name}.innerHTML += ${transformValue(child.type, child.value, true)};`;
                    break;

                case "embeddedStatement":
                    if (child.expression.value === "children") {
                        output += `children.forEach((ch) => {`;
                        output += `${name}.appendChild(ch());`;
                        output += "});";
                    } else {
                        output += `${name}.innerHTML += ${transformValue(child.expression.type, child.expression.value)};`;
                    }
                    break;

                case "embeddedIf":
                    output += generateEmbeddedIf(child, name, ctx);
                    break;

                default:
                    break;
            }
        }

        return output;
    },

    attribute: (attr) => {
        return `${attr.name}: ${transformValue(attr.type, attr.value)}`;
    },

    text: (text) => {
        return `"${text}"`;
    },

    embeddedStatement: (statement) => {
        return statement;
    },

    component: (element, component, ctx) => {
        validatePropsForElement(element, component);
        return formatComponent(element, ctx);
    }
};

function generateEmbeddedIf(node, parentName, ctx) {
    let output = "";

    if (node.ifBranch) {
        const conditionStr = generateCondition(node.ifBranch.condition);
        output += `if (${conditionStr}) {`;
        output += generateEmbeddedIfContent(node.ifBranch.content, parentName, ctx);
        output += `}`;
    }

    if (node.elseIfBranches && node.elseIfBranches.length > 0) {
        node.elseIfBranches.forEach((elif) => {
            const elifConditionStr = generateCondition(elif.condition);
            output += `else if (${elifConditionStr}) {`;
            output += generateEmbeddedIfContent(elif.content, parentName, ctx);
            output += `}`;
        });
    }

    if (node.elseBranch && node.elseBranch.content && node.elseBranch.content.length > 0) {
        output += `else {`;
        output += generateEmbeddedIfContent(node.elseBranch.content, parentName, ctx);
        output += `}`;
    }

    return output;
}

function generateEmbeddedIfContent(contentArray, parentName, ctx) {
    let output = "";
    for (const contentNode of contentArray) {
        const isComponent = isComponentChild(contentNode, ctx);

        switch (contentNode.type) {
            case "element":
                if (isComponent) {
                    const componentImport = ctx.imports.find((imp) => imp.id === contentNode.tagName);
                    output += elementTransformer.component(contentNode, componentImport, ctx);
                    output += `${parentName}.appendChild(${contentNode.tagName.toLowerCase()});`;
                } else {
                    const elementName = generateName();
                    output += elementTransformer.element(contentNode, elementName, ctx);
                    output += `${parentName}.appendChild(${elementName});`;
                }
                break;

            case "text":
                output += `${parentName}.innerHTML += ${transformValue(contentNode.type, contentNode.value, true)};`;
                break;

            case "embeddedStatement":
                if (contentNode.expression.value === "children") {
                    output += `children.forEach((ch) => {`;
                    output += `${parentName}.appendChild(ch());`;
                    output += "});";
                } else {
                    output += `${parentName}.innerHTML += ${transformValue(
                        contentNode.expression.type,
                        contentNode.expression.value
                    )};`;
                }
                break;

            default:
                break;
        }
    }
    return output;
}

function generateCondition(booleanExpression) {
    if (!booleanExpression) return "true";
    const left = transformValue(booleanExpression.left.type, booleanExpression.left.value);
    const op = booleanExpression.operator;
    const right = transformValue(booleanExpression.right.type, booleanExpression.right.value);
    return `${left} ${op} ${right}`;
}


function formatComponent(element, ctx) {
    let output = `const ${element.tagName.toLowerCase()} = ${element.tagName}(`;
    const props = formatProps(element.attributes, "in");

    const childrenAvailable = element.children && element.children.length > 0;
    const children = childrenAvailable ? `children: ${formatChildren(element.children, ctx)}` : null;

    if (props || children) {
        const combinedProps = [props, children].filter(Boolean).join(", ");
        output += `{${combinedProps}}`;
    }

    output += ");";
    return output;
}

function isComponentChild(child, ctx) {
    return !!ctx?.imports.find((imp) => (imp.id === child.tagName) && (imp.type === "componentImport"));
}

function formatChildren(children, ctx) {
    let output = "[";

    children.forEach((child) => {
        output += "() => {";

        const isComponent = isComponentChild(child, ctx);
        switch (child.type) {
            case "element":
                if (isComponent) {
                    const componentImport = ctx.imports.find((imp) => imp.id === child.tagName);
                    output += elementTransformer.component(child, componentImport, ctx);
                    output += `return ${child.tagName.toLowerCase()}`;
                } else {
                    const elementName = generateName();
                    output += elementTransformer.element(child, elementName, ctx);
                    output += `return ${elementName}`;
                }
                break;

            case "text":
                output += `return document.createTextNode(${transformValue(child.type, child.value, true)})`;
                break;

            case "embeddedStatement":
                output += `return ${transformValue(child.expression.type, child.expression.value)}`;
                break;

            default:
                break;
        }

        output += "}, ";
    });

    output += "]";
    return output;
}


