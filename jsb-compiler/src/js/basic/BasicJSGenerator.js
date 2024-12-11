import {createVariableNameGenerator} from "./functions/helperFunctions.js";
import {createImports, createProps, validateAndProcessElements} from "./functions/componentFunctions.js";

const generateName = createVariableNameGenerator();

export function generateJS(ast, filePath) {
    let output = "";
    let ctx = {
        variables: [],
        functions: [],
        imports: [],
    };

    const {imports, props, code, elements} = ast;

    const parsedImports = createImports(imports, filePath, ctx);

    const parsedProps = createProps(props, ctx);

    const parsedElements = validateAndProcessElements(elements, imports, ctx);

    return parsedImports + parsedProps + parsedElements;
}


