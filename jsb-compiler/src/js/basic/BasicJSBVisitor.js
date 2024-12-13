import BasicJSBParserVisitor from "../generated/BasicJSBParserVisitor.js";
import BasicJSBParser from "../generated/BasicJSBParser.js";

export class BasicJSBVisitor extends BasicJSBParserVisitor {
    visitDocument(ctx) {
        return {
            imports: ctx.importDeclaration() ? this.visit(ctx.importDeclaration()) : [],
            props: ctx.propsDeclaration() ? this.visit(ctx.propsDeclaration()) : [],
            code: ctx.codeDeclaration() ? this.visit(ctx.codeDeclaration()) : [],
            elements: ctx.elementsDeclaration() ? this.visit(ctx.elementsDeclaration()) : null,
        };
    }

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

    visitPropsDeclaration(ctx) {
        return ctx.propsContent() ? this.visit(ctx.propsContent()) : [];
    }

    visitPropsContent(ctx) {
        return ctx.variableDeclaration().map(varDecl => this.visit(varDecl));
    }

    visitCodeDeclaration(ctx) {
        return ctx.codeContent().map(content => this.visit(content));
    }

    visitCodeContent(ctx) {
        if (ctx.variableDeclaration()) {
            return this.visit(ctx.variableDeclaration());
        }
        return null;
    }

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

    visitStatement(ctx) {
        if (ctx.variableTypes()) {
            return this.visit(ctx.variableTypes());
        } else if (ctx.NAME()) {
            return {type: "name", value: ctx.NAME().getText()};
        }
        return null;
    }

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
                if (child instanceof BasicJSBParser.ElementsDeclarationContext)
                    return this.visitElementsDeclaration(child);
                if (child instanceof BasicJSBParser.EmbeddedStatementContext)
                    return this.visitEmbeddedStatement(child);
                if (child instanceof BasicJSBParser.TextContentContext) {
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

    visitEmbeddedStatement(ctx) {
        return {
            type: "embeddedStatement",
            expression: ctx.expression() ? this.visit(ctx.expression()) : null,
        };
    }

    visitExpression(ctx) {
        if (ctx.variableTypes()) {
            return this.visit(ctx.variableTypes());
        } else if (ctx.NAME()) {
            return {type: "name", value: ctx.NAME().getText()};
        }
        return null;
    }

    visitVariableTypes(ctx) {
        if (ctx.INT()) {
            return {type: "int", value: parseInt(ctx.INT().getText(), 10)};
        } else if (ctx.BOOL()) {
            return {type: "bool", value: ctx.BOOL().getText() === "true"};
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

    visitTextContent(ctx) {
        const value = ctx.TEXT().getText().replace(/\s+/g, ' ');

        if (value.trim() === "") return null;

        return {
            type: "text",
            value: ctx.TEXT().getText().replace(/\s+/g, ' '),
        };
    }
}
