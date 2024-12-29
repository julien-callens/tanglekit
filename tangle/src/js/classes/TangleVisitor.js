import TangleParserVisitor from "../generated/TangleParserVisitor.js";
import TangleParser from "../generated/TangleParser.js";

export class TangleVisitor extends TangleParserVisitor {
    visitDocument(ctx) {
        return {
            imports: ctx.importDeclaration() ? this.visit(ctx.importDeclaration()) : [],
            props: ctx.propsDeclaration() ? this.visit(ctx.propsDeclaration()) : [],
            code: ctx.codeDeclaration() ? this.visit(ctx.codeDeclaration()) : [],
            elements: ctx.elementsDeclaration() ? this.visit(ctx.elementsDeclaration()) : null,
        };
    }

    visitImportDeclaration(ctx) {
        return ctx.importStatement().map((stmt) => this.visit(stmt));
    }

    visitImportStatement(ctx) {
        if (ctx.componentImport()) {
            return {
                type: "componentImport",
                id: ctx.componentImport().IMPORT_ID().getText(),
                path: ctx.componentImport().STRING_CONTENT().getText(),
            };
        } else if (ctx.styleImport()) {
            return {
                type: "styleImport",
                path: ctx.styleImport().STRING_CONTENT().getText(),
            };
        }
        return null;
    }

    visitPropsDeclaration(ctx) {
        return ctx.propsContent() ? this.visit(ctx.propsContent()) : [];
    }

    visitPropsContent(ctx) {
        return ctx.variableDeclaration().map((varDecl) => this.visit(varDecl));
    }

    visitCodeDeclaration(ctx) {

        const results = [];
        const children = ctx.children || [];
        for (const child of children) {
            if (child instanceof TangleParser.CodeContentContext) {
                results.push(this.visitCodeContent(child));
            } else if (child instanceof TangleParser.CommentContext) {
                results.push(this.visitComment(child));
            }
        }
        return results;
    }

    visitCodeContent(ctx) {
        if (ctx.comment()) {
            return this.visitComment(ctx.comment());
        }
        if (ctx.variableDeclaration()) {
            return this.visitVariableDeclaration(ctx.variableDeclaration());
        }
        if (ctx.ifStatement()) {
            return this.visitIfStatement(ctx.ifStatement());
        }
        if (ctx.functionDeclaration()) {
            return this.visitFunctionDeclaration(ctx.functionDeclaration());
        }
        if (ctx.functionCall()) {
            return {
                type: "functionCall",
                ...this.visitFunctionCall(ctx.functionCall()),
            };
        }
        if (ctx.variableModification()) {
            return this.visitVariableModification(ctx.variableModification());
        }
        return null;
    }

    visitComment(ctx) {
        return {
            type: "comment",
            value: ctx.COMMENT_CONTENT().getText().trim(),
        };
    }

    visitVariableDeclaration(ctx) {
        const varDef = ctx.VAR_DEF().getText();
        const name = ctx.NAME().getText();
        const hasAssignment = !!ctx.ASSIGN();
        const statementValue = hasAssignment && ctx.statement()
            ? this.visitStatement(ctx.statement())
            : null;

        return {
            type: "variableDeclaration",
            varDef,
            name,
            assignedType: statementValue ? statementValue.type : null,
            value: statementValue ? statementValue.value : null,
        };
    }

    visitIfStatement(ctx) {
        const condition = ctx.booleanExpression()
            ? this.visitBooleanExpression(ctx.booleanExpression())
            : null;

        const body = [];
        const children = ctx.children || [];
        for (const child of children) {
            if (child instanceof TangleParser.CodeContentContext) {
                body.push(this.visitCodeContent(child));
            } else if (child instanceof TangleParser.CommentContext) {
                body.push(this.visitComment(child));
            }
        }
        return {
            type: "ifStatement",
            condition,
            body,
        };
    }

    visitBooleanExpression(ctx) {
        return {
            type: "booleanExpression",
            left: this.visitExpression(ctx.expression(0)),
            operator: ctx.operator().getText(),
            right: this.visitExpression(ctx.expression(1)),
        };
    }

