// Generated from C:/Users/julie/WebstormProjects/jsb/jsb-compiler/src/g4/JSBParser.g4 by ANTLR 4.13.2
import org.antlr.v4.runtime.tree.ParseTreeVisitor;

/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by {@link JSBParser}.
 *
 * @param <T> The return type of the visit operation. Use {@link Void} for
 * operations with no return type.
 */
public interface JSBParserVisitor<T> extends ParseTreeVisitor<T> {
	/**
	 * Visit a parse tree produced by {@link JSBParser#document}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitDocument(JSBParser.DocumentContext ctx);
	/**
	 * Visit a parse tree produced by {@link JSBParser#importDeclaration}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitImportDeclaration(JSBParser.ImportDeclarationContext ctx);
	/**
	 * Visit a parse tree produced by {@link JSBParser#importStatement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitImportStatement(JSBParser.ImportStatementContext ctx);
	/**
	 * Visit a parse tree produced by {@link JSBParser#componentImport}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitComponentImport(JSBParser.ComponentImportContext ctx);
	/**
	 * Visit a parse tree produced by {@link JSBParser#styleImport}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitStyleImport(JSBParser.StyleImportContext ctx);
	/**
	 * Visit a parse tree produced by {@link JSBParser#propsDeclaration}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPropsDeclaration(JSBParser.PropsDeclarationContext ctx);
	/**
	 * Visit a parse tree produced by {@link JSBParser#propsContent}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPropsContent(JSBParser.PropsContentContext ctx);
	/**
	 * Visit a parse tree produced by {@link JSBParser#codeDeclaration}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCodeDeclaration(JSBParser.CodeDeclarationContext ctx);
	/**
	 * Visit a parse tree produced by {@link JSBParser#codeContent}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCodeContent(JSBParser.CodeContentContext ctx);
	/**
	 * Visit a parse tree produced by {@link JSBParser#variableDeclaration}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitVariableDeclaration(JSBParser.VariableDeclarationContext ctx);
	/**
	 * Visit a parse tree produced by {@link JSBParser#statement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitStatement(JSBParser.StatementContext ctx);
	/**
	 * Visit a parse tree produced by {@link JSBParser#elementsDeclaration}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitElementsDeclaration(JSBParser.ElementsDeclarationContext ctx);
	/**
	 * Visit a parse tree produced by {@link JSBParser#content}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitContent(JSBParser.ContentContext ctx);
	/**
	 * Visit a parse tree produced by {@link JSBParser#elementAttribute}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitElementAttribute(JSBParser.ElementAttributeContext ctx);
	/**
	 * Visit a parse tree produced by {@link JSBParser#embeddedStatement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitEmbeddedStatement(JSBParser.EmbeddedStatementContext ctx);
	/**
	 * Visit a parse tree produced by {@link JSBParser#expression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExpression(JSBParser.ExpressionContext ctx);
	/**
	 * Visit a parse tree produced by {@link JSBParser#variableTypes}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitVariableTypes(JSBParser.VariableTypesContext ctx);
	/**
	 * Visit a parse tree produced by {@link JSBParser#stringType}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitStringType(JSBParser.StringTypeContext ctx);
	/**
	 * Visit a parse tree produced by {@link JSBParser#textContent}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTextContent(JSBParser.TextContentContext ctx);
}