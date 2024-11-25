import antlr4 from 'antlr4';
import JSBSyntaxLexer from './generated/JSBSyntaxLexer.js';
import JSBSyntaxParser from './generated/JSBSyntaxParser.js';
import JSBSyntaxVisitor from './generated/JSBSyntaxVisitor.js';

class ClassVisitor extends JSBSyntaxVisitor {
    visitDocument(ctx) {
        if (ctx.propsDeclaration()) {
            this.visit(ctx.propsDeclaration());
        }

        if (ctx.codeDeclaration()) {
            this.visit(ctx.codeDeclaration());
        }

        if (ctx.contentDeclaration()) {
            this.visit(ctx.contentDeclaration());
        }
    }

    visitPropsDeclaration(ctx) {
        console.log("Props Declaration:");
        this.visit(ctx.propsContent());
    }

    visitCodeDeclaration(ctx) {
        console.log("Code Declaration:");
        this.visit(ctx.codeContent());
    }

    visitPropsContent(ctx) {
        if (ctx.variableDeclaration()) {
            this.visit(ctx.variableDeclaration());
        }
    }

    visitCodeContent(ctx) {
        ctx.children.forEach(child => {
            if (child instanceof JSBSyntaxParser.VariableDeclarationContext) {
                this.visit(child);
            } else if (child instanceof JSBSyntaxParser.FunctionDeclarationContext) {
                this.visit(child);
            } else if (child instanceof JSBSyntaxParser.ImportDeclarationContext) {
                this.visit(child);
            } else if (child instanceof antlr4.tree.TerminalNode && child.getSymbol().type === JSBSyntaxLexer.LINE_COMMENT) {
                console.log(`Comment: ${child.getText()}`);
            }
        });
    }

    visitVariableDeclaration(ctx) {
        const varKind = ctx.variableKind().getText();
        const varName = ctx.ID().getText();
        const expr = this.visit(ctx.expression());
        console.log(`${varKind} ${varName} = ${expr}`);
    }

    visitFunctionDeclaration(ctx) {
        const funcName = ctx.functionCall().ID().getText();
        console.log(`Function Declaration: ${funcName}`);
    }

    visitImportDeclaration(ctx) {
        const importName = ctx.ID().getText();
        const importSource = ctx.STRING().getText();
        console.log(`Import: ${importName} from ${importSource}`);
    }

    visitExpression(ctx) {
        if (ctx.STRING()) {
            return ctx.STRING().getText();
        } else if (ctx.ID()) {
            return ctx.ID().getText();
        } else if (ctx.functionCall()) {
            return this.visit(ctx.functionCall());
        }
    }

    visitFunctionCall(ctx) {
        const funcName = ctx.ID().getText();
        const args = ctx.functionArgs() ? this.visit(ctx.functionArgs()) : '';
        return `${funcName}(${args})`;
    }

    visitFunctionArgs(ctx) {
        return ctx.expression().map(expr => this.visit(expr)).join(', ');
    }

    visitContentDeclaration(ctx) {
        console.log("Content Declaration:");
        ctx.element().forEach(el => this.visit(el));
    }

    visitElement(ctx) {
        if (ctx.ID().length === 0) {
            console.error("Error: Missing tag name in element.");
            return;
        }

        const tagName = ctx.ID(0).getText(); // Opening tag name
        console.log(`<${tagName}>`);

        if (ctx.attribute()) {
            ctx.attribute().forEach(attr => this.visit(attr));
        }
        if (ctx.elementContent()) {
            ctx.elementContent().forEach(content => this.visit(content));
        }

        const closingTagName = ctx.ID(1) ? ctx.ID(1).getText() : null;
        if (closingTagName && closingTagName === tagName) {
            console.log(`</${closingTagName}>`);
        } else {
            console.error(`Error: Mismatched or missing closing tag for <${tagName}>.`);
        }
    }


    visitElementContent(ctx) {
        if (ctx.element()) {
            this.visit(ctx.element());
        } else if (ctx.TEXT()) {
            console.log(`Text: ${ctx.TEXT().getText()}`);
        }
    }

    visitAttribute(ctx) {
        const attrName = ctx.ID().getText();
        const attrValue = ctx.STRING() ? ctx.STRING().getText() : this.visit(ctx.expressionInBraces());
        console.log(`Attribute: ${attrName} = ${attrValue}`);
    }

    visitExpressionInBraces(ctx) {
        const expr = this.visit(ctx.expression());
        return `{{${expr}}}`;
    }

    visitTerminal(node) {
        return node.getText();
    }
}

function parseText(input) {
    const chars = new antlr4.InputStream(input);
    const lexer = new JSBSyntaxLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new JSBSyntaxParser(tokens);

    const context = parser.document();

    const visitor = new ClassVisitor();
    visitor.visit(context);
}

parseText(`
<props>
    let variable = 'value';
</props>

<code>
    let variable = 'value';
    import module from 'source';
    function callExample() {
        // Example comment
    }
</code>

<element>
    <child attr="value">Text</child>
</element>
`);
