import {emitExpression, validatePropsForElement} from "./componentFunctions.js";

function attributeValue(attribute) {
    return attribute.attributeType === "string"
        ? JSON.stringify(attribute.content)
        : emitExpression(attribute.content);
}

function appendChildren(children, parent, ctx) {
    return children.map(child => {
        const name = ctx.nextName();
        return renderNode(child, name, ctx) + `${parent}.appendChild(${name});`;
    }).join("");
}

function renderComponent(element, component, name, ctx) {
    validatePropsForElement(element, component);
    const props = element.attributes.map(attr => `${attr.name}: ${attributeValue(attr)}`);
    if (element.children.length) {
        const renderers = element.children.map(child => {
            const name = ctx.nextName();
            return `() => {${renderNode(child, name, ctx)}return ${name};}`;
        });
        props.push(`children: [${renderers.join(", ")}]`);
    }
    return `const ${name} = ${component.id}(${props.length ? "{" + props.join(", ") + "}" : ""});`;
}

function renderElement(element, name, ctx) {
    const component = ctx.imports.find(imp => imp.id === element.tagName);
    if (component) return renderComponent(element, component, name, ctx);

    let output = `const ${name} = document.createElement(${JSON.stringify(element.tagName)});`;
    for (const attribute of element.attributes) {
        const value = attributeValue(attribute);
        if (attribute.name === "onClick") {
            let listener = attribute.content.type === "name" ? value : `(event) => { ${value}; }`;
            if (ctx.mutableNames.size) {
                ctx.hasClickUpdates = true;
                listener = `$afterClick(${listener})`;
            }
            output += `${name}.addEventListener("click", ${listener});`;
        } else {
            output += `${name}.setAttribute(${JSON.stringify(attribute.name)}, ${value});`;
        }
    }
    return output + appendChildren(element.children, name, ctx);
}

export function renderNode(node, name, ctx) {
    if (node.type === "element") return renderElement(node, name, ctx);

    if (node.type === "embeddedIf") {
        let output = `const ${name} = document.createDocumentFragment();`;
        const branches = [node.ifBranch, ...(node.elseIfBranches ?? [])];
        output += branches.map(branch =>
            `if (${emitExpression(branch.condition)}) {${appendChildren(branch.content, name, ctx)}}`
        ).join(" else ");
        if (node.elseBranch) output += `else {${appendChildren(node.elseBranch.content, name, ctx)}}`;
        return output;
    }

    const expression = node.type === "embeddedStatement" ? node.expression : node;
    if (expression.type === "name" && expression.value === "children") {
        return `const ${name} = document.createDocumentFragment();
                for (const $render of children ?? []) ${name}.appendChild($render());`;
    }
    const text = `const ${name} = document.createTextNode(${emitExpression(expression)});`;
    if (expression.type === "name" && ctx.mutableNames.has(expression.value)) {
        ctx.hasBoundText = true;
        return text + `$textUpdates.push(() => {
            const $next = "".concat(${expression.value});
            if (${name}.data !== $next) ${name}.data = $next;
        });`;
    }
    return text;
}
