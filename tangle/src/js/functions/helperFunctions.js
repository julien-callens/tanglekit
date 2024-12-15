import htmlTags from "html-tags";

export const generateName = createVariableNameGenerator();

export function createVariableNameGenerator(seed = 1) {
    const usedNames = new Set();
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const length = 8;

    function seededRandom() {
        seed = (seed * 1664525 + 1013904223) % 4294967296;
        return seed / 4294967296;
    }

    return function generateName() {
        let name;
        do {
            name = '';
            for (let i = 0; i < length; i++) {
                name += charset.charAt(Math.floor(seededRandom() * charset.length));
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
