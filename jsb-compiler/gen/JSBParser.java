// Generated from C:/Users/julie/WebstormProjects/jsb/jsb-compiler/src/g4/JSBParser.g4 by ANTLR 4.13.2
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class JSBParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		FUNCTION=1, ENDIF=2, IF=3, ELSE=4, LPAREN=5, WS=6, IMPORT_OPEN=7, PROPS_OPEN=8, 
		CODE_OPEN=9, BOOL=10, EMBEDDED_OPEN=11, EMBEDDED_CLOSE=12, EMBEDDED_CONTENT_CLOSE=13, 
		INT=14, STRING_OPEN=15, CODE_BLOCK_OPEN=16, CODE_BLOCK_CLOSE=17, FUNC_START=18, 
		ARGS_OPEN=19, ARGS_CLOSE=20, ARGS_SEPARATOR=21, VAR_DEF=22, EQUALS=23, 
		STATEMENT_END=24, TAG_SLASH=25, TAG_OPEN=26, NAME=27, FROM=28, IMPORT_ID=29, 
		IMPORT_PATH_OPEN=30, IMPORT_STATEMENT_END=31, IMPORT_WS=32, IMPORT_CLOSE=33, 
		PROPS_WS=34, PROPS_CLOSE=35, COMMENT_START=36, CODE_WS=37, CODE_CLOSE=38, 
		STATEMENT_WS=39, FUNCTION_ARGS_WS=40, FUNCTION_CALL_ARGS_WS=41, IF_ARGS_WS=42, 
		TAG_WS=43, TAG_CLOSE=44, ATTRIBUTE_WS=45, EMBEDDED_WS=46, STRING_CONTENT=47, 
		STRING_CLOSE=48, TEXT=49, COMMENT_CONTENT=50, COMMENT_CLOSE=51;
	public static final int
		RULE_document = 0, RULE_importDeclaration = 1, RULE_importStatement = 2, 
		RULE_componentImport = 3, RULE_styleImport = 4, RULE_propsDeclaration = 5, 
		RULE_propsContent = 6, RULE_codeDeclaration = 7, RULE_codeContent = 8, 
		RULE_variableDeclaration = 9, RULE_statement = 10, RULE_elementsDeclaration = 11, 
		RULE_content = 12, RULE_elementAttribute = 13, RULE_embeddedStatement = 14, 
		RULE_expression = 15, RULE_variableTypes = 16, RULE_stringType = 17, RULE_textContent = 18;
	private static String[] makeRuleNames() {
		return new String[] {
			"document", "importDeclaration", "importStatement", "componentImport", 
			"styleImport", "propsDeclaration", "propsContent", "codeDeclaration", 
			"codeContent", "variableDeclaration", "statement", "elementsDeclaration", 
			"content", "elementAttribute", "embeddedStatement", "expression", "variableTypes", 
			"stringType", "textContent"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'function '", "'/if'", "'if'", "'else'", "'('", null, "'<import>'", 
			"'<props>'", "'<code>'", null, null, null, null, null, null, null, null, 
			null, null, null, null, null, "'='", null, null, "'<'", null, "'from'", 
			null, null, null, null, "'</import>'", null, "'</props>'", null, null, 
			"'</code>'", null, null, null, null, null, "'>'", null, null, null, null, 
			null, null, "'\\n'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "FUNCTION", "ENDIF", "IF", "ELSE", "LPAREN", "WS", "IMPORT_OPEN", 
			"PROPS_OPEN", "CODE_OPEN", "BOOL", "EMBEDDED_OPEN", "EMBEDDED_CLOSE", 
			"EMBEDDED_CONTENT_CLOSE", "INT", "STRING_OPEN", "CODE_BLOCK_OPEN", "CODE_BLOCK_CLOSE", 
			"FUNC_START", "ARGS_OPEN", "ARGS_CLOSE", "ARGS_SEPARATOR", "VAR_DEF", 
			"EQUALS", "STATEMENT_END", "TAG_SLASH", "TAG_OPEN", "NAME", "FROM", "IMPORT_ID", 
			"IMPORT_PATH_OPEN", "IMPORT_STATEMENT_END", "IMPORT_WS", "IMPORT_CLOSE", 
			"PROPS_WS", "PROPS_CLOSE", "COMMENT_START", "CODE_WS", "CODE_CLOSE", 
			"STATEMENT_WS", "FUNCTION_ARGS_WS", "FUNCTION_CALL_ARGS_WS", "IF_ARGS_WS", 
			"TAG_WS", "TAG_CLOSE", "ATTRIBUTE_WS", "EMBEDDED_WS", "STRING_CONTENT", 
			"STRING_CLOSE", "TEXT", "COMMENT_CONTENT", "COMMENT_CLOSE"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "JSBParser.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public JSBParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class DocumentContext extends ParserRuleContext {
		public ElementsDeclarationContext elementsDeclaration() {
			return getRuleContext(ElementsDeclarationContext.class,0);
		}
		public ImportDeclarationContext importDeclaration() {
			return getRuleContext(ImportDeclarationContext.class,0);
		}
		public PropsDeclarationContext propsDeclaration() {
			return getRuleContext(PropsDeclarationContext.class,0);
		}
		public CodeDeclarationContext codeDeclaration() {
			return getRuleContext(CodeDeclarationContext.class,0);
		}
		public DocumentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_document; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof JSBParserListener ) ((JSBParserListener)listener).enterDocument(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof JSBParserListener ) ((JSBParserListener)listener).exitDocument(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof JSBParserVisitor ) return ((JSBParserVisitor<? extends T>)visitor).visitDocument(this);
			else return visitor.visitChildren(this);
		}
	}

	public final DocumentContext document() throws RecognitionException {
		DocumentContext _localctx = new DocumentContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_document);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(39);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==IMPORT_OPEN) {
				{
				setState(38);
				importDeclaration();
				}
			}

			setState(42);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==PROPS_OPEN) {
				{
				setState(41);
				propsDeclaration();
				}
			}

			setState(45);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==CODE_OPEN) {
				{
				setState(44);
				codeDeclaration();
				}
			}

			setState(47);
			elementsDeclaration();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ImportDeclarationContext extends ParserRuleContext {
		public TerminalNode IMPORT_OPEN() { return getToken(JSBParser.IMPORT_OPEN, 0); }
		public TerminalNode IMPORT_CLOSE() { return getToken(JSBParser.IMPORT_CLOSE, 0); }
		public List<ImportStatementContext> importStatement() {
			return getRuleContexts(ImportStatementContext.class);
		}
		public ImportStatementContext importStatement(int i) {
			return getRuleContext(ImportStatementContext.class,i);
		}
		public ImportDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_importDeclaration; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof JSBParserListener ) ((JSBParserListener)listener).enterImportDeclaration(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof JSBParserListener ) ((JSBParserListener)listener).exitImportDeclaration(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof JSBParserVisitor ) return ((JSBParserVisitor<? extends T>)visitor).visitImportDeclaration(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ImportDeclarationContext importDeclaration() throws RecognitionException {
		ImportDeclarationContext _localctx = new ImportDeclarationContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_importDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(49);
			match(IMPORT_OPEN);
			setState(53);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==IMPORT_ID || _la==IMPORT_PATH_OPEN) {
				{
				{
				setState(50);
				importStatement();
				}
				}
				setState(55);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(56);
			match(IMPORT_CLOSE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ImportStatementContext extends ParserRuleContext {
		public ComponentImportContext componentImport() {
			return getRuleContext(ComponentImportContext.class,0);
		}
		public StyleImportContext styleImport() {
			return getRuleContext(StyleImportContext.class,0);
		}
		public ImportStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_importStatement; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof JSBParserListener ) ((JSBParserListener)listener).enterImportStatement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof JSBParserListener ) ((JSBParserListener)listener).exitImportStatement(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof JSBParserVisitor ) return ((JSBParserVisitor<? extends T>)visitor).visitImportStatement(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ImportStatementContext importStatement() throws RecognitionException {
		ImportStatementContext _localctx = new ImportStatementContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_importStatement);
		try {
			setState(60);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case IMPORT_ID:
				enterOuterAlt(_localctx, 1);
				{
				setState(58);
				componentImport();
				}
				break;
			case IMPORT_PATH_OPEN:
				enterOuterAlt(_localctx, 2);
				{
				setState(59);
				styleImport();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ComponentImportContext extends ParserRuleContext {
		public TerminalNode IMPORT_ID() { return getToken(JSBParser.IMPORT_ID, 0); }
		public TerminalNode FROM() { return getToken(JSBParser.FROM, 0); }
		public TerminalNode IMPORT_PATH_OPEN() { return getToken(JSBParser.IMPORT_PATH_OPEN, 0); }
		public TerminalNode STRING_CONTENT() { return getToken(JSBParser.STRING_CONTENT, 0); }
		public TerminalNode STRING_CLOSE() { return getToken(JSBParser.STRING_CLOSE, 0); }
		public TerminalNode IMPORT_STATEMENT_END() { return getToken(JSBParser.IMPORT_STATEMENT_END, 0); }
		public ComponentImportContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_componentImport; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof JSBParserListener ) ((JSBParserListener)listener).enterComponentImport(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof JSBParserListener ) ((JSBParserListener)listener).exitComponentImport(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof JSBParserVisitor ) return ((JSBParserVisitor<? extends T>)visitor).visitComponentImport(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ComponentImportContext componentImport() throws RecognitionException {
		ComponentImportContext _localctx = new ComponentImportContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_componentImport);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(62);
			match(IMPORT_ID);
			setState(63);
			match(FROM);
			setState(64);
			match(IMPORT_PATH_OPEN);
			setState(65);
			match(STRING_CONTENT);
			setState(66);
			match(STRING_CLOSE);
			setState(67);
			match(IMPORT_STATEMENT_END);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class StyleImportContext extends ParserRuleContext {
		public TerminalNode IMPORT_PATH_OPEN() { return getToken(JSBParser.IMPORT_PATH_OPEN, 0); }
		public TerminalNode STRING_CONTENT() { return getToken(JSBParser.STRING_CONTENT, 0); }
		public TerminalNode STRING_CLOSE() { return getToken(JSBParser.STRING_CLOSE, 0); }
		public TerminalNode IMPORT_STATEMENT_END() { return getToken(JSBParser.IMPORT_STATEMENT_END, 0); }
		public StyleImportContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_styleImport; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof JSBParserListener ) ((JSBParserListener)listener).enterStyleImport(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof JSBParserListener ) ((JSBParserListener)listener).exitStyleImport(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof JSBParserVisitor ) return ((JSBParserVisitor<? extends T>)visitor).visitStyleImport(this);
			else return visitor.visitChildren(this);
		}
	}

	public final StyleImportContext styleImport() throws RecognitionException {
		StyleImportContext _localctx = new StyleImportContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_styleImport);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(69);
			match(IMPORT_PATH_OPEN);
			setState(70);
			match(STRING_CONTENT);
			setState(71);
			match(STRING_CLOSE);
			setState(72);
			match(IMPORT_STATEMENT_END);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class PropsDeclarationContext extends ParserRuleContext {
		public TerminalNode PROPS_OPEN() { return getToken(JSBParser.PROPS_OPEN, 0); }
		public PropsContentContext propsContent() {
			return getRuleContext(PropsContentContext.class,0);
		}
		public TerminalNode PROPS_CLOSE() { return getToken(JSBParser.PROPS_CLOSE, 0); }
		public PropsDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_propsDeclaration; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof JSBParserListener ) ((JSBParserListener)listener).enterPropsDeclaration(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof JSBParserListener ) ((JSBParserListener)listener).exitPropsDeclaration(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof JSBParserVisitor ) return ((JSBParserVisitor<? extends T>)visitor).visitPropsDeclaration(this);
			else return visitor.visitChildren(this);
		}
	}

	public final PropsDeclarationContext propsDeclaration() throws RecognitionException {
		PropsDeclarationContext _localctx = new PropsDeclarationContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_propsDeclaration);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(74);
			match(PROPS_OPEN);
			setState(75);
			propsContent();
			setState(76);
			match(PROPS_CLOSE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class PropsContentContext extends ParserRuleContext {
		public List<VariableDeclarationContext> variableDeclaration() {
			return getRuleContexts(VariableDeclarationContext.class);
		}
		public VariableDeclarationContext variableDeclaration(int i) {
			return getRuleContext(VariableDeclarationContext.class,i);
		}
		public PropsContentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_propsContent; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof JSBParserListener ) ((JSBParserListener)listener).enterPropsContent(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof JSBParserListener ) ((JSBParserListener)listener).exitPropsContent(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof JSBParserVisitor ) return ((JSBParserVisitor<? extends T>)visitor).visitPropsContent(this);
			else return visitor.visitChildren(this);
		}
	}

	public final PropsContentContext propsContent() throws RecognitionException {
		PropsContentContext _localctx = new PropsContentContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_propsContent);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(81);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==VAR_DEF) {
				{
				{
				setState(78);
				variableDeclaration();
				}
				}
				setState(83);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class CodeDeclarationContext extends ParserRuleContext {
		public TerminalNode CODE_OPEN() { return getToken(JSBParser.CODE_OPEN, 0); }
		public TerminalNode CODE_CLOSE() { return getToken(JSBParser.CODE_CLOSE, 0); }
		public List<CodeContentContext> codeContent() {
			return getRuleContexts(CodeContentContext.class);
		}
		public CodeContentContext codeContent(int i) {
			return getRuleContext(CodeContentContext.class,i);
		}
		public CodeDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_codeDeclaration; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof JSBParserListener ) ((JSBParserListener)listener).enterCodeDeclaration(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof JSBParserListener ) ((JSBParserListener)listener).exitCodeDeclaration(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof JSBParserVisitor ) return ((JSBParserVisitor<? extends T>)visitor).visitCodeDeclaration(this);
			else return visitor.visitChildren(this);
		}
	}

	public final CodeDeclarationContext codeDeclaration() throws RecognitionException {
		CodeDeclarationContext _localctx = new CodeDeclarationContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_codeDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(84);
			match(CODE_OPEN);
			setState(88);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==VAR_DEF) {
				{
				{
				setState(85);
				codeContent();
				}
				}
				setState(90);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(91);
			match(CODE_CLOSE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class CodeContentContext extends ParserRuleContext {
		public VariableDeclarationContext variableDeclaration() {
			return getRuleContext(VariableDeclarationContext.class,0);
		}
		public CodeContentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_codeContent; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof JSBParserListener ) ((JSBParserListener)listener).enterCodeContent(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof JSBParserListener ) ((JSBParserListener)listener).exitCodeContent(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof JSBParserVisitor ) return ((JSBParserVisitor<? extends T>)visitor).visitCodeContent(this);
			else return visitor.visitChildren(this);
		}
	}

	public final CodeContentContext codeContent() throws RecognitionException {
		CodeContentContext _localctx = new CodeContentContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_codeContent);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(93);
			variableDeclaration();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class VariableDeclarationContext extends ParserRuleContext {
		public TerminalNode VAR_DEF() { return getToken(JSBParser.VAR_DEF, 0); }
		public TerminalNode NAME() { return getToken(JSBParser.NAME, 0); }
		public TerminalNode STATEMENT_END() { return getToken(JSBParser.STATEMENT_END, 0); }
		public TerminalNode EQUALS() { return getToken(JSBParser.EQUALS, 0); }
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public VariableDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variableDeclaration; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof JSBParserListener ) ((JSBParserListener)listener).enterVariableDeclaration(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof JSBParserListener ) ((JSBParserListener)listener).exitVariableDeclaration(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof JSBParserVisitor ) return ((JSBParserVisitor<? extends T>)visitor).visitVariableDeclaration(this);
			else return visitor.visitChildren(this);
		}
	}

	public final VariableDeclarationContext variableDeclaration() throws RecognitionException {
		VariableDeclarationContext _localctx = new VariableDeclarationContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_variableDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(95);
			match(VAR_DEF);
			setState(96);
			match(NAME);
			setState(99);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==EQUALS) {
				{
				setState(97);
				match(EQUALS);
				setState(98);
				statement();
				}
			}

			setState(101);
			match(STATEMENT_END);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class StatementContext extends ParserRuleContext {
		public VariableTypesContext variableTypes() {
			return getRuleContext(VariableTypesContext.class,0);
		}
		public StatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statement; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof JSBParserListener ) ((JSBParserListener)listener).enterStatement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof JSBParserListener ) ((JSBParserListener)listener).exitStatement(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof JSBParserVisitor ) return ((JSBParserVisitor<? extends T>)visitor).visitStatement(this);
			else return visitor.visitChildren(this);
		}
	}

	public final StatementContext statement() throws RecognitionException {
		StatementContext _localctx = new StatementContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_statement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(103);
			variableTypes();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ElementsDeclarationContext extends ParserRuleContext {
		public List<TerminalNode> TAG_OPEN() { return getTokens(JSBParser.TAG_OPEN); }
		public TerminalNode TAG_OPEN(int i) {
			return getToken(JSBParser.TAG_OPEN, i);
		}
		public List<TerminalNode> NAME() { return getTokens(JSBParser.NAME); }
		public TerminalNode NAME(int i) {
			return getToken(JSBParser.NAME, i);
		}
		public List<TerminalNode> TAG_CLOSE() { return getTokens(JSBParser.TAG_CLOSE); }
		public TerminalNode TAG_CLOSE(int i) {
			return getToken(JSBParser.TAG_CLOSE, i);
		}
		public ContentContext content() {
			return getRuleContext(ContentContext.class,0);
		}
		public TerminalNode TAG_SLASH() { return getToken(JSBParser.TAG_SLASH, 0); }
		public List<ElementAttributeContext> elementAttribute() {
			return getRuleContexts(ElementAttributeContext.class);
		}
		public ElementAttributeContext elementAttribute(int i) {
			return getRuleContext(ElementAttributeContext.class,i);
		}
		public ElementsDeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_elementsDeclaration; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof JSBParserListener ) ((JSBParserListener)listener).enterElementsDeclaration(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof JSBParserListener ) ((JSBParserListener)listener).exitElementsDeclaration(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof JSBParserVisitor ) return ((JSBParserVisitor<? extends T>)visitor).visitElementsDeclaration(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ElementsDeclarationContext elementsDeclaration() throws RecognitionException {
		ElementsDeclarationContext _localctx = new ElementsDeclarationContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_elementsDeclaration);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(105);
			match(TAG_OPEN);
			setState(106);
			match(NAME);
			setState(110);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==NAME) {
				{
				{
				setState(107);
				elementAttribute();
				}
				}
				setState(112);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(122);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case TAG_CLOSE:
				{
				setState(113);
				match(TAG_CLOSE);
				setState(114);
				content();
				setState(115);
				match(TAG_OPEN);
				setState(116);
				match(TAG_SLASH);
				setState(117);
				match(NAME);
				setState(118);
				match(TAG_CLOSE);
				}
				break;
			case TAG_SLASH:
				{
				setState(120);
				match(TAG_SLASH);
				setState(121);
				match(TAG_CLOSE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ContentContext extends ParserRuleContext {
		public List<ElementsDeclarationContext> elementsDeclaration() {
			return getRuleContexts(ElementsDeclarationContext.class);
		}
		public ElementsDeclarationContext elementsDeclaration(int i) {
			return getRuleContext(ElementsDeclarationContext.class,i);
		}
		public List<EmbeddedStatementContext> embeddedStatement() {
			return getRuleContexts(EmbeddedStatementContext.class);
		}
		public EmbeddedStatementContext embeddedStatement(int i) {
			return getRuleContext(EmbeddedStatementContext.class,i);
		}
		public List<TextContentContext> textContent() {
			return getRuleContexts(TextContentContext.class);
		}
		public TextContentContext textContent(int i) {
			return getRuleContext(TextContentContext.class,i);
		}
		public ContentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_content; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof JSBParserListener ) ((JSBParserListener)listener).enterContent(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof JSBParserListener ) ((JSBParserListener)listener).exitContent(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof JSBParserVisitor ) return ((JSBParserVisitor<? extends T>)visitor).visitContent(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ContentContext content() throws RecognitionException {
		ContentContext _localctx = new ContentContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_content);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(129);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,11,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					setState(127);
					_errHandler.sync(this);
					switch (_input.LA(1)) {
					case TAG_OPEN:
						{
						setState(124);
						elementsDeclaration();
						}
						break;
					case EMBEDDED_OPEN:
						{
						setState(125);
						embeddedStatement();
						}
						break;
					case TEXT:
						{
						setState(126);
						textContent();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					} 
				}
				setState(131);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,11,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ElementAttributeContext extends ParserRuleContext {
		public TerminalNode NAME() { return getToken(JSBParser.NAME, 0); }
		public TerminalNode EQUALS() { return getToken(JSBParser.EQUALS, 0); }
		public EmbeddedStatementContext embeddedStatement() {
			return getRuleContext(EmbeddedStatementContext.class,0);
		}
		public StringTypeContext stringType() {
			return getRuleContext(StringTypeContext.class,0);
		}
		public ElementAttributeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_elementAttribute; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof JSBParserListener ) ((JSBParserListener)listener).enterElementAttribute(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof JSBParserListener ) ((JSBParserListener)listener).exitElementAttribute(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof JSBParserVisitor ) return ((JSBParserVisitor<? extends T>)visitor).visitElementAttribute(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ElementAttributeContext elementAttribute() throws RecognitionException {
		ElementAttributeContext _localctx = new ElementAttributeContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_elementAttribute);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(132);
			match(NAME);
			setState(133);
			match(EQUALS);
			setState(136);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case EMBEDDED_OPEN:
				{
				setState(134);
				embeddedStatement();
				}
				break;
			case STRING_OPEN:
				{
				setState(135);
				stringType();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class EmbeddedStatementContext extends ParserRuleContext {
		public TerminalNode EMBEDDED_OPEN() { return getToken(JSBParser.EMBEDDED_OPEN, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode EMBEDDED_CLOSE() { return getToken(JSBParser.EMBEDDED_CLOSE, 0); }
		public EmbeddedStatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_embeddedStatement; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof JSBParserListener ) ((JSBParserListener)listener).enterEmbeddedStatement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof JSBParserListener ) ((JSBParserListener)listener).exitEmbeddedStatement(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof JSBParserVisitor ) return ((JSBParserVisitor<? extends T>)visitor).visitEmbeddedStatement(this);
			else return visitor.visitChildren(this);
		}
	}

	public final EmbeddedStatementContext embeddedStatement() throws RecognitionException {
		EmbeddedStatementContext _localctx = new EmbeddedStatementContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_embeddedStatement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(138);
			match(EMBEDDED_OPEN);
			setState(139);
			expression();
			setState(140);
			match(EMBEDDED_CLOSE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ExpressionContext extends ParserRuleContext {
		public VariableTypesContext variableTypes() {
			return getRuleContext(VariableTypesContext.class,0);
		}
		public TerminalNode NAME() { return getToken(JSBParser.NAME, 0); }
		public ExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expression; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof JSBParserListener ) ((JSBParserListener)listener).enterExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof JSBParserListener ) ((JSBParserListener)listener).exitExpression(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof JSBParserVisitor ) return ((JSBParserVisitor<? extends T>)visitor).visitExpression(this);
			else return visitor.visitChildren(this);
		}
	}

	public final ExpressionContext expression() throws RecognitionException {
		ExpressionContext _localctx = new ExpressionContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_expression);
		try {
			setState(144);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case BOOL:
			case INT:
			case STRING_OPEN:
				enterOuterAlt(_localctx, 1);
				{
				setState(142);
				variableTypes();
				}
				break;
			case NAME:
				enterOuterAlt(_localctx, 2);
				{
				setState(143);
				match(NAME);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class VariableTypesContext extends ParserRuleContext {
		public TerminalNode INT() { return getToken(JSBParser.INT, 0); }
		public StringTypeContext stringType() {
			return getRuleContext(StringTypeContext.class,0);
		}
		public TerminalNode BOOL() { return getToken(JSBParser.BOOL, 0); }
		public VariableTypesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variableTypes; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof JSBParserListener ) ((JSBParserListener)listener).enterVariableTypes(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof JSBParserListener ) ((JSBParserListener)listener).exitVariableTypes(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof JSBParserVisitor ) return ((JSBParserVisitor<? extends T>)visitor).visitVariableTypes(this);
			else return visitor.visitChildren(this);
		}
	}

	public final VariableTypesContext variableTypes() throws RecognitionException {
		VariableTypesContext _localctx = new VariableTypesContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_variableTypes);
		try {
			setState(149);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case INT:
				enterOuterAlt(_localctx, 1);
				{
				setState(146);
				match(INT);
				}
				break;
			case STRING_OPEN:
				enterOuterAlt(_localctx, 2);
				{
				setState(147);
				stringType();
				}
				break;
			case BOOL:
				enterOuterAlt(_localctx, 3);
				{
				setState(148);
				match(BOOL);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class StringTypeContext extends ParserRuleContext {
		public TerminalNode STRING_OPEN() { return getToken(JSBParser.STRING_OPEN, 0); }
		public TerminalNode STRING_CONTENT() { return getToken(JSBParser.STRING_CONTENT, 0); }
		public TerminalNode STRING_CLOSE() { return getToken(JSBParser.STRING_CLOSE, 0); }
		public StringTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stringType; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof JSBParserListener ) ((JSBParserListener)listener).enterStringType(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof JSBParserListener ) ((JSBParserListener)listener).exitStringType(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof JSBParserVisitor ) return ((JSBParserVisitor<? extends T>)visitor).visitStringType(this);
			else return visitor.visitChildren(this);
		}
	}

	public final StringTypeContext stringType() throws RecognitionException {
		StringTypeContext _localctx = new StringTypeContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_stringType);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(151);
			match(STRING_OPEN);
			setState(152);
			match(STRING_CONTENT);
			setState(153);
			match(STRING_CLOSE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TextContentContext extends ParserRuleContext {
		public TerminalNode TEXT() { return getToken(JSBParser.TEXT, 0); }
		public TextContentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_textContent; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof JSBParserListener ) ((JSBParserListener)listener).enterTextContent(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof JSBParserListener ) ((JSBParserListener)listener).exitTextContent(this);
		}
		@Override
		public <T> T accept(ParseTreeVisitor<? extends T> visitor) {
			if ( visitor instanceof JSBParserVisitor ) return ((JSBParserVisitor<? extends T>)visitor).visitTextContent(this);
			else return visitor.visitChildren(this);
		}
	}

	public final TextContentContext textContent() throws RecognitionException {
		TextContentContext _localctx = new TextContentContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_textContent);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(155);
			match(TEXT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\u0004\u00013\u009e\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b\u0002"+
		"\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002\u000f\u0007\u000f"+
		"\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011\u0002\u0012\u0007\u0012"+
		"\u0001\u0000\u0003\u0000(\b\u0000\u0001\u0000\u0003\u0000+\b\u0000\u0001"+
		"\u0000\u0003\u0000.\b\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0001"+
		"\u0001\u0005\u00014\b\u0001\n\u0001\f\u00017\t\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0002\u0001\u0002\u0003\u0002=\b\u0002\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0005\u0001"+
		"\u0005\u0001\u0005\u0001\u0005\u0001\u0006\u0005\u0006P\b\u0006\n\u0006"+
		"\f\u0006S\t\u0006\u0001\u0007\u0001\u0007\u0005\u0007W\b\u0007\n\u0007"+
		"\f\u0007Z\t\u0007\u0001\u0007\u0001\u0007\u0001\b\u0001\b\u0001\t\u0001"+
		"\t\u0001\t\u0001\t\u0003\td\b\t\u0001\t\u0001\t\u0001\n\u0001\n\u0001"+
		"\u000b\u0001\u000b\u0001\u000b\u0005\u000bm\b\u000b\n\u000b\f\u000bp\t"+
		"\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001"+
		"\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0003\u000b{\b\u000b\u0001"+
		"\f\u0001\f\u0001\f\u0005\f\u0080\b\f\n\f\f\f\u0083\t\f\u0001\r\u0001\r"+
		"\u0001\r\u0001\r\u0003\r\u0089\b\r\u0001\u000e\u0001\u000e\u0001\u000e"+
		"\u0001\u000e\u0001\u000f\u0001\u000f\u0003\u000f\u0091\b\u000f\u0001\u0010"+
		"\u0001\u0010\u0001\u0010\u0003\u0010\u0096\b\u0010\u0001\u0011\u0001\u0011"+
		"\u0001\u0011\u0001\u0011\u0001\u0012\u0001\u0012\u0001\u0012\u0000\u0000"+
		"\u0013\u0000\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018"+
		"\u001a\u001c\u001e \"$\u0000\u0000\u009b\u0000\'\u0001\u0000\u0000\u0000"+
		"\u00021\u0001\u0000\u0000\u0000\u0004<\u0001\u0000\u0000\u0000\u0006>"+
		"\u0001\u0000\u0000\u0000\bE\u0001\u0000\u0000\u0000\nJ\u0001\u0000\u0000"+
		"\u0000\fQ\u0001\u0000\u0000\u0000\u000eT\u0001\u0000\u0000\u0000\u0010"+
		"]\u0001\u0000\u0000\u0000\u0012_\u0001\u0000\u0000\u0000\u0014g\u0001"+
		"\u0000\u0000\u0000\u0016i\u0001\u0000\u0000\u0000\u0018\u0081\u0001\u0000"+
		"\u0000\u0000\u001a\u0084\u0001\u0000\u0000\u0000\u001c\u008a\u0001\u0000"+
		"\u0000\u0000\u001e\u0090\u0001\u0000\u0000\u0000 \u0095\u0001\u0000\u0000"+
		"\u0000\"\u0097\u0001\u0000\u0000\u0000$\u009b\u0001\u0000\u0000\u0000"+
		"&(\u0003\u0002\u0001\u0000\'&\u0001\u0000\u0000\u0000\'(\u0001\u0000\u0000"+
		"\u0000(*\u0001\u0000\u0000\u0000)+\u0003\n\u0005\u0000*)\u0001\u0000\u0000"+
		"\u0000*+\u0001\u0000\u0000\u0000+-\u0001\u0000\u0000\u0000,.\u0003\u000e"+
		"\u0007\u0000-,\u0001\u0000\u0000\u0000-.\u0001\u0000\u0000\u0000./\u0001"+
		"\u0000\u0000\u0000/0\u0003\u0016\u000b\u00000\u0001\u0001\u0000\u0000"+
		"\u000015\u0005\u0007\u0000\u000024\u0003\u0004\u0002\u000032\u0001\u0000"+
		"\u0000\u000047\u0001\u0000\u0000\u000053\u0001\u0000\u0000\u000056\u0001"+
		"\u0000\u0000\u000068\u0001\u0000\u0000\u000075\u0001\u0000\u0000\u0000"+
		"89\u0005!\u0000\u00009\u0003\u0001\u0000\u0000\u0000:=\u0003\u0006\u0003"+
		"\u0000;=\u0003\b\u0004\u0000<:\u0001\u0000\u0000\u0000<;\u0001\u0000\u0000"+
		"\u0000=\u0005\u0001\u0000\u0000\u0000>?\u0005\u001d\u0000\u0000?@\u0005"+
		"\u001c\u0000\u0000@A\u0005\u001e\u0000\u0000AB\u0005/\u0000\u0000BC\u0005"+
		"0\u0000\u0000CD\u0005\u001f\u0000\u0000D\u0007\u0001\u0000\u0000\u0000"+
		"EF\u0005\u001e\u0000\u0000FG\u0005/\u0000\u0000GH\u00050\u0000\u0000H"+
		"I\u0005\u001f\u0000\u0000I\t\u0001\u0000\u0000\u0000JK\u0005\b\u0000\u0000"+
		"KL\u0003\f\u0006\u0000LM\u0005#\u0000\u0000M\u000b\u0001\u0000\u0000\u0000"+
		"NP\u0003\u0012\t\u0000ON\u0001\u0000\u0000\u0000PS\u0001\u0000\u0000\u0000"+
		"QO\u0001\u0000\u0000\u0000QR\u0001\u0000\u0000\u0000R\r\u0001\u0000\u0000"+
		"\u0000SQ\u0001\u0000\u0000\u0000TX\u0005\t\u0000\u0000UW\u0003\u0010\b"+
		"\u0000VU\u0001\u0000\u0000\u0000WZ\u0001\u0000\u0000\u0000XV\u0001\u0000"+
		"\u0000\u0000XY\u0001\u0000\u0000\u0000Y[\u0001\u0000\u0000\u0000ZX\u0001"+
		"\u0000\u0000\u0000[\\\u0005&\u0000\u0000\\\u000f\u0001\u0000\u0000\u0000"+
		"]^\u0003\u0012\t\u0000^\u0011\u0001\u0000\u0000\u0000_`\u0005\u0016\u0000"+
		"\u0000`c\u0005\u001b\u0000\u0000ab\u0005\u0017\u0000\u0000bd\u0003\u0014"+
		"\n\u0000ca\u0001\u0000\u0000\u0000cd\u0001\u0000\u0000\u0000de\u0001\u0000"+
		"\u0000\u0000ef\u0005\u0018\u0000\u0000f\u0013\u0001\u0000\u0000\u0000"+
		"gh\u0003 \u0010\u0000h\u0015\u0001\u0000\u0000\u0000ij\u0005\u001a\u0000"+
		"\u0000jn\u0005\u001b\u0000\u0000km\u0003\u001a\r\u0000lk\u0001\u0000\u0000"+
		"\u0000mp\u0001\u0000\u0000\u0000nl\u0001\u0000\u0000\u0000no\u0001\u0000"+
		"\u0000\u0000oz\u0001\u0000\u0000\u0000pn\u0001\u0000\u0000\u0000qr\u0005"+
		",\u0000\u0000rs\u0003\u0018\f\u0000st\u0005\u001a\u0000\u0000tu\u0005"+
		"\u0019\u0000\u0000uv\u0005\u001b\u0000\u0000vw\u0005,\u0000\u0000w{\u0001"+
		"\u0000\u0000\u0000xy\u0005\u0019\u0000\u0000y{\u0005,\u0000\u0000zq\u0001"+
		"\u0000\u0000\u0000zx\u0001\u0000\u0000\u0000{\u0017\u0001\u0000\u0000"+
		"\u0000|\u0080\u0003\u0016\u000b\u0000}\u0080\u0003\u001c\u000e\u0000~"+
		"\u0080\u0003$\u0012\u0000\u007f|\u0001\u0000\u0000\u0000\u007f}\u0001"+
		"\u0000\u0000\u0000\u007f~\u0001\u0000\u0000\u0000\u0080\u0083\u0001\u0000"+
		"\u0000\u0000\u0081\u007f\u0001\u0000\u0000\u0000\u0081\u0082\u0001\u0000"+
		"\u0000\u0000\u0082\u0019\u0001\u0000\u0000\u0000\u0083\u0081\u0001\u0000"+
		"\u0000\u0000\u0084\u0085\u0005\u001b\u0000\u0000\u0085\u0088\u0005\u0017"+
		"\u0000\u0000\u0086\u0089\u0003\u001c\u000e\u0000\u0087\u0089\u0003\"\u0011"+
		"\u0000\u0088\u0086\u0001\u0000\u0000\u0000\u0088\u0087\u0001\u0000\u0000"+
		"\u0000\u0089\u001b\u0001\u0000\u0000\u0000\u008a\u008b\u0005\u000b\u0000"+
		"\u0000\u008b\u008c\u0003\u001e\u000f\u0000\u008c\u008d\u0005\f\u0000\u0000"+
		"\u008d\u001d\u0001\u0000\u0000\u0000\u008e\u0091\u0003 \u0010\u0000\u008f"+
		"\u0091\u0005\u001b\u0000\u0000\u0090\u008e\u0001\u0000\u0000\u0000\u0090"+
		"\u008f\u0001\u0000\u0000\u0000\u0091\u001f\u0001\u0000\u0000\u0000\u0092"+
		"\u0096\u0005\u000e\u0000\u0000\u0093\u0096\u0003\"\u0011\u0000\u0094\u0096"+
		"\u0005\n\u0000\u0000\u0095\u0092\u0001\u0000\u0000\u0000\u0095\u0093\u0001"+
		"\u0000\u0000\u0000\u0095\u0094\u0001\u0000\u0000\u0000\u0096!\u0001\u0000"+
		"\u0000\u0000\u0097\u0098\u0005\u000f\u0000\u0000\u0098\u0099\u0005/\u0000"+
		"\u0000\u0099\u009a\u00050\u0000\u0000\u009a#\u0001\u0000\u0000\u0000\u009b"+
		"\u009c\u00051\u0000\u0000\u009c%\u0001\u0000\u0000\u0000\u000f\'*-5<Q"+
		"Xcnz\u007f\u0081\u0088\u0090\u0095";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}