    visitFunctionDeclaration(ctx) {
        const name = ctx.NAME().getText();
        const args = ctx.functionArgs() ? this.visitFunctionArgs(ctx.functionArgs()) : [];

        const body = [];
        const codeContents = ctx.codeContent() || [];
        for (const content of codeContents) {
            body.push(this.visitCodeContent(content));
        }

        return {
            type: "functionDeclaration",
            name,
            args,
            body,
        };
    }

    visitFunctionArgs(ctx) {
        return ctx.expression().map((expr) => this.visitExpression(expr));
    }

    visitFunctionCall(ctx) {

        const chain = [ctx.NAME(0).getText()];
        for (let i = 1; i < ctx.NAME().length; i++) {
            chain.push(ctx.NAME(i).getText());
        }
        const args = ctx.functionCallArgs()
            ? this.visitFunctionCallArgs(ctx.functionCallArgs())
            : [];
        return {
            functionPath: chain,
            arguments: args,
        };
    }

    visitFunctionCallArgs(ctx) {
        return ctx.expression().map((expr) => this.visitExpression(expr));
    }

    visitVariableModification(ctx) {
        const varName = ctx.NAME().getText();
        const operator = ctx.ASSIGN() ? "=" : ctx.ASSIGN_OPERATOR().getText();
        const statementValue = this.visitStatement(ctx.statement());
        return {
            type: "variableModification",
            name: varName,
            operator,
            assignedType: statementValue.type || null,
            value: statementValue.value || null,
        };
    }

    visitStatement(ctx) {

        if (ctx.variableTypes()) {
            return this.visitVariableTypes(ctx.variableTypes());
        }
        if (ctx.checkStatement()) {
            return this.visitCheckStatement(ctx.checkStatement());
        }
        if (ctx.CREMENT_OPERATOR() && ctx.NAME()) {
            return {
                type: "incrementDecrement",
                operator: ctx.CREMENT_OPERATOR().getText(),
                name: ctx.NAME().getText(),
            };
        }
        if (ctx.NAME() && ctx.CREMENT_OPERATOR()) {
            return {
                type: "incrementDecrement",
                operator: ctx.CREMENT_OPERATOR().getText(),
                name: ctx.NAME().getText(),
            };
        }
        if (ctx.functionCall()) {
            return {
                type: "functionCall",
                ...this.visitFunctionCall(ctx.functionCall()),
            };
        }
        if (ctx.NAME()) {
            return {type: "name", value: ctx.NAME().getText()};
        }
        return null;
    }

    visitCheckStatement(ctx) {
        const left = ctx.variableTypes(0)
            ? this.visitVariableTypes(ctx.variableTypes(0))
            : {type: "name", value: ctx.NAME(0).getText()};
        const op = ctx.operator().getText();
        const right = ctx.variableTypes(1)
            ? this.visitVariableTypes(ctx.variableTypes(1))
            : {type: "name", value: ctx.NAME(1).getText()};

        return {
            type: "checkStatement",
            left,
            operator: op,
            right,
        };
    }

    visitElementsDeclaration(ctx) {
        const tagName = ctx.NAME(0)?.getText() || null;
        const attributes = ctx.elementAttribute()
            ? ctx.elementAttribute().map((attr) => this.visitElementAttribute(attr))
            : [];

        let children = [];

        if (ctx.content()) {
            children = this.visitContent(ctx.content());
        }

        return {
            type: "element",
            tagName,
            attributes,
            children,
        };
    }

    visitContent(ctx) {

        const results = [];
        const items = ctx.children || [];
        for (const item of items) {
            if (item instanceof TangleParser.ElementsDeclarationContext) {
                results.push(this.visitElementsDeclaration(item));
            } else if (item instanceof TangleParser.EmbeddedStatementContext) {
                results.push(this.visitEmbeddedStatement(item));
            } else if (item instanceof TangleParser.TextContentContext) {
                const text = this.visitTextContent(item);
                if (text) {
                    results.push(text);
                }
            }
        }
        return results;
    }

