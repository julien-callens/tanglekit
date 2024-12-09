import BasicJSBParserVisitor from "../generated/BasicJSBParserVisitor.js";
import BasicJSBParser from "../generated/BasicJSBParser.js";

export class BasicJSBVisitor extends BasicJSBParserVisitor {
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
        return {
            type: "importStatement",
            importId: ctx.IMPORT_ID().getText(),
            path: ctx.STRING_CONTENT().getText(),
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
        if (ctx.commentLine()) return this.visit(ctx.commentLine());
        if (ctx.functionDeclaration()) return this.visit(ctx.functionDeclaration());
        if (ctx.ifStatement()) return this.visit(ctx.ifStatement());
        if (ctx.variableDeclaration()) return this.visit(ctx.variableDeclaration());
        if (ctx.functionCall()) return this.visit(ctx.functionCall());
        return null;
    }

    visitVariableDeclaration(ctx) {
        const value = this.visit(ctx.statement());

        return {
            type: "variableDeclaration",
            varDef: ctx.VAR_DEF().getText(),
            name: ctx.NAME().getText(),
            assignedType: value.type,
            value: value.value,
        };
    }

    visitStatement(ctx) {
        if (ctx.functionCall()) return this.visit(ctx.functionCall());
        if (ctx.variableTypes()) return this.visit(ctx.variableTypes());
        if (ctx.NAME()) return {type: "name", value: ctx.NAME().getText()};
        return null;
    }

    visitCommentLine(ctx) {
        return {
            type: "commentLine",
            content: ctx.COMMENT_CONTENT().getText(),
        };
    }

    visitFunctionDeclaration(ctx) {
        return {
            type: "functionDeclaration",
            name: ctx.NAME().getText(),
            args: ctx.functionArgs() ? this.visit(ctx.functionArgs()) : [],
            body: ctx.codeContent().map(content => this.visit(content)),
        };
    }

    visitIfStatement(ctx) {
        return {
            type: "ifStatement",
            condition: this.visit(ctx.expression()),
            body: ctx.codeContent().map(content => this.visit(content)),
        };
    }

    visitElementsDeclaration(ctx) {
        const attributes = ctx.elementAttribute().map(attr => this.visit(attr));
        return {
            type: "element",
            tagName: ctx.NAME(0)?.getText() ?? null,
            attributes,
            children: ctx.content() ? this.visit(ctx.content()) : [],
            selfClosing: !!ctx.TAG_SLASH(),
        };
    }

    visitContent(ctx) {
        return ctx.children.map(child => {
            if (child instanceof BasicJSBParser.ElementsDeclarationContext) return this.visitElementsDeclaration(child);
            if (child instanceof BasicJSBParser.EmbeddedStatementContext) return this.visitEmbeddedStatement(child);
            if (child instanceof BasicJSBParser.TextContentContext) {
                const textContent = this.visitTextContent(child);
                if (textContent.value.trim() !== "") return textContent;
            }
            return null;
        }).filter(content => content !== null);
    }

    visitElementAttribute(ctx) {
        return {
            type: "attribute",
            name: ctx.NAME().getText(),
            content: ctx.embeddedStatement() ? this.visit(ctx.embeddedStatement()) : this.visit(ctx.stringType()),
        };
    }

    visitEmbeddedStatement(ctx) {
        return {
            type: "embeddedStatement",
            expression: this.visit(ctx.expression()),
        };
    }

    visitExpression(ctx) {
        if (ctx.functionCall()) return this.visit(ctx.functionCall());
        if (ctx.variableTypes()) return this.visit(ctx.variableTypes());
        if (ctx.NAME()) return {type: "name", value: ctx.NAME().getText()};
        return null;
    }

    visitFunctionCall(ctx) {
        return {
            type: "functionCall",
            name: ctx.NAME().getText(),
            args: ctx.functionCallArgs() ? this.visit(ctx.functionCallArgs()) : [],
        };
    }

    visitFunctionArgs(ctx) {
        return ctx.NAME().map(name => name.getText());
    }

    visitFunctionCallArgs(ctx) {
        return ctx.expression().map(expr => this.visit(expr));
    }

    visitVariableTypes(ctx) {
        if (ctx.INT()) return {type: "int", value: parseInt(ctx.INT().getText(), 10)};
        if (ctx.BOOL()) return {type: "bool", value: ctx.BOOL().getText() === "true"};
        if (ctx.stringType()) return this.visit(ctx.stringType());
        return null;
    }

    visitStringType(ctx) {
        return {
            type: "string",
            value: ctx.STRING_CONTENT().getText(),
        };
    }

    visitTextContent(ctx) {
        return {
            type: "text",
            value: ctx.TEXT().getText(),
        };
    }
}
