import {formatProps, transformValue, validatePropsForElement} from "./componentFunctions.js";
import {generateName} from "../JSGenerator.js";

export const elementTransformer = {
    element: (element, startName, ctx) => {
        const name = startName || generateName();
        let output = `\nconst ${name} = document.createElement('${element.tagName}');\n`;

        for (const attribute of element.attributes) {
            const transformedValue = transformValue(attribute.attributeType, attribute.content, true);
            output += `${name}.setAttribute('${attribute.name}', ${transformedValue});\n`;
        }

        for (const child of element.children) {
            const isComponent = isComponentChild(child, ctx);

            switch (child.type) {
                case "element":
                    if (isComponent) {
                        const componentImport = ctx.imports.find((imp) => imp.id === child.tagName);
                        output += elementTransformer.component(child, componentImport, ctx);
                        output += `${name}.appendChild(${child.tagName.toLowerCase()});\n`;
                    } else {
                        const elementName = generateName();
                        output += elementTransformer.element(child, elementName, ctx);
                        output += `${name}.appendChild(${elementName});\n`;
                    }
                    break;

                case "text":
                    output += `${name}.innerHTML += ${transformValue(child.type, child.value, true)};\n`;
                    break;

                case "embeddedStatement":
                    if (child.expression.value === "children") {
                        output += `children.forEach((child) => {\n`;
                        output += `${name}.appendChild(child());\n`;
                        output += "});\n";
                        break;
                    }
                    output += `${name}.innerHTML += ${transformValue(child.expression.type, child.expression.value)};\n`;
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

        let output = `\nconst ${element.tagName.toLowerCase()} = ${element.tagName}(`;
        const props = formatProps(element.attributes, "in");

        const childrenAvailable = element.children && element.children.length > 0;
        const children = childrenAvailable ? `children: ${formatChildren(element.children, ctx)}` : null;

        if (props || children) {
            const combinedProps = [props, children].filter(Boolean).join(", ");
            output += `{${combinedProps}}`;
        }

        output += ");\n";
        return output;
    }
};

function isComponentChild(child, ctx) {
    return !!ctx?.imports.find((imp) => (imp.id === child.tagName) && (imp.type === "component"));
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


