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
		WS=1, TEXT=2, ID=3, TAG_OPEN=4, VAR_OPEN=5, TAG_CLOSE=6, TAG_SLASH_CLOSE=7, 
		ATTRIBUTE_EQUALS=8, TAG_SLASH=9, TAG_WS=10, TAG_NAME=11, ATTRIBUTE_VALUE=12, 
		ATTRIBUTE_VAR_OPEN=13, VAR_NAME=14, VAR_CLOSE=15, LPAREN=16, RPAREN=17, 
		COMMA=18, VAR_WS=19;
	public static final int
		INSIDE_TAG=1, INSIDE_VAR=2;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE", "INSIDE_TAG", "INSIDE_VAR"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"WS", "TEXT", "ID", "TAG_OPEN", "VAR_OPEN", "TAG_CLOSE", "TAG_SLASH_CLOSE", 
			"ATTRIBUTE_EQUALS", "TAG_SLASH", "TAG_WS", "TAG_NAME", "ATTRIBUTE_VALUE", 
			"ATTRIBUTE_VAR_OPEN", "VAR_NAME", "VAR_CLOSE", "LPAREN", "RPAREN", "COMMA", 
			"VAR_WS"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, null, null, "'<'", "'{{'", "'>'", "'/>'", "'='", "'/'", null, 
			null, null, null, null, "'}}'", "'('", "')'", "','"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "WS", "TEXT", "ID", "TAG_OPEN", "VAR_OPEN", "TAG_CLOSE", "TAG_SLASH_CLOSE", 
			"ATTRIBUTE_EQUALS", "TAG_SLASH", "TAG_WS", "TAG_NAME", "ATTRIBUTE_VALUE", 
			"ATTRIBUTE_VAR_OPEN", "VAR_NAME", "VAR_CLOSE", "LPAREN", "RPAREN", "COMMA", 
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
		"\u0004\u0000\u0013w\u0006\uffff\uffff\u0006\uffff\uffff\u0006\uffff\uffff"+
		"\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002\u0002\u0007\u0002"+
		"\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002\u0005\u0007\u0005"+
		"\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002\b\u0007\b\u0002"+
		"\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b\u0002\f\u0007\f\u0002"+
		"\r\u0007\r\u0002\u000e\u0007\u000e\u0002\u000f\u0007\u000f\u0002\u0010"+
		"\u0007\u0010\u0002\u0011\u0007\u0011\u0002\u0012\u0007\u0012\u0001\u0000"+
		"\u0004\u0000+\b\u0000\u000b\u0000\f\u0000,\u0001\u0000\u0001\u0000\u0001"+
		"\u0001\u0004\u00012\b\u0001\u000b\u0001\f\u00013\u0001\u0002\u0001\u0002"+
		"\u0005\u00028\b\u0002\n\u0002\f\u0002;\t\u0002\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004"+
		"\u0001\u0004\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0006"+
		"\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0007\u0001\u0007"+
		"\u0001\b\u0001\b\u0001\t\u0001\t\u0001\t\u0001\t\u0001\n\u0001\n\u0001"+
		"\u000b\u0001\u000b\u0001\u000b\u0005\u000b\\\b\u000b\n\u000b\f\u000b_"+
		"\t\u000b\u0001\u000b\u0001\u000b\u0001\f\u0001\f\u0001\f\u0001\f\u0001"+
		"\r\u0001\r\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e"+
		"\u0001\u000f\u0001\u000f\u0001\u0010\u0001\u0010\u0001\u0011\u0001\u0011"+
		"\u0001\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0000\u0000\u0013\u0003"+
		"\u0001\u0005\u0002\u0007\u0003\t\u0004\u000b\u0005\r\u0006\u000f\u0007"+
		"\u0011\b\u0013\t\u0015\n\u0017\u000b\u0019\f\u001b\r\u001d\u000e\u001f"+
		"\u000f!\u0010#\u0011%\u0012\'\u0013\u0003\u0000\u0001\u0002\u0005\u0003"+
		"\u0000\t\n\r\r  \u0003\u0000<<{{}}\u0003\u0000AZ__az\u0005\u0000--09A"+
		"Z__az\u0001\u0000\'\'y\u0000\u0003\u0001\u0000\u0000\u0000\u0000\u0005"+
		"\u0001\u0000\u0000\u0000\u0000\u0007\u0001\u0000\u0000\u0000\u0000\t\u0001"+
		"\u0000\u0000\u0000\u0000\u000b\u0001\u0000\u0000\u0000\u0001\r\u0001\u0000"+
		"\u0000\u0000\u0001\u000f\u0001\u0000\u0000\u0000\u0001\u0011\u0001\u0000"+
		"\u0000\u0000\u0001\u0013\u0001\u0000\u0000\u0000\u0001\u0015\u0001\u0000"+
		"\u0000\u0000\u0001\u0017\u0001\u0000\u0000\u0000\u0001\u0019\u0001\u0000"+
		"\u0000\u0000\u0001\u001b\u0001\u0000\u0000\u0000\u0002\u001d\u0001\u0000"+
		"\u0000\u0000\u0002\u001f\u0001\u0000\u0000\u0000\u0002!\u0001\u0000\u0000"+
		"\u0000\u0002#\u0001\u0000\u0000\u0000\u0002%\u0001\u0000\u0000\u0000\u0002"+
		"\'\u0001\u0000\u0000\u0000\u0003*\u0001\u0000\u0000\u0000\u00051\u0001"+
		"\u0000\u0000\u0000\u00075\u0001\u0000\u0000\u0000\t<\u0001\u0000\u0000"+
		"\u0000\u000b@\u0001\u0000\u0000\u0000\rE\u0001\u0000\u0000\u0000\u000f"+
		"I\u0001\u0000\u0000\u0000\u0011N\u0001\u0000\u0000\u0000\u0013P\u0001"+
		"\u0000\u0000\u0000\u0015R\u0001\u0000\u0000\u0000\u0017V\u0001\u0000\u0000"+
		"\u0000\u0019X\u0001\u0000\u0000\u0000\u001bb\u0001\u0000\u0000\u0000\u001d"+
		"f\u0001\u0000\u0000\u0000\u001fh\u0001\u0000\u0000\u0000!m\u0001\u0000"+
		"\u0000\u0000#o\u0001\u0000\u0000\u0000%q\u0001\u0000\u0000\u0000\'s\u0001"+
		"\u0000\u0000\u0000)+\u0007\u0000\u0000\u0000*)\u0001\u0000\u0000\u0000"+
		"+,\u0001\u0000\u0000\u0000,*\u0001\u0000\u0000\u0000,-\u0001\u0000\u0000"+
		"\u0000-.\u0001\u0000\u0000\u0000./\u0006\u0000\u0000\u0000/\u0004\u0001"+
		"\u0000\u0000\u000002\b\u0001\u0000\u000010\u0001\u0000\u0000\u000023\u0001"+
		"\u0000\u0000\u000031\u0001\u0000\u0000\u000034\u0001\u0000\u0000\u0000"+
		"4\u0006\u0001\u0000\u0000\u000059\u0007\u0002\u0000\u000068\u0007\u0003"+
		"\u0000\u000076\u0001\u0000\u0000\u00008;\u0001\u0000\u0000\u000097\u0001"+
		"\u0000\u0000\u00009:\u0001\u0000\u0000\u0000:\b\u0001\u0000\u0000\u0000"+
		";9\u0001\u0000\u0000\u0000<=\u0005<\u0000\u0000=>\u0001\u0000\u0000\u0000"+
		">?\u0006\u0003\u0001\u0000?\n\u0001\u0000\u0000\u0000@A\u0005{\u0000\u0000"+
		"AB\u0005{\u0000\u0000BC\u0001\u0000\u0000\u0000CD\u0006\u0004\u0002\u0000"+
		"D\f\u0001\u0000\u0000\u0000EF\u0005>\u0000\u0000FG\u0001\u0000\u0000\u0000"+
		"GH\u0006\u0005\u0003\u0000H\u000e\u0001\u0000\u0000\u0000IJ\u0005/\u0000"+
		"\u0000JK\u0005>\u0000\u0000KL\u0001\u0000\u0000\u0000LM\u0006\u0006\u0003"+
		"\u0000M\u0010\u0001\u0000\u0000\u0000NO\u0005=\u0000\u0000O\u0012\u0001"+
		"\u0000\u0000\u0000PQ\u0005/\u0000\u0000Q\u0014\u0001\u0000\u0000\u0000"+
		"RS\u0003\u0003\u0000\u0000ST\u0001\u0000\u0000\u0000TU\u0006\t\u0000\u0000"+
		"U\u0016\u0001\u0000\u0000\u0000VW\u0003\u0007\u0002\u0000W\u0018\u0001"+
		"\u0000\u0000\u0000X]\u0005\'\u0000\u0000Y\\\b\u0004\u0000\u0000Z\\\u0005"+
		" \u0000\u0000[Y\u0001\u0000\u0000\u0000[Z\u0001\u0000\u0000\u0000\\_\u0001"+
		"\u0000\u0000\u0000][\u0001\u0000\u0000\u0000]^\u0001\u0000\u0000\u0000"+
		"^`\u0001\u0000\u0000\u0000_]\u0001\u0000\u0000\u0000`a\u0005\'\u0000\u0000"+
		"a\u001a\u0001\u0000\u0000\u0000bc\u0003\u000b\u0004\u0000cd\u0001\u0000"+
		"\u0000\u0000de\u0006\f\u0002\u0000e\u001c\u0001\u0000\u0000\u0000fg\u0003"+
		"\u0007\u0002\u0000g\u001e\u0001\u0000\u0000\u0000hi\u0005}\u0000\u0000"+
		"ij\u0005}\u0000\u0000jk\u0001\u0000\u0000\u0000kl\u0006\u000e\u0003\u0000"+
		"l \u0001\u0000\u0000\u0000mn\u0005(\u0000\u0000n\"\u0001\u0000\u0000\u0000"+
		"op\u0005)\u0000\u0000p$\u0001\u0000\u0000\u0000qr\u0005,\u0000\u0000r"+
		"&\u0001\u0000\u0000\u0000st\u0003\u0003\u0000\u0000tu\u0001\u0000\u0000"+
		"\u0000uv\u0006\u0012\u0000\u0000v(\u0001\u0000\u0000\u0000\b\u0000\u0001"+
		"\u0002,39[]\u0004\u0006\u0000\u0000\u0005\u0001\u0000\u0005\u0002\u0000"+
		"\u0004\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}