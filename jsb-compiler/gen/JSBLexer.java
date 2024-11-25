// Generated from C:/Users/julie/WebstormProjects/jsb/jsb-compiler/src/g4/JSBLexer.g4 by ANTLR 4.13.2
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
		TAG_OPEN=1, VAR_OPEN=2, ID=3, TEXT=4, QUOTE=5, SPACE=6, WS=7, TAG_CLOSE=8, 
		TAG_SLASH_CLOSE=9, ATTRIBUTE_EQUALS=10, TAG_SLASH=11, TAG_WS=12, TAG_NAME=13, 
		ATTRIBUTE_OPEN=14, ATTRIBUTE_VAR_OPEN=15, ATTRIBUTE_VALUE=16, ATTRIBUTE_SEPARATOR=17, 
		ATTRIBUTE_CLOSE=18, VAR_NAME=19, VAR_CLOSE=20, LPAREN=21, RPAREN=22, COMMA=23, 
		VAR_WS=24;
	public static final int
		TAG=1, ATTRIBUTE=2, VAR=3;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE", "TAG", "ATTRIBUTE", "VAR"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"TAG_OPEN", "VAR_OPEN", "ID", "TEXT", "QUOTE", "SPACE", "WS", "TAG_CLOSE", 
			"TAG_SLASH_CLOSE", "ATTRIBUTE_EQUALS", "TAG_SLASH", "TAG_WS", "TAG_NAME", 
			"ATTRIBUTE_OPEN", "ATTRIBUTE_VAR_OPEN", "ATTRIBUTE_VALUE", "ATTRIBUTE_SEPARATOR", 
			"ATTRIBUTE_CLOSE", "VAR_NAME", "VAR_CLOSE", "LPAREN", "RPAREN", "COMMA", 
			"VAR_WS"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'<'", "'{{'", null, null, null, "' '", null, "'>'", "'/>'", "'='", 
			"'/'", null, null, null, null, null, null, null, null, "'}}'", "'('", 
			"')'", "','"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "TAG_OPEN", "VAR_OPEN", "ID", "TEXT", "QUOTE", "SPACE", "WS", "TAG_CLOSE", 
			"TAG_SLASH_CLOSE", "ATTRIBUTE_EQUALS", "TAG_SLASH", "TAG_WS", "TAG_NAME", 
			"ATTRIBUTE_OPEN", "ATTRIBUTE_VAR_OPEN", "ATTRIBUTE_VALUE", "ATTRIBUTE_SEPARATOR", 
			"ATTRIBUTE_CLOSE", "VAR_NAME", "VAR_CLOSE", "LPAREN", "RPAREN", "COMMA", 
			"VAR_WS"
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
		"\u0004\u0000\u0018\u0088\u0006\uffff\uffff\u0006\uffff\uffff\u0006\uffff"+
		"\uffff\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001"+
		"\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004"+
		"\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007"+
		"\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b"+
		"\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002\u000f\u0007"+
		"\u000f\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011\u0002\u0012\u0007"+
		"\u0012\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014\u0002\u0015\u0007"+
		"\u0015\u0002\u0016\u0007\u0016\u0002\u0017\u0007\u0017\u0001\u0000\u0001"+
		"\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0002\u0001\u0002\u0005\u0002@\b\u0002\n\u0002"+
		"\f\u0002C\t\u0002\u0001\u0003\u0004\u0003F\b\u0003\u000b\u0003\f\u0003"+
		"G\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001\u0006\u0004\u0006"+
		"O\b\u0006\u000b\u0006\f\u0006P\u0001\u0006\u0001\u0006\u0001\u0007\u0001"+
		"\u0007\u0001\u0007\u0001\u0007\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b"+
		"\u0001\t\u0001\t\u0001\n\u0001\n\u0001\u000b\u0001\u000b\u0001\u000b\u0001"+
		"\u000b\u0001\f\u0001\f\u0001\r\u0001\r\u0001\r\u0001\r\u0001\u000e\u0001"+
		"\u000e\u0001\u000e\u0001\u000e\u0001\u000f\u0001\u000f\u0001\u0010\u0001"+
		"\u0010\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0012\u0001"+
		"\u0012\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0013\u0001"+
		"\u0014\u0001\u0014\u0001\u0015\u0001\u0015\u0001\u0016\u0001\u0016\u0001"+
		"\u0017\u0001\u0017\u0001\u0017\u0001\u0017\u0000\u0000\u0018\u0004\u0001"+
		"\u0006\u0002\b\u0003\n\u0004\f\u0005\u000e\u0006\u0010\u0007\u0012\b\u0014"+
		"\t\u0016\n\u0018\u000b\u001a\f\u001c\r\u001e\u000e \u000f\"\u0010$\u0011"+
		"&\u0012(\u0013*\u0014,\u0015.\u00160\u00172\u0018\u0004\u0000\u0001\u0002"+
		"\u0003\u0005\u0003\u0000AZ__az\u0005\u0000--09AZ__az\u0001\u0000<<\u0001"+
		"\u0000\'\'\u0003\u0000\t\n\r\r  \u0087\u0000\u0004\u0001\u0000\u0000\u0000"+
		"\u0000\u0006\u0001\u0000\u0000\u0000\u0000\b\u0001\u0000\u0000\u0000\u0000"+
		"\n\u0001\u0000\u0000\u0000\u0000\f\u0001\u0000\u0000\u0000\u0000\u000e"+
		"\u0001\u0000\u0000\u0000\u0000\u0010\u0001\u0000\u0000\u0000\u0001\u0012"+
		"\u0001\u0000\u0000\u0000\u0001\u0014\u0001\u0000\u0000\u0000\u0001\u0016"+
		"\u0001\u0000\u0000\u0000\u0001\u0018\u0001\u0000\u0000\u0000\u0001\u001a"+
		"\u0001\u0000\u0000\u0000\u0001\u001c\u0001\u0000\u0000\u0000\u0001\u001e"+
		"\u0001\u0000\u0000\u0000\u0001 \u0001\u0000\u0000\u0000\u0002\"\u0001"+
		"\u0000\u0000\u0000\u0002$\u0001\u0000\u0000\u0000\u0002&\u0001\u0000\u0000"+
		"\u0000\u0003(\u0001\u0000\u0000\u0000\u0003*\u0001\u0000\u0000\u0000\u0003"+
		",\u0001\u0000\u0000\u0000\u0003.\u0001\u0000\u0000\u0000\u00030\u0001"+
		"\u0000\u0000\u0000\u00032\u0001\u0000\u0000\u0000\u00044\u0001\u0000\u0000"+
		"\u0000\u00068\u0001\u0000\u0000\u0000\b=\u0001\u0000\u0000\u0000\nE\u0001"+
		"\u0000\u0000\u0000\fI\u0001\u0000\u0000\u0000\u000eK\u0001\u0000\u0000"+
		"\u0000\u0010N\u0001\u0000\u0000\u0000\u0012T\u0001\u0000\u0000\u0000\u0014"+
		"X\u0001\u0000\u0000\u0000\u0016]\u0001\u0000\u0000\u0000\u0018_\u0001"+
		"\u0000\u0000\u0000\u001aa\u0001\u0000\u0000\u0000\u001ce\u0001\u0000\u0000"+
		"\u0000\u001eg\u0001\u0000\u0000\u0000 k\u0001\u0000\u0000\u0000\"o\u0001"+
		"\u0000\u0000\u0000$q\u0001\u0000\u0000\u0000&s\u0001\u0000\u0000\u0000"+
		"(w\u0001\u0000\u0000\u0000*y\u0001\u0000\u0000\u0000,~\u0001\u0000\u0000"+
		"\u0000.\u0080\u0001\u0000\u0000\u00000\u0082\u0001\u0000\u0000\u00002"+
		"\u0084\u0001\u0000\u0000\u000045\u0005<\u0000\u000056\u0001\u0000\u0000"+
		"\u000067\u0006\u0000\u0000\u00007\u0005\u0001\u0000\u0000\u000089\u0005"+
		"{\u0000\u00009:\u0005{\u0000\u0000:;\u0001\u0000\u0000\u0000;<\u0006\u0001"+
		"\u0001\u0000<\u0007\u0001\u0000\u0000\u0000=A\u0007\u0000\u0000\u0000"+
		">@\u0007\u0001\u0000\u0000?>\u0001\u0000\u0000\u0000@C\u0001\u0000\u0000"+
		"\u0000A?\u0001\u0000\u0000\u0000AB\u0001\u0000\u0000\u0000B\t\u0001\u0000"+
		"\u0000\u0000CA\u0001\u0000\u0000\u0000DF\b\u0002\u0000\u0000ED\u0001\u0000"+
		"\u0000\u0000FG\u0001\u0000\u0000\u0000GE\u0001\u0000\u0000\u0000GH\u0001"+
		"\u0000\u0000\u0000H\u000b\u0001\u0000\u0000\u0000IJ\u0007\u0003\u0000"+
		"\u0000J\r\u0001\u0000\u0000\u0000KL\u0005 \u0000\u0000L\u000f\u0001\u0000"+
		"\u0000\u0000MO\u0007\u0004\u0000\u0000NM\u0001\u0000\u0000\u0000OP\u0001"+
		"\u0000\u0000\u0000PN\u0001\u0000\u0000\u0000PQ\u0001\u0000\u0000\u0000"+
		"QR\u0001\u0000\u0000\u0000RS\u0006\u0006\u0002\u0000S\u0011\u0001\u0000"+
		"\u0000\u0000TU\u0005>\u0000\u0000UV\u0001\u0000\u0000\u0000VW\u0006\u0007"+
		"\u0003\u0000W\u0013\u0001\u0000\u0000\u0000XY\u0005/\u0000\u0000YZ\u0005"+
		">\u0000\u0000Z[\u0001\u0000\u0000\u0000[\\\u0006\b\u0003\u0000\\\u0015"+
		"\u0001\u0000\u0000\u0000]^\u0005=\u0000\u0000^\u0017\u0001\u0000\u0000"+
		"\u0000_`\u0005/\u0000\u0000`\u0019\u0001\u0000\u0000\u0000ab\u0003\u0010"+
		"\u0006\u0000bc\u0001\u0000\u0000\u0000cd\u0006\u000b\u0002\u0000d\u001b"+
		"\u0001\u0000\u0000\u0000ef\u0003\b\u0002\u0000f\u001d\u0001\u0000\u0000"+
		"\u0000gh\u0003\f\u0004\u0000hi\u0001\u0000\u0000\u0000ij\u0006\r\u0004"+
		"\u0000j\u001f\u0001\u0000\u0000\u0000kl\u0003\u0006\u0001\u0000lm\u0001"+
		"\u0000\u0000\u0000mn\u0006\u000e\u0001\u0000n!\u0001\u0000\u0000\u0000"+
		"op\u0003\b\u0002\u0000p#\u0001\u0000\u0000\u0000qr\u0003\u000e\u0005\u0000"+
		"r%\u0001\u0000\u0000\u0000st\u0003\f\u0004\u0000tu\u0001\u0000\u0000\u0000"+
		"uv\u0006\u0011\u0003\u0000v\'\u0001\u0000\u0000\u0000wx\u0003\b\u0002"+
		"\u0000x)\u0001\u0000\u0000\u0000yz\u0005}\u0000\u0000z{\u0005}\u0000\u0000"+
		"{|\u0001\u0000\u0000\u0000|}\u0006\u0013\u0003\u0000}+\u0001\u0000\u0000"+
		"\u0000~\u007f\u0005(\u0000\u0000\u007f-\u0001\u0000\u0000\u0000\u0080"+
		"\u0081\u0005)\u0000\u0000\u0081/\u0001\u0000\u0000\u0000\u0082\u0083\u0005"+
		",\u0000\u0000\u00831\u0001\u0000\u0000\u0000\u0084\u0085\u0003\u0010\u0006"+
		"\u0000\u0085\u0086\u0001\u0000\u0000\u0000\u0086\u0087\u0006\u0017\u0002"+
		"\u0000\u00873\u0001\u0000\u0000\u0000\u0007\u0000\u0001\u0002\u0003AG"+
		"P\u0005\u0005\u0001\u0000\u0005\u0003\u0000\u0006\u0000\u0000\u0004\u0000"+
		"\u0000\u0005\u0002\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}