    visitElementAttribute(ctx) {
        const attributeName = ctx.NAME().getText();

        let attributeContent = null;
        let attributeType = null;
        if (ctx.embeddedStatement()) {
            attributeContent = this.visitEmbeddedStatement(ctx.embeddedStatement());
            attributeType = attributeContent.type;
        } else if (ctx.stringType()) {
            attributeContent = this.visitStringType(ctx.stringType());
            attributeType = attributeContent.type;
        }

        return {
            type: "attribute",
            name: attributeName,
            attributeType: attributeType,
            content: attributeContent?.value || attributeContent?.expression || null,
        };
    }

    visitEmbeddedStatement(ctx) {
        if (ctx.embeddedIf()) {
            return this.visitEmbeddedIf(ctx.embeddedIf());
        }
        return {
            type: "embeddedStatement",
            expression: ctx.expression()
                ? this.visitExpression(ctx.expression())
                : null,
        };
    }

    visitEmbeddedIf(ctx) {
        const mainConditionCtx = ctx.embeddedIfStatement();
        const mainCondition = mainConditionCtx
            ? this.visitEmbeddedIfStatement(mainConditionCtx)
            : null;

        const mainContentCtx = ctx.content();
        const mainContent = mainContentCtx ? this.visitContent(mainContentCtx) : [];

        const elseIfs = ctx.embeddedElseIf().map((elifCtx) =>
            this.visitEmbeddedElseIf(elifCtx)
        );

        const elseCtx = ctx.embeddedElse();
        const elseBranch = elseCtx ? this.visitEmbeddedElse(elseCtx) : null;

        const result = {
            type: "embeddedIf",
            ifBranch: {
                condition: mainCondition,
                content: mainContent,
            }
        };

        if (elseIfs.length > 0) {
            result.elseIfBranches = elseIfs;
        }
        if (elseBranch) {
            result.elseBranch = elseBranch;
        }

        return result;
    }

    visitEmbeddedElseIf(ctx) {
        const conditionCtx = ctx.embeddedIfStatement();
        const condition = conditionCtx
            ? this.visitEmbeddedIfStatement(conditionCtx)
            : null;

        const contentCtx = ctx.content();
        const content = contentCtx ? this.visitContent(contentCtx) : [];

        return {
            type: "elseIf",
            condition,
            content,
        };
    }

    visitEmbeddedElse(ctx) {
        const conditionCtx = ctx.embeddedIfStatement();
        const condition = conditionCtx
            ? this.visitEmbeddedIfStatement(conditionCtx)
            : null;

        const contentCtx = ctx.content();
        const content = contentCtx ? this.visitContent(contentCtx) : [];

        return {
            type: "else",
            condition,
            content,
        };
    }

    visitEmbeddedIfStatement(ctx) {
        return ctx.booleanExpression()
            ? this.visitBooleanExpression(ctx.booleanExpression())
            : null;
    }

    visitExpression(ctx) {
        if (ctx.functionCall()) {
            return {
                type: "functionCall",
                ...this.visitFunctionCall(ctx.functionCall()),
            };
        }
        if (ctx.embeddedIfStatement()) {
            return this.visitEmbeddedIfStatement(ctx.embeddedIfStatement());
        }
        if (ctx.variableTypes()) {
            return this.visitVariableTypes(ctx.variableTypes());
        }
        if (ctx.NAME()) {
            return {type: "name", value: ctx.NAME().getText()};
        }
        return null;
    }

    visitVariableTypes(ctx) {
        if (ctx.INT()) {
            return {
                type: "int",
                value: parseInt(ctx.INT().getText(), 10),
            };
        }
        if (ctx.BOOL()) {
            return {
                type: "bool",
                value: ctx.BOOL().getText() === "true",
            };
        }
        if (ctx.stringType()) {
            return this.visitStringType(ctx.stringType());
        }
        return null;
    }

    visitStringType(ctx) {
        return {
            type: "string",
            value: ctx.STRING_CONTENT().getText(),
        };
    }

    visitTextContent(ctx) {

        const raw = ctx.TEXT().getText();
        const processed = raw.replace(/\s+/g, " ");
        if (!processed.trim()) {
            return null;
        }
        return {
            type: "text",
            value: processed,
        };
    }
}
