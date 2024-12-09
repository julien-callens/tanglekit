import JSBParserVisitor from "./generated/JSBParserVisitor.js";
import JSBParser from "./generated/JSBParser.js";

export class JSBVisitor extends JSBParserVisitor {
    visitDocument(ctx) {
        return {
            imports: ctx.importDeclaration() ? this.visit(ctx.importDeclaration()) : null,
            props: ctx.propsDeclaration() ? this.visit(ctx.propsDeclaration()) : null,
            code: ctx.codeDeclaration() ? this.visit(ctx.codeDeclaration()) : null,
            elements: ctx.elementsDeclaration() ? this.visit(ctx.elementsDeclaration()) : null,
        };
    }

    visitImportDeclaration(ctx) {
        const statements = ctx.importStatement().map(stmt => this.visit(stmt));
        return {
            type: "importDeclaration",
            statements,
        };
    }

    visitImportStatement(ctx) {
        const importId = ctx.IMPORT_ID().getText().trim();
        const path = ctx.STRING_CONTENT().getText().trim();
        return {
            type: "importStatement",
            importId,
            path,
        };
    }

    visitPropsDeclaration(ctx) {
        const content = ctx.propsContent() ? this.visit(ctx.propsContent()) : [];
        return {
            type: "propsDeclaration",
            content,
        };
    }

    visitPropsContent(ctx) {
        const variables = ctx.variableDeclaration().map(varDecl => this.visit(varDecl));
        return {
            type: "propsContent",
            variables,
        };
    }

    visitCodeDeclaration(ctx) {
        return ctx.codeContent().map(content => this.visit(content));
    }

    visitCodeContent(ctx) {
        if (ctx.commentLine()) {
            return this.visit(ctx.commentLine());
        } else if (ctx.functionDeclaration()) {
            return this.visit(ctx.functionDeclaration());
        } else if (ctx.ifStatement()) {
            return this.visit(ctx.ifStatement());
        } else if (ctx.variableDeclaration()) {
            return this.visit(ctx.variableDeclaration());
        }
        return null;
    }

    visitVariableDeclaration(ctx) {
        const varDef = ctx.VAR_DEF().getText().trim();
        const name = ctx.NAME().getText().trim();
        const assigned = this.visit(ctx.statement());
        const assignedType = assigned.type;
        const value = assigned.value;
        return {
            type: "variableDeclaration",
            varDef,
            name,
            assignedType,
            value,
        };
    }

    visitStatement(ctx) {
        if (ctx.functionCall()) {
            return this.visit(ctx.functionCall());
        } else if (ctx.variableTypes()) {
            return this.visit(ctx.variableTypes());
        }
        return null;
    }

    visitCommentLine(ctx) {
        const content = ctx.COMMENT_CONTENT().getText().trim();
        return {
            type: "commentLine",
            content,
        };
    }

    visitFunctionDeclaration(ctx) {
        const name = ctx.NAME().getText().trim();
        const args = ctx.functionArgs() ? this.visit(ctx.functionArgs()) : [];
        const body = ctx.codeContent().map(content => this.visit(content));
        return {
            type: "functionDeclaration",
            name,
            args,
            body,
        };
    }

    visitIfStatement(ctx) {
        const condition = this.visit(ctx.expression());
        const body = ctx.codeContent().map(content => this.visit(content));
        return {
            type: "ifStatement",
            condition,
            body,
        };
    }

    visitElementsDeclaration(ctx) {
        const tagName = ctx.NAME(0)?.getText().trim() ?? null;
        const attributes = ctx.elementAttribute()?.map(attr => this.visit(attr)) ?? [];
        const isSelfClosing = ctx.TAG_SLASH_CLOSE() !== null;
        const children = !isSelfClosing && ctx.content() ? this.visit(ctx.content()) : [];

        return {
            type: "element",
            tagName,
            attributes,
            children,
            selfClosing: isSelfClosing,
        };
    }

    visitContent(ctx) {
        return ctx.children.map(child => {
            if (child instanceof JSBParser.ElementsDeclarationContext) {
                return this.visitElementsDeclaration(child);
            } else if (child instanceof JSBParser.EmbeddedStatementContext) {
                return this.visitEmbeddedStatement(child);
            } else if (child instanceof JSBParser.TextContentContext) {
                return this.visitTextContent(child);
            }
            return null;
        }).filter(content => content !== null);
    }

    visitElementAttribute(ctx) {
        const name = ctx.NAME().getText().trim();
        const content = ctx.embeddedStatement()
            ? this.visit(ctx.embeddedStatement())
            : this.visit(ctx.stringType());
        return {
            type: "attribute",
            name,
            content,
        };
    }

    visitEmbeddedStatement(ctx) {
        const expression = this.visit(ctx.expression());
        return {
            type: "embeddedStatement",
            expression,
        };
    }

    visitExpression(ctx) {
        if (ctx.functionCall()) {
            return this.visit(ctx.functionCall());
        } else if (ctx.variableTypes()) {
            return this.visit(ctx.variableTypes());
        } else if (ctx.NAME()) {
            return {
                type: "name",
                value: ctx.NAME().getText().trim(),
            };
        }
        return null;
    }

    visitFunctionCall(ctx) {
        const name = ctx.NAME().getText().trim();
        const args = ctx.functionArgs() ? this.visit(ctx.functionArgs()) : [];
        return {
            type: "functionCall",
            name,
            args,
        };
    }

    visitFunctionArgs(ctx) {
        return ctx.expression().map(expr => this.visit(expr));
    }

    visitVariableTypes(ctx) {
        if (ctx.INT()) {
            return {
                type: "int",
                value: parseInt(ctx.INT().getText().trim(), 10),
            };
        } else if (ctx.BOOL()) {
            return {
                type: "bool",
                value: ctx.BOOL().getText().trim() === 'true',
            };
        } else if (ctx.stringType()) {
            return this.visit(ctx.stringType());
        }
        return null;
    }

    visitStringType(ctx) {
        const value = ctx.STRING_CONTENT().getText().trim();
        return {
            type: "string",
            value,
        };
    }

    visitTextContent(ctx) {
        const text = ctx.TEXT().getText().trim();
        return text ? { type: "text", value: text } : null;
    }
}
