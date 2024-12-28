import TangleParserVisitor from "../generated/TangleParserVisitor.js";
import TangleParser from "../generated/TangleParser.js";

export class TangleVisitor extends TangleParserVisitor {
    // ---------------------------
    //         DOCUMENT
    // ---------------------------
    visitDocument(ctx) {
        return {
            imports: ctx.importDeclaration() ? this.visit(ctx.importDeclaration()) : [],
            props: ctx.propsDeclaration() ? this.visit(ctx.propsDeclaration()) : [],
            code: ctx.codeDeclaration() ? this.visit(ctx.codeDeclaration()) : [],
            elements: ctx.elementsDeclaration() ? this.visit(ctx.elementsDeclaration()) : null,
        };
    }

    // ---------------------------
    //         IMPORTS
    // ---------------------------
    visitImportDeclaration(ctx) {
        return ctx.importStatement().map(stmt => this.visit(stmt));
    }

    visitImportStatement(ctx) {
        if (ctx.componentImport()) {
            return {
                type: "component",
                id: ctx.componentImport().IMPORT_ID().getText(),
                path: ctx.componentImport().STRING_CONTENT().getText(),
            };
        } else if (ctx.styleImport()) {
            return {
                type: "style",
                path: ctx.styleImport().STRING_CONTENT().getText(),
            };
        }
        return null;
    }

    // ---------------------------
    //         PROPS
    // ---------------------------
    visitPropsDeclaration(ctx) {
        return ctx.propsContent() ? this.visit(ctx.propsContent()) : [];
    }

    visitPropsContent(ctx) {
        return ctx.variableDeclaration().map(varDecl => this.visit(varDecl));
    }

    // ---------------------------
    //         CODE
    // ---------------------------
    visitCodeDeclaration(ctx) {
        // Collect all code content: variable declarations, if-statements, etc.
        return ctx.codeContent().map(content => this.visit(content));
    }

    /**
     * Handles different possible children of `codeContent`:
     * - comment
     * - variableDeclaration
     * - ifStatement
     * - functionDeclaration
     * - functionCall
     * - variableModification
     */
    visitCodeContent(ctx) {
        // comment
        if (ctx.comment()) {
            return this.visit(ctx.comment());
        }
        // variableDeclaration
        if (ctx.variableDeclaration()) {
            return this.visit(ctx.variableDeclaration());
        }
        // ifStatement
        if (ctx.ifStatement()) {
            return this.visit(ctx.ifStatement());
        }
        // functionDeclaration
        if (ctx.functionDeclaration()) {
            return this.visit(ctx.functionDeclaration());
        }
        // functionCall
        if (ctx.functionCall()) {
            return {
                type: "functionCall",
                ...this.visit(ctx.functionCall()), // merges returned object
            };
        }
        // variableModification
        if (ctx.variableModification()) {
            return this.visit(ctx.variableModification());
        }
        return null;
    }

    // ---------------------------
    //       CODE COMPONENTS
    // ---------------------------

    /**
     * Parses single-line or inline comment in <code> blocks.
     */
    visitComment(ctx) {
        // The COMMENT_CONTENT is captured from grammar;
        // It's typically the text after `//` until newline.
        return {
            type: "comment",
            value: ctx.COMMENT_CONTENT().getText().trim(),
        };
    }

    /**
     * Example:
     * if (a < 5) {
     *   let x = 10;
     * }
     */
    visitIfStatement(ctx) {
        // condition is inside ctx.booleanExpression()
        // body is inside codeContent*
        const condition = ctx.booleanExpression()
            ? this.visit(ctx.booleanExpression())
            : null;

        // code block
        const body = ctx.codeContent()
            ? ctx.codeContent().map(content => this.visit(content))
            : [];

        return {
            type: "ifStatement",
            condition,
            body,
        };
    }

    /**
     * booleanExpression -> expression operator expression
     * Example: a < 10, isActive === true, etc.
     */
    visitBooleanExpression(ctx) {
        return {
            type: "booleanExpression",
            left: this.visit(ctx.expression(0)),
            operator: ctx.operator().getText(),
            right: this.visit(ctx.expression(1)),
        };
    }

    /**
     * functionDeclaration -> `function NAME (functionArgs?) { codeContent* }`
     * Example:
     * function add(a, b) {
     *   let result = a + b;
     *   return result;
     * }
     */
    visitFunctionDeclaration(ctx) {
        const name = ctx.NAME().getText();
        // function arguments
        const args = ctx.functionArgs()
            ? this.visit(ctx.functionArgs())
            : [];

        // function body
        const body = ctx.codeContent()
            ? ctx.codeContent().map(content => this.visit(content))
            : [];

        return {
            type: "functionDeclaration",
            name,
            args,
            body,
        };
    }

