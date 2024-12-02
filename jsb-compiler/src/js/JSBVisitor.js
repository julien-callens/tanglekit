import JSBParserVisitor from "./generated/JSBParserVisitor.js";
import JSBLexer from "./generated/JSBLexer.js";

export class JSBVisitor extends JSBParserVisitor {
    visitDocument(ctx) {
        return {
            type: "document",
            // props: ctx.propsDeclaration() ? this.visit(ctx.propsDeclaration()) : null,
            // code: ctx.codeDeclaration() ? this.visit(ctx.codeDeclaration()) : null,
            elements: ctx.elementsDeclaration() ? this.visit(ctx.elementsDeclaration()) : null,
        };
    }

    visitPropsDeclaration(ctx) {
        return {
            type: "propsDeclaration",
            content: ctx ? ctx.getText() : null,
        };
    }

    visitCodeDeclaration(ctx) {
        return {
            type: "codeDeclaration",
            content: ctx ? ctx.getText() : null,
        };
    }

    visitElementsDeclaration(ctx) {
        const tagName = ctx.NAME(0)?.getText() ?? null;
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
        return ctx?.children
            ?.map(child => (child.children ? this.visit(child) : this.visitTerminal(child)))
            ?.filter(node => node !== null && node !== undefined) ?? [];
    }

    visitElementAttribute(ctx) {
        const name = ctx.TAG_NAME()?.getText() ?? null;
        const value = ctx.getChild(2) ? this.visit(ctx.getChild(2)) : null;

        return {
            type: "attribute",
            name,
            value,
        };
    }

    visitAttributeInsert(ctx) {
        const values = ctx.ATT_VALUE()?.map(token => token.getText()) ?? [];
        return {
            type: "attributeValue",
            values,
        };
    }

    visitElementInsert(ctx) {
        const content = ctx.elementInsertContent() ? this.visit(ctx.elementInsertContent()) : [];
        return {
            type: "elementInsert",
            content,
        };
    }

    visitElementInsertContent(ctx) {
        return ctx?.children
            ?.map(child => (child.children ? this.visit(child) : this.visitTerminal(child)))
            ?.filter(node => node !== null && node !== undefined) ?? [];
    }

    visitVarFunction(ctx) {
        const functionName = ctx.VAR_NAME()?.getText() ?? null;
        const args = ctx.functionArgs() ? this.visit(ctx.functionArgs()) : [];
        return {
            type: "varFunction",
            functionName,
            args,
        };
    }

    visitFunctionArgs(ctx) {
        return ctx.expression()?.map(expr => this.visit(expr)) ?? [];
    }

    visitExpression(ctx) {
        if (ctx.VAR_NAME()) {
            return {
                type: "variable",
                name: ctx.VAR_NAME()?.getText(),
            };
        } else if (ctx.varFunction()) {
            return this.visit(ctx.varFunction());
        }
        return null;
    }

    visitTerminal(node) {
        const tokenType = node.symbol.type;
        switch (tokenType) {
            case JSBLexer.TEXT:
                return {
                    type: "text",
                    value: node.getText(),
                };
            case JSBLexer.VAR_NAME:
                return {
                    type: "variable",
                    name: node.getText(),
                };
            case JSBLexer.ATT_VALUE:
                return node.getText();
            default:
                return null;
        }
    }
}
