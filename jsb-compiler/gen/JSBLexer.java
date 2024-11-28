// Generated from /Users/lukcallens/Documents/julien.callens/jsb-compiler/src/g4/JSBLexer.g4 by ANTLR 4.13.2
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class JSBLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.13.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		WS=1, EMBEDDED_OPEN=2, EMBEDDED_CLOSE=3, FUNC_ARGS_OPEN=4, FUNC_ARGS_CLOSE=5, 
		FUNC_ARGS_SEPARATOR=6, INT=7, BOOL=8, STRING_OPEN=9, NAME=10, EQUALS=11, 
		TAG_OPEN=12, TAG_CLOSE=13, SLASH=14, TAG_SLASH_CLOSE=15, STRING_CONTENT=16, 
		STRING_CLOSE=17, POP_TAG=18, POP_EMBEDDED=19, TEXT=20;
	public static final int
		STRING=1, CONTENT=2;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE", "STRING", "CONTENT"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"WS", "EMBEDDED_OPEN", "EMBEDDED_CLOSE", "FUNC_ARGS_OPEN", "FUNC_ARGS_CLOSE", 
			"FUNC_ARGS_SEPARATOR", "INT", "BOOL", "STRING_OPEN", "NAME", "EQUALS", 
			"STRING_WRAPPER", "LBRACE", "RBRACE", "LPAREN", "RPAREN", "COMMA", "SEMICOLON", 
			"QUOTE", "DOUBLE_QUOTE", "NUMBER", "LETTER", "TAG_OPEN", "TAG_CLOSE", 
			"SLASH", "TAG_SLASH_CLOSE", "STRING_CONTENT", "STRING_CLOSE", "POP_TAG", 
			"POP_EMBEDDED", "TEXT"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, "'='", 
			"'<'", "'>'", "'/'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "WS", "EMBEDDED_OPEN", "EMBEDDED_CLOSE", "FUNC_ARGS_OPEN", "FUNC_ARGS_CLOSE", 
			"FUNC_ARGS_SEPARATOR", "INT", "BOOL", "STRING_OPEN", "NAME", "EQUALS", 
			"TAG_OPEN", "TAG_CLOSE", "SLASH", "TAG_SLASH_CLOSE", "STRING_CONTENT", 
			"STRING_CLOSE", "POP_TAG", "POP_EMBEDDED", "TEXT"
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


	public JSBLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "JSBLexer.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\u0004\u0000\u0014\u00b6\u0006\uffff\uffff\u0006\uffff\uffff\u0006\uffff"+
		"\uffff\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002\u0002\u0007"+
		"\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002\u0005\u0007"+
		"\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002\b\u0007\b"+
		"\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b\u0002\f\u0007"+
		"\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002\u000f\u0007\u000f\u0002"+
		"\u0010\u0007\u0010\u0002\u0011\u0007\u0011\u0002\u0012\u0007\u0012\u0002"+
		"\u0013\u0007\u0013\u0002\u0014\u0007\u0014\u0002\u0015\u0007\u0015\u0002"+
		"\u0016\u0007\u0016\u0002\u0017\u0007\u0017\u0002\u0018\u0007\u0018\u0002"+
		"\u0019\u0007\u0019\u0002\u001a\u0007\u001a\u0002\u001b\u0007\u001b\u0002"+
		"\u001c\u0007\u001c\u0002\u001d\u0007\u001d\u0002\u001e\u0007\u001e\u0001"+
		"\u0000\u0004\u0000C\b\u0000\u000b\u0000\f\u0000D\u0001\u0000\u0001\u0000"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0002\u0001\u0002\u0001\u0002"+
		"\u0001\u0002\u0001\u0002\u0001\u0003\u0001\u0003\u0001\u0004\u0001\u0004"+
		"\u0001\u0005\u0001\u0005\u0001\u0006\u0004\u0006X\b\u0006\u000b\u0006"+
		"\f\u0006Y\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007"+
		"\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0003\u0007e\b\u0007"+
		"\u0001\b\u0001\b\u0001\b\u0001\b\u0001\t\u0001\t\u0001\t\u0005\tn\b\t"+
		"\n\t\f\tq\t\t\u0001\n\u0001\n\u0001\u000b\u0001\u000b\u0003\u000bw\b\u000b"+
		"\u0001\f\u0001\f\u0001\r\u0001\r\u0001\u000e\u0001\u000e\u0001\u000f\u0001"+
		"\u000f\u0001\u0010\u0001\u0010\u0001\u0011\u0001\u0011\u0001\u0012\u0001"+
		"\u0012\u0001\u0013\u0001\u0013\u0001\u0014\u0004\u0014\u008a\b\u0014\u000b"+
		"\u0014\f\u0014\u008b\u0001\u0015\u0001\u0015\u0001\u0016\u0001\u0016\u0001"+
		"\u0017\u0001\u0017\u0001\u0017\u0001\u0017\u0001\u0018\u0001\u0018\u0001"+
		"\u0019\u0001\u0019\u0001\u0019\u0001\u001a\u0005\u001a\u009c\b\u001a\n"+
		"\u001a\f\u001a\u009f\t\u001a\u0001\u001b\u0001\u001b\u0001\u001b\u0001"+
		"\u001b\u0001\u001c\u0001\u001c\u0001\u001c\u0003\u001c\u00a8\b\u001c\u0001"+
		"\u001c\u0001\u001c\u0001\u001d\u0001\u001d\u0003\u001d\u00ae\b\u001d\u0001"+
		"\u001d\u0001\u001d\u0001\u001e\u0004\u001e\u00b3\b\u001e\u000b\u001e\f"+
		"\u001e\u00b4\u0000\u0000\u001f\u0003\u0001\u0005\u0002\u0007\u0003\t\u0004"+
		"\u000b\u0005\r\u0006\u000f\u0007\u0011\b\u0013\t\u0015\n\u0017\u000b\u0019"+
		"\u0000\u001b\u0000\u001d\u0000\u001f\u0000!\u0000#\u0000%\u0000\'\u0000"+
		")\u0000+\u0000-\u0000/\f1\r3\u000e5\u000f7\u00109\u0011;\u0012=\u0013"+
		"?\u0014\u0003\u0000\u0001\u0002\u0005\u0003\u0000\t\n\r\r  \u0001\u0000"+
		"09\u0002\u0000AZaz\u0002\u0000\"\"\'\'\u0002\u0000<<{{\u00b4\u0000\u0003"+
		"\u0001\u0000\u0000\u0000\u0000\u0005\u0001\u0000\u0000\u0000\u0000\u0007"+
		"\u0001\u0000\u0000\u0000\u0000\t\u0001\u0000\u0000\u0000\u0000\u000b\u0001"+
		"\u0000\u0000\u0000\u0000\r\u0001\u0000\u0000\u0000\u0000\u000f\u0001\u0000"+
		"\u0000\u0000\u0000\u0011\u0001\u0000\u0000\u0000\u0000\u0013\u0001\u0000"+
		"\u0000\u0000\u0000\u0015\u0001\u0000\u0000\u0000\u0000\u0017\u0001\u0000"+
		"\u0000\u0000\u0000/\u0001\u0000\u0000\u0000\u00001\u0001\u0000\u0000\u0000"+
		"\u00003\u0001\u0000\u0000\u0000\u00005\u0001\u0000\u0000\u0000\u00017"+
		"\u0001\u0000\u0000\u0000\u00019\u0001\u0000\u0000\u0000\u0002;\u0001\u0000"+
		"\u0000\u0000\u0002=\u0001\u0000\u0000\u0000\u0002?\u0001\u0000\u0000\u0000"+
		"\u0003B\u0001\u0000\u0000\u0000\u0005H\u0001\u0000\u0000\u0000\u0007K"+
		"\u0001\u0000\u0000\u0000\tP\u0001\u0000\u0000\u0000\u000bR\u0001\u0000"+
		"\u0000\u0000\rT\u0001\u0000\u0000\u0000\u000fW\u0001\u0000\u0000\u0000"+
		"\u0011d\u0001\u0000\u0000\u0000\u0013f\u0001\u0000\u0000\u0000\u0015j"+
		"\u0001\u0000\u0000\u0000\u0017r\u0001\u0000\u0000\u0000\u0019v\u0001\u0000"+
		"\u0000\u0000\u001bx\u0001\u0000\u0000\u0000\u001dz\u0001\u0000\u0000\u0000"+
		"\u001f|\u0001\u0000\u0000\u0000!~\u0001\u0000\u0000\u0000#\u0080\u0001"+
		"\u0000\u0000\u0000%\u0082\u0001\u0000\u0000\u0000\'\u0084\u0001\u0000"+
		"\u0000\u0000)\u0086\u0001\u0000\u0000\u0000+\u0089\u0001\u0000\u0000\u0000"+
		"-\u008d\u0001\u0000\u0000\u0000/\u008f\u0001\u0000\u0000\u00001\u0091"+
		"\u0001\u0000\u0000\u00003\u0095\u0001\u0000\u0000\u00005\u0097\u0001\u0000"+
		"\u0000\u00007\u009d\u0001\u0000\u0000\u00009\u00a0\u0001\u0000\u0000\u0000"+
		";\u00a7\u0001\u0000\u0000\u0000=\u00ad\u0001\u0000\u0000\u0000?\u00b2"+
		"\u0001\u0000\u0000\u0000AC\u0007\u0000\u0000\u0000BA\u0001\u0000\u0000"+
		"\u0000CD\u0001\u0000\u0000\u0000DB\u0001\u0000\u0000\u0000DE\u0001\u0000"+
		"\u0000\u0000EF\u0001\u0000\u0000\u0000FG\u0006\u0000\u0000\u0000G\u0004"+
		"\u0001\u0000\u0000\u0000HI\u0003\u001b\f\u0000IJ\u0003\u001b\f\u0000J"+
		"\u0006\u0001\u0000\u0000\u0000KL\u0003\u001d\r\u0000LM\u0003\u001d\r\u0000"+
		"MN\u0001\u0000\u0000\u0000NO\u0006\u0002\u0001\u0000O\b\u0001\u0000\u0000"+
		"\u0000PQ\u0003\u001f\u000e\u0000Q\n\u0001\u0000\u0000\u0000RS\u0003!\u000f"+
		"\u0000S\f\u0001\u0000\u0000\u0000TU\u0003#\u0010\u0000U\u000e\u0001\u0000"+
		"\u0000\u0000VX\u0007\u0001\u0000\u0000WV\u0001\u0000\u0000\u0000XY\u0001"+
		"\u0000\u0000\u0000YW\u0001\u0000\u0000\u0000YZ\u0001\u0000\u0000\u0000"+
		"Z\u0010\u0001\u0000\u0000\u0000[\\\u0005t\u0000\u0000\\]\u0005r\u0000"+
		"\u0000]^\u0005u\u0000\u0000^e\u0005e\u0000\u0000_`\u0005f\u0000\u0000"+
		"`a\u0005a\u0000\u0000ab\u0005l\u0000\u0000bc\u0005s\u0000\u0000ce\u0005"+
		"e\u0000\u0000d[\u0001\u0000\u0000\u0000d_\u0001\u0000\u0000\u0000e\u0012"+
		"\u0001\u0000\u0000\u0000fg\u0003\u0019\u000b\u0000gh\u0001\u0000\u0000"+
		"\u0000hi\u0006\b\u0002\u0000i\u0014\u0001\u0000\u0000\u0000jo\u0003-\u0015"+
		"\u0000kn\u0003-\u0015\u0000ln\u0003+\u0014\u0000mk\u0001\u0000\u0000\u0000"+
		"ml\u0001\u0000\u0000\u0000nq\u0001\u0000\u0000\u0000om\u0001\u0000\u0000"+
		"\u0000op\u0001\u0000\u0000\u0000p\u0016\u0001\u0000\u0000\u0000qo\u0001"+
		"\u0000\u0000\u0000rs\u0005=\u0000\u0000s\u0018\u0001\u0000\u0000\u0000"+
		"tw\u0003\'\u0012\u0000uw\u0003)\u0013\u0000vt\u0001\u0000\u0000\u0000"+
		"vu\u0001\u0000\u0000\u0000w\u001a\u0001\u0000\u0000\u0000xy\u0005{\u0000"+
		"\u0000y\u001c\u0001\u0000\u0000\u0000z{\u0005}\u0000\u0000{\u001e\u0001"+
		"\u0000\u0000\u0000|}\u0005(\u0000\u0000} \u0001\u0000\u0000\u0000~\u007f"+
		"\u0005)\u0000\u0000\u007f\"\u0001\u0000\u0000\u0000\u0080\u0081\u0005"+
		",\u0000\u0000\u0081$\u0001\u0000\u0000\u0000\u0082\u0083\u0005;\u0000"+
		"\u0000\u0083&\u0001\u0000\u0000\u0000\u0084\u0085\u0005\'\u0000\u0000"+
		"\u0085(\u0001\u0000\u0000\u0000\u0086\u0087\u0005\"\u0000\u0000\u0087"+
		"*\u0001\u0000\u0000\u0000\u0088\u008a\u0007\u0001\u0000\u0000\u0089\u0088"+
		"\u0001\u0000\u0000\u0000\u008a\u008b\u0001\u0000\u0000\u0000\u008b\u0089"+
		"\u0001\u0000\u0000\u0000\u008b\u008c\u0001\u0000\u0000\u0000\u008c,\u0001"+
		"\u0000\u0000\u0000\u008d\u008e\u0007\u0002\u0000\u0000\u008e.\u0001\u0000"+
		"\u0000\u0000\u008f\u0090\u0005<\u0000\u0000\u00900\u0001\u0000\u0000\u0000"+
		"\u0091\u0092\u0005>\u0000\u0000\u0092\u0093\u0001\u0000\u0000\u0000\u0093"+
		"\u0094\u0006\u0017\u0001\u0000\u00942\u0001\u0000\u0000\u0000\u0095\u0096"+
		"\u0005/\u0000\u0000\u00964\u0001\u0000\u0000\u0000\u0097\u0098\u00033"+
		"\u0018\u0000\u0098\u0099\u00031\u0017\u0000\u00996\u0001\u0000\u0000\u0000"+
		"\u009a\u009c\b\u0003\u0000\u0000\u009b\u009a\u0001\u0000\u0000\u0000\u009c"+
		"\u009f\u0001\u0000\u0000\u0000\u009d\u009b\u0001\u0000\u0000\u0000\u009d"+
		"\u009e\u0001\u0000\u0000\u0000\u009e8\u0001\u0000\u0000\u0000\u009f\u009d"+
		"\u0001\u0000\u0000\u0000\u00a0\u00a1\u0003\u0013\b\u0000\u00a1\u00a2\u0001"+
		"\u0000\u0000\u0000\u00a2\u00a3\u0006\u001b\u0003\u0000\u00a3:\u0001\u0000"+
		"\u0000\u0000\u00a4\u00a8\u0003/\u0016\u0000\u00a5\u00a8\u00031\u0017\u0000"+
		"\u00a6\u00a8\u00035\u0019\u0000\u00a7\u00a4\u0001\u0000\u0000\u0000\u00a7"+
		"\u00a5\u0001\u0000\u0000\u0000\u00a7\u00a6\u0001\u0000\u0000\u0000\u00a8"+
		"\u00a9\u0001\u0000\u0000\u0000\u00a9\u00aa\u0006\u001c\u0003\u0000\u00aa"+
		"<\u0001\u0000\u0000\u0000\u00ab\u00ae\u0003\u0005\u0001\u0000\u00ac\u00ae"+
		"\u0003\u0007\u0002\u0000\u00ad\u00ab\u0001\u0000\u0000\u0000\u00ad\u00ac"+
		"\u0001\u0000\u0000\u0000\u00ae\u00af\u0001\u0000\u0000\u0000\u00af\u00b0"+
		"\u0006\u001d\u0003\u0000\u00b0>\u0001\u0000\u0000\u0000\u00b1\u00b3\b"+
		"\u0004\u0000\u0000\u00b2\u00b1\u0001\u0000\u0000\u0000\u00b3\u00b4\u0001"+
		"\u0000\u0000\u0000\u00b4\u00b2\u0001\u0000\u0000\u0000\u00b4\u00b5\u0001"+
		"\u0000\u0000\u0000\u00b5@\u0001\u0000\u0000\u0000\u000e\u0000\u0001\u0002"+
		"DYdmov\u008b\u009d\u00a7\u00ad\u00b4\u0004\u0006\u0000\u0000\u0005\u0002"+
		"\u0000\u0005\u0001\u0000\u0004\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}