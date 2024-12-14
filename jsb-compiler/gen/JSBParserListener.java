// Generated from C:/Users/julie/WebstormProjects/jsb/jsb-compiler/src/g4/JSBParser.g4 by ANTLR 4.13.2
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link JSBParser}.
 */
public interface JSBParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link JSBParser#document}.
	 * @param ctx the parse tree
	 */
	void enterDocument(JSBParser.DocumentContext ctx);
	/**
	 * Exit a parse tree produced by {@link JSBParser#document}.
	 * @param ctx the parse tree
	 */
	void exitDocument(JSBParser.DocumentContext ctx);
	/**
	 * Enter a parse tree produced by {@link JSBParser#importDeclaration}.
	 * @param ctx the parse tree
	 */
	void enterImportDeclaration(JSBParser.ImportDeclarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link JSBParser#importDeclaration}.
	 * @param ctx the parse tree
	 */
	void exitImportDeclaration(JSBParser.ImportDeclarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link JSBParser#importStatement}.
	 * @param ctx the parse tree
	 */
	void enterImportStatement(JSBParser.ImportStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link JSBParser#importStatement}.
	 * @param ctx the parse tree
	 */
	void exitImportStatement(JSBParser.ImportStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link JSBParser#componentImport}.
	 * @param ctx the parse tree
	 */
	void enterComponentImport(JSBParser.ComponentImportContext ctx);
	/**
	 * Exit a parse tree produced by {@link JSBParser#componentImport}.
	 * @param ctx the parse tree
	 */
	void exitComponentImport(JSBParser.ComponentImportContext ctx);
	/**
	 * Enter a parse tree produced by {@link JSBParser#styleImport}.
	 * @param ctx the parse tree
	 */
	void enterStyleImport(JSBParser.StyleImportContext ctx);
	/**
	 * Exit a parse tree produced by {@link JSBParser#styleImport}.
	 * @param ctx the parse tree
	 */
	void exitStyleImport(JSBParser.StyleImportContext ctx);
	/**
	 * Enter a parse tree produced by {@link JSBParser#propsDeclaration}.
	 * @param ctx the parse tree
	 */
	void enterPropsDeclaration(JSBParser.PropsDeclarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link JSBParser#propsDeclaration}.
	 * @param ctx the parse tree
	 */
	void exitPropsDeclaration(JSBParser.PropsDeclarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link JSBParser#propsContent}.
	 * @param ctx the parse tree
	 */
	void enterPropsContent(JSBParser.PropsContentContext ctx);
	/**
	 * Exit a parse tree produced by {@link JSBParser#propsContent}.
	 * @param ctx the parse tree
	 */
	void exitPropsContent(JSBParser.PropsContentContext ctx);
	/**
	 * Enter a parse tree produced by {@link JSBParser#codeDeclaration}.
	 * @param ctx the parse tree
	 */
	void enterCodeDeclaration(JSBParser.CodeDeclarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link JSBParser#codeDeclaration}.
	 * @param ctx the parse tree
	 */
	void exitCodeDeclaration(JSBParser.CodeDeclarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link JSBParser#codeContent}.
	 * @param ctx the parse tree
	 */
	void enterCodeContent(JSBParser.CodeContentContext ctx);
	/**
	 * Exit a parse tree produced by {@link JSBParser#codeContent}.
	 * @param ctx the parse tree
	 */
	void exitCodeContent(JSBParser.CodeContentContext ctx);
	/**
	 * Enter a parse tree produced by {@link JSBParser#variableDeclaration}.
	 * @param ctx the parse tree
	 */
	void enterVariableDeclaration(JSBParser.VariableDeclarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link JSBParser#variableDeclaration}.
	 * @param ctx the parse tree
	 */
	void exitVariableDeclaration(JSBParser.VariableDeclarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link JSBParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterStatement(JSBParser.StatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link JSBParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitStatement(JSBParser.StatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link JSBParser#elementsDeclaration}.
	 * @param ctx the parse tree
	 */
	void enterElementsDeclaration(JSBParser.ElementsDeclarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link JSBParser#elementsDeclaration}.
	 * @param ctx the parse tree
	 */
	void exitElementsDeclaration(JSBParser.ElementsDeclarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link JSBParser#content}.
	 * @param ctx the parse tree
	 */
	void enterContent(JSBParser.ContentContext ctx);
	/**
	 * Exit a parse tree produced by {@link JSBParser#content}.
	 * @param ctx the parse tree
	 */
	void exitContent(JSBParser.ContentContext ctx);
	/**
	 * Enter a parse tree produced by {@link JSBParser#elementAttribute}.
	 * @param ctx the parse tree
	 */
	void enterElementAttribute(JSBParser.ElementAttributeContext ctx);
	/**
	 * Exit a parse tree produced by {@link JSBParser#elementAttribute}.
	 * @param ctx the parse tree
	 */
	void exitElementAttribute(JSBParser.ElementAttributeContext ctx);
	/**
	 * Enter a parse tree produced by {@link JSBParser#embeddedStatement}.
	 * @param ctx the parse tree
	 */
	void enterEmbeddedStatement(JSBParser.EmbeddedStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link JSBParser#embeddedStatement}.
	 * @param ctx the parse tree
	 */
	void exitEmbeddedStatement(JSBParser.EmbeddedStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link JSBParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterExpression(JSBParser.ExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link JSBParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitExpression(JSBParser.ExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link JSBParser#variableTypes}.
	 * @param ctx the parse tree
	 */
	void enterVariableTypes(JSBParser.VariableTypesContext ctx);
	/**
	 * Exit a parse tree produced by {@link JSBParser#variableTypes}.
	 * @param ctx the parse tree
	 */
	void exitVariableTypes(JSBParser.VariableTypesContext ctx);
	/**
	 * Enter a parse tree produced by {@link JSBParser#stringType}.
	 * @param ctx the parse tree
	 */
	void enterStringType(JSBParser.StringTypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link JSBParser#stringType}.
	 * @param ctx the parse tree
	 */
	void exitStringType(JSBParser.StringTypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link JSBParser#textContent}.
	 * @param ctx the parse tree
	 */
	void enterTextContent(JSBParser.TextContentContext ctx);
	/**
	 * Exit a parse tree produced by {@link JSBParser#textContent}.
	 * @param ctx the parse tree
	 */
	void exitTextContent(JSBParser.TextContentContext ctx);
}