    /**
     * functionArgs -> expression (ARGS_SEPARATOR expression)*
     * Example:
     *   (5, true, "Hello")
     */
    visitFunctionArgs(ctx) {
        // The expressions can be multiple, separated by commas
        const expressions = ctx.expression().map(expr => this.visit(expr));
        return expressions;
    }

    /**
     * functionCall -> NAME (METHOD_CALL NAME)* (LPAREN functionCallArgs? ARGS_CLOSE)
     * Example:
     *   myObj.doSomething(42, "test")
     */
    visitFunctionCall(ctx) {
        // The functionCall might have chained method calls
        //  e.g., object.method1.method2(...)
        // We'll parse them as an array of property accesses
        // The first name is always ctx.NAME(0).getText()
        const callChain = [ctx.NAME(0).getText()];
        const additionalMethodNames = ctx.NAME().slice(1).map(name => name.getText());
        callChain.push(...additionalMethodNames);

        // functionCallArgs
        const args = ctx.functionCallArgs()
            ? this.visit(ctx.functionCallArgs())
            : [];

        return {
            functionPath: callChain,
            arguments: args,
        };
    }

    /**
     * functionCallArgs -> expression (ARGS_SEPARATOR expression)*
     */
    visitFunctionCallArgs(ctx) {
        return ctx.expression().map(expr => this.visit(expr));
    }

    /**
     * variableDeclaration -> VAR_DEF NAME (ASSIGN statement)? STATEMENT_END
     * Example:
     *   let count = 10;
     *   const label = "Hello";
     */
    visitVariableDeclaration(ctx) {
        const statementValue = ctx.statement() ? this.visit(ctx.statement()) : null;
        if (statementValue) {
            return {
                type: "variableDeclaration",
                varDef: ctx.VAR_DEF().getText(),
                name: ctx.NAME().getText(),
                assignedType: statementValue.type,
                value: statementValue.value,
            };
        } else {
            return {
                type: "variableDeclaration",
                varDef: ctx.VAR_DEF().getText(),
                name: ctx.NAME().getText(),
                assignedType: null,
            };
        }
    }

    /**
     * variableModification -> NAME (ASSIGN | ASSIGN_OPERATOR) statement STATEMENT_END
     * Example:
     *   count += 5;
     *   name = "New Value";
     */
    visitVariableModification(ctx) {
        const varName = ctx.NAME().getText();
        const operator = ctx.ASSIGN() ? "=" : ctx.ASSIGN_OPERATOR().getText();
        const statementValue = this.visit(ctx.statement());

        return {
            type: "variableModification",
            name: varName,
            operator,
            assignedType: statementValue?.type || null,
            value: statementValue?.value || null,
        };
    }

    // ---------------------------
    //       STATEMENT
    // ---------------------------

    /**
     * statement ->
     *    (variableTypes | NAME)?
     *  | checkStatement
     *  | CREMENT_OPERATOR NAME
     *  | NAME CREMENT_OPERATOR
     *  | functionCall
     *
     * Example:
     *   42
     *   true
     *   "text"
     *   myVar
     *   ++count
     *   count++
     *   sum(5, 3)
     *   a < b
     */
    visitStatement(ctx) {
        // variableTypes
        if (ctx.variableTypes()) {
            return this.visit(ctx.variableTypes());
        }
        // checkStatement
        if (ctx.checkStatement()) {
            return this.visit(ctx.checkStatement());
        }
        // Single NAME or increment/decrement
        if (ctx.NAME()) {
            // Possibly something like `NAME++` or `++NAME`
            if (ctx.CREMENT_OPERATOR()) {
                const operator = ctx.CREMENT_OPERATOR().getText();
                return {
                    type: "incrementDecrement",
                    operator,
                    name: ctx.NAME().getText(),
                };
            }
            // Just a name
            return {
                type: "name",
                value: ctx.NAME().getText(),
            };
        }
        // Just CREMENT_OPERATOR NAME
        if (ctx.CREMENT_OPERATOR()) {
            return {
                type: "incrementDecrement",
                operator: ctx.CREMENT_OPERATOR().getText(),
                name: null,
            };
        }
        // functionCall
        if (ctx.functionCall()) {
            return {
                type: "functionCall",
                ...this.visit(ctx.functionCall()),
            };
        }
        return null;
    }

