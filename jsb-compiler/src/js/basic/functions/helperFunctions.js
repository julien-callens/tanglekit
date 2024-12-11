import htmlTags from "html-tags";

export function createVariableNameGenerator() {
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

export function isValidElement(tagName) {
    const isValid = htmlTags[tagName] !== undefined;

    if (!isValid) {
        console.error(`\x1b[31mInvalid element: ${tagName}\x1b[0m`);
    }

    return isValid;
}

export function isComponent(tagName, ctx) {
    return ctx.imports[tagName] !== undefined;
}
