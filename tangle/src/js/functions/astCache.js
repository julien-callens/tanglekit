const astCache = (() => {
    return new Map();
})();

export function storeAST(filePath, ast) {
    astCache.set(filePath, ast);
}

export function getAST(filePath) {
    return astCache.get(filePath);
}