    /**
     * checkStatement -> (variableTypes | NAME) operator (variableTypes | NAME)
     * Example:
     *   a < b
     *   5 === count
     *   "hello" !== text
     */
    visitCheckStatement(ctx) {
        const left = ctx.variableTypes()?.[0]
            ? this.visit(ctx.variableTypes()[0])
            : { type: "name", value: ctx.NAME(0).getText() };

        const op = ctx.operator().getText();

        const right = ctx.variableTypes()?.[1]
            ? this.visit(ctx.variableTypes()[1])
            : { type: "name", value: ctx.NAME(1).getText() };

        return {
            type: "checkStatement",
            left,
            operator: op,
            right,
        };
    }

    // ---------------------------
    //       ELEMENTS
    // ---------------------------
    visitElementsDeclaration(ctx) {
        return {
            type: "element",
            tagName: ctx.NAME(0)?.getText() ?? null,
            attributes: ctx.elementAttribute()?.map(attr => this.visit(attr)) ?? [],
            children: ctx.content() ? this.visit(ctx.content()) : [],
        };
    }

    visitContent(ctx) {
        return ctx.children
            .map(child => {
                if (child instanceof TangleParser.ElementsDeclarationContext) {
                    return this.visitElementsDeclaration(child);
                }
                if (child instanceof TangleParser.EmbeddedStatementContext) {
                    return this.visitEmbeddedStatement(child);
                }
                if (child instanceof TangleParser.TextContentContext) {
                    const content = this.visitTextContent(child);
                    if (content) return content;
                }
                return null;
            })
            .filter(Boolean);
    }

    visitElementAttribute(ctx) {
        const attributeName = ctx.NAME()?.getText() ?? null;
        const attributeContent = ctx.embeddedStatement()
            ? this.visit(ctx.embeddedStatement())
            : this.visit(ctx.stringType());

        const attributeType = attributeContent.type;

        return {
            type: "attribute",
            name: attributeName,
            attributeType,
            content: attributeContent.value || attributeContent.expression,
        };
    }

    // ---------------------------
    //     EMBEDDED STATEMENTS
    // ---------------------------
    visitEmbeddedStatement(ctx) {
        // This might be an embedded if or a simple expression
        return {
            type: "embeddedStatement",
            expression: ctx.expression() ? this.visit(ctx.expression()) : null,
        };
    }

    // Example: { if (a > 0) } ... { else } ...
    // If you want to handle "embeddedIf" separately, you can create a visitEmbeddedIf(ctx).
    // The grammar includes "embeddedIf" with possible else if/else.
    // For brevity, you might handle it similarly to ifStatement.

    // ---------------------------
    //         EXPRESSIONS
    // ---------------------------
    visitExpression(ctx) {
        // e.g., functionCall | embeddedIfStatement | variableTypes | NAME
        if (ctx.functionCall()) {
            return {
                type: "functionCall",
                ...this.visit(ctx.functionCall()),
            };
        }
        if (ctx.embeddedIfStatement()) {
            // handle embeddedIf => e.g. { if (condition) }
            // parse the boolean expression or the subsequent content
            // for simplicity, you could parse it like visitIfStatement
            // or store a special type "embeddedIf".
            return { type: "embeddedIfNotHandled" };
        }
        if (ctx.variableTypes()) {
            return this.visit(ctx.variableTypes());
        }
        if (ctx.NAME()) {
            return { type: "name", value: ctx.NAME().getText() };
        }
        return null;
    }

    // ---------------------------
    //     VARIABLE TYPES
    // ---------------------------
    visitVariableTypes(ctx) {
        if (ctx.INT()) {
            return { type: "int", value: parseInt(ctx.INT().getText(), 10) };
        } else if (ctx.BOOL()) {
            return { type: "bool", value: ctx.BOOL().getText() === "true" };
        } else if (ctx.stringType()) {
            return this.visit(ctx.stringType());
        }
        return null;
    }

    visitStringType(ctx) {
        return {
            type: "string",
            value: ctx.STRING_CONTENT().getText(),
        };
    }

    // ---------------------------
    //       TEXT CONTENT
    // ---------------------------
    visitTextContent(ctx) {
        const value = ctx.TEXT().getText().replace(/\s+/g, ' ');

        if (value.trim() === "") return null;

        return {
            type: "text",
            value,
        };
    }
}

