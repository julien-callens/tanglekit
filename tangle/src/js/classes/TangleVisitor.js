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
                path: ctx.componentImport().IMPORT_PATH().getText().slice(1, -1),
            };
        } else if (ctx.styleImport()) {
            return {
                type: "styleImport",
                path: ctx.styleImport().IMPORT_PATH().getText().slice(1, -1),
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
        return ctx.codeContent().map(content => this.visit(content));
    }

    visitCodeContent(ctx) {
        if (ctx.RETURN()) {
            return {type: "return", expression: ctx.expression() && this.visit(ctx.expression())};
        }
        return this.visit(ctx.getChild(0));
    }

    visitComment(ctx) {
        return {
            type: "comment",
            value: ctx.COMMENT_CONTENT()?.getText().trim() ?? "",
        };
    }

    visitVariableDeclaration(ctx) {
        const varDef = ctx.VAR_DEF().getText();
        const name = ctx.NAME().getText();
        return {
            type: "variableDeclaration",
            varDef,
            name,
            ...this.assignment(ctx),
        };
    }

    visitIfStatement(ctx) {
        return {
            type: "ifStatement",
            condition: this.visit(ctx.expression()),
            body: ctx.codeContent().map(content => this.visit(content)),
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
            type: "functionCall",
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
        return {
            type: "variableModification",
            name: varName,
            operator,
            ...this.assignment(ctx),
        };
    }

    assignment(ctx) {
        const expression = ctx.expression() && this.visit(ctx.expression());
        // Preserve the public scalar AST shape. Compound values carry their complete expression.
        return {assignedType: expression?.type ?? null, value: expression?.value ?? expression};
    }

    visitUpdateExpression(ctx) {
        return {
            type: "incrementDecrement",
            operator: ctx.CREMENT_OPERATOR().getText(),
            name: ctx.NAME().getText(),
            prefix: ctx.start === ctx.CREMENT_OPERATOR().symbol,
        };
    }

    visitElementsDeclaration(ctx) {
        const tagName = ctx.NAME(0)?.getText() || null;
        const closing = ctx.NAME(1)?.symbol;
        if (closing && closing.text !== tagName) {
            throw new Error(`Mismatched closing tag at line ${closing.line}:${closing.column} - expected </${tagName}>, found </${closing.text}>`);
        }
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
            content: attributeContent?.value ?? attributeContent?.expression,
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
        return this.visit(ctx.expression());
    }

    visitExpression(ctx) {
        const operands = ctx.operand().map(operand => this.visit(operand));
        if (operands.length === 1) return operands[0];
        return {type: "operation", operands, operators: ctx.operator().map(op => op.getText())};
    }

    visitOperand(ctx) {
        if (ctx.NAME()) return {type: "name", value: ctx.NAME().getText()};
        if (ctx.NOT_OPERATOR()) return {type: "not", operand: this.visit(ctx.operand())};
        if (ctx.expression()) return {type: "group", operand: this.visit(ctx.expression())};
        return this.visit(ctx.getChild(0));
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
            value: ctx.STRING_VALUE().getText().slice(1, -1),
        };
    }

    visitTextContent(ctx) {

        const raw = ctx.TEXT().getText();
        const processed = raw.replace(/\s+/g, " ");
        if (!processed.trim() && /[\r\n]/.test(raw)) {
            return null;
        }
        return {
            type: "text",
            value: processed,
        };
    }
}
