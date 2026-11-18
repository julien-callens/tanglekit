// Generated from TangleParser.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import TangleParserListener from './TangleParserListener.js';
import TangleParserVisitor from './TangleParserVisitor.js';

const serializedATN = [4,1,62,326,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,1,0,3,0,66,8,0,1,0,3,0,69,8,
0,1,0,3,0,72,8,0,1,0,1,0,1,0,1,1,1,1,5,1,79,8,1,10,1,12,1,82,9,1,1,1,1,1,
1,2,1,2,3,2,88,8,2,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,6,5,
6,103,8,6,10,6,12,6,106,9,6,1,7,1,7,5,7,110,8,7,10,7,12,7,113,9,7,1,7,1,
7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,126,8,8,1,8,1,8,1,8,1,8,1,8,3,
8,133,8,8,1,9,1,9,1,9,1,9,3,9,139,8,9,1,9,1,9,1,9,5,9,144,8,9,10,9,12,9,
147,9,9,1,9,1,9,1,10,1,10,1,10,5,10,154,8,10,10,10,12,10,157,9,10,1,11,1,
11,3,11,161,8,11,1,11,1,11,1,12,1,12,1,12,1,12,3,12,169,8,12,1,12,1,12,1,
13,1,13,1,13,1,13,1,13,1,14,1,14,1,14,1,14,1,14,1,14,5,14,184,8,14,10,14,
12,14,187,9,14,1,14,1,14,1,15,1,15,1,15,1,15,1,16,1,16,1,16,1,16,3,16,199,
8,16,1,17,1,17,1,17,5,17,204,8,17,10,17,12,17,207,9,17,1,17,1,17,1,17,1,
17,1,17,1,17,1,17,1,17,3,17,217,8,17,1,18,1,18,1,18,5,18,222,8,18,10,18,
12,18,225,9,18,1,19,1,19,1,19,1,19,3,19,231,8,19,1,20,1,20,1,20,1,20,1,20,
3,20,238,8,20,1,21,1,21,1,21,1,21,5,21,244,8,21,10,21,12,21,247,9,21,1,22,
1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,3,22,259,8,22,1,23,1,23,1,23,
1,23,1,23,1,23,5,23,267,8,23,10,23,12,23,270,9,23,1,23,3,23,273,8,23,1,23,
1,23,1,23,1,23,1,24,1,24,1,24,1,24,1,24,1,24,1,25,1,25,1,25,3,25,288,8,25,
1,25,1,25,1,25,1,26,1,26,1,26,5,26,296,8,26,10,26,12,26,299,9,26,1,26,1,
26,3,26,303,8,26,1,26,1,26,1,27,1,27,1,27,5,27,310,8,27,10,27,12,27,313,
9,27,1,28,1,28,1,28,3,28,318,8,28,1,29,1,29,1,30,1,30,1,31,1,31,1,31,0,0,
32,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,
50,52,54,56,58,60,62,0,2,1,0,2,3,2,0,46,47,49,49,336,0,65,1,0,0,0,2,76,1,
0,0,0,4,87,1,0,0,0,6,89,1,0,0,0,8,94,1,0,0,0,10,97,1,0,0,0,12,104,1,0,0,
0,14,107,1,0,0,0,16,132,1,0,0,0,18,134,1,0,0,0,20,150,1,0,0,0,22,158,1,0,
0,0,24,164,1,0,0,0,26,172,1,0,0,0,28,177,1,0,0,0,30,190,1,0,0,0,32,198,1,
0,0,0,34,200,1,0,0,0,36,223,1,0,0,0,38,226,1,0,0,0,40,237,1,0,0,0,42,239,
1,0,0,0,44,258,1,0,0,0,46,260,1,0,0,0,48,278,1,0,0,0,50,284,1,0,0,0,52,292,
1,0,0,0,54,306,1,0,0,0,56,317,1,0,0,0,58,319,1,0,0,0,60,321,1,0,0,0,62,323,
1,0,0,0,64,66,3,2,1,0,65,64,1,0,0,0,65,66,1,0,0,0,66,68,1,0,0,0,67,69,3,
10,5,0,68,67,1,0,0,0,68,69,1,0,0,0,69,71,1,0,0,0,70,72,3,14,7,0,71,70,1,
0,0,0,71,72,1,0,0,0,72,73,1,0,0,0,73,74,3,34,17,0,74,75,5,0,0,1,75,1,1,0,
0,0,76,80,5,4,0,0,77,79,3,4,2,0,78,77,1,0,0,0,79,82,1,0,0,0,80,78,1,0,0,
0,80,81,1,0,0,0,81,83,1,0,0,0,82,80,1,0,0,0,83,84,5,34,0,0,84,3,1,0,0,0,
85,88,3,6,3,0,86,88,3,8,4,0,87,85,1,0,0,0,87,86,1,0,0,0,88,5,1,0,0,0,89,
90,5,30,0,0,90,91,5,29,0,0,91,92,5,31,0,0,92,93,5,32,0,0,93,7,1,0,0,0,94,
95,5,31,0,0,95,96,5,32,0,0,96,9,1,0,0,0,97,98,5,5,0,0,98,99,3,12,6,0,99,
100,5,36,0,0,100,11,1,0,0,0,101,103,3,24,12,0,102,101,1,0,0,0,103,106,1,
0,0,0,104,102,1,0,0,0,104,105,1,0,0,0,105,13,1,0,0,0,106,104,1,0,0,0,107,
111,5,6,0,0,108,110,3,16,8,0,109,108,1,0,0,0,110,113,1,0,0,0,111,109,1,0,
0,0,111,112,1,0,0,0,112,114,1,0,0,0,113,111,1,0,0,0,114,115,5,41,0,0,115,
15,1,0,0,0,116,133,3,22,11,0,117,133,3,24,12,0,118,133,3,28,14,0,119,133,
3,18,9,0,120,121,3,52,26,0,121,122,5,25,0,0,122,133,1,0,0,0,123,125,5,38,
0,0,124,126,3,42,21,0,125,124,1,0,0,0,125,126,1,0,0,0,126,127,1,0,0,0,127,
133,5,25,0,0,128,129,3,32,16,0,129,130,5,25,0,0,130,133,1,0,0,0,131,133,
3,26,13,0,132,116,1,0,0,0,132,117,1,0,0,0,132,118,1,0,0,0,132,119,1,0,0,
0,132,120,1,0,0,0,132,123,1,0,0,0,132,128,1,0,0,0,132,131,1,0,0,0,133,17,
1,0,0,0,134,135,5,7,0,0,135,136,5,28,0,0,136,138,5,11,0,0,137,139,3,20,10,
0,138,137,1,0,0,0,138,139,1,0,0,0,139,140,1,0,0,0,140,141,5,22,0,0,141,145,
5,18,0,0,142,144,3,16,8,0,143,142,1,0,0,0,144,147,1,0,0,0,145,143,1,0,0,
0,145,146,1,0,0,0,146,148,1,0,0,0,147,145,1,0,0,0,148,149,5,19,0,0,149,19,
1,0,0,0,150,155,3,42,21,0,151,152,5,23,0,0,152,154,3,42,21,0,153,151,1,0,
0,0,154,157,1,0,0,0,155,153,1,0,0,0,155,156,1,0,0,0,156,21,1,0,0,0,157,155,
1,0,0,0,158,160,5,37,0,0,159,161,5,59,0,0,160,159,1,0,0,0,160,161,1,0,0,
0,161,162,1,0,0,0,162,163,5,60,0,0,163,23,1,0,0,0,164,165,5,24,0,0,165,168,
5,28,0,0,166,167,5,2,0,0,167,169,3,42,21,0,168,166,1,0,0,0,168,169,1,0,0,
0,169,170,1,0,0,0,170,171,5,25,0,0,171,25,1,0,0,0,172,173,5,28,0,0,173,174,
7,0,0,0,174,175,3,42,21,0,175,176,5,25,0,0,176,27,1,0,0,0,177,178,5,8,0,
0,178,179,5,42,0,0,179,180,3,42,21,0,180,181,5,52,0,0,181,185,5,18,0,0,182,
184,3,16,8,0,183,182,1,0,0,0,184,187,1,0,0,0,185,183,1,0,0,0,185,186,1,0,
0,0,186,188,1,0,0,0,187,185,1,0,0,0,188,189,5,19,0,0,189,29,1,0,0,0,190,
191,5,42,0,0,191,192,3,42,21,0,192,193,5,52,0,0,193,31,1,0,0,0,194,195,5,
50,0,0,195,199,5,28,0,0,196,197,5,28,0,0,197,199,5,50,0,0,198,194,1,0,0,
0,198,196,1,0,0,0,199,33,1,0,0,0,200,201,5,27,0,0,201,205,5,28,0,0,202,204,
3,38,19,0,203,202,1,0,0,0,204,207,1,0,0,0,205,203,1,0,0,0,205,206,1,0,0,
0,206,216,1,0,0,0,207,205,1,0,0,0,208,209,5,54,0,0,209,210,3,36,18,0,210,
211,5,62,0,0,211,212,5,28,0,0,212,213,5,54,0,0,213,217,1,0,0,0,214,215,5,
26,0,0,215,217,5,54,0,0,216,208,1,0,0,0,216,214,1,0,0,0,217,35,1,0,0,0,218,
222,3,34,17,0,219,222,3,40,20,0,220,222,3,60,30,0,221,218,1,0,0,0,221,219,
1,0,0,0,221,220,1,0,0,0,222,225,1,0,0,0,223,221,1,0,0,0,223,224,1,0,0,0,
224,37,1,0,0,0,225,223,1,0,0,0,226,227,5,28,0,0,227,230,5,2,0,0,228,231,
3,40,20,0,229,231,3,58,29,0,230,228,1,0,0,0,230,229,1,0,0,0,231,39,1,0,0,
0,232,238,3,46,23,0,233,234,5,12,0,0,234,235,3,42,21,0,235,236,5,13,0,0,
236,238,1,0,0,0,237,232,1,0,0,0,237,233,1,0,0,0,238,41,1,0,0,0,239,245,3,
44,22,0,240,241,3,62,31,0,241,242,3,44,22,0,242,244,1,0,0,0,243,240,1,0,
0,0,244,247,1,0,0,0,245,243,1,0,0,0,245,246,1,0,0,0,246,43,1,0,0,0,247,245,
1,0,0,0,248,259,3,52,26,0,249,250,5,48,0,0,250,259,3,44,22,0,251,252,5,11,
0,0,252,253,3,42,21,0,253,254,5,22,0,0,254,259,1,0,0,0,255,259,3,32,16,0,
256,259,3,56,28,0,257,259,5,28,0,0,258,248,1,0,0,0,258,249,1,0,0,0,258,251,
1,0,0,0,258,255,1,0,0,0,258,256,1,0,0,0,258,257,1,0,0,0,259,45,1,0,0,0,260,
261,5,12,0,0,261,262,5,8,0,0,262,263,3,30,15,0,263,264,5,13,0,0,264,268,
3,36,18,0,265,267,3,48,24,0,266,265,1,0,0,0,267,270,1,0,0,0,268,266,1,0,
0,0,268,269,1,0,0,0,269,272,1,0,0,0,270,268,1,0,0,0,271,273,3,50,25,0,272,
271,1,0,0,0,272,273,1,0,0,0,273,274,1,0,0,0,274,275,5,12,0,0,275,276,5,57,
0,0,276,277,5,13,0,0,277,47,1,0,0,0,278,279,5,12,0,0,279,280,5,9,0,0,280,
281,3,30,15,0,281,282,5,13,0,0,282,283,3,36,18,0,283,49,1,0,0,0,284,285,
5,12,0,0,285,287,5,10,0,0,286,288,3,30,15,0,287,286,1,0,0,0,287,288,1,0,
0,0,288,289,1,0,0,0,289,290,5,13,0,0,290,291,3,36,18,0,291,51,1,0,0,0,292,
297,5,28,0,0,293,294,5,39,0,0,294,296,5,28,0,0,295,293,1,0,0,0,296,299,1,
0,0,0,297,295,1,0,0,0,297,298,1,0,0,0,298,300,1,0,0,0,299,297,1,0,0,0,300,
302,5,11,0,0,301,303,3,54,27,0,302,301,1,0,0,0,302,303,1,0,0,0,303,304,1,
0,0,0,304,305,5,22,0,0,305,53,1,0,0,0,306,311,3,42,21,0,307,308,5,23,0,0,
308,310,3,42,21,0,309,307,1,0,0,0,310,313,1,0,0,0,311,309,1,0,0,0,311,312,
1,0,0,0,312,55,1,0,0,0,313,311,1,0,0,0,314,318,5,15,0,0,315,318,3,58,29,
0,316,318,5,16,0,0,317,314,1,0,0,0,317,315,1,0,0,0,317,316,1,0,0,0,318,57,
1,0,0,0,319,320,5,17,0,0,320,59,1,0,0,0,321,322,5,61,0,0,322,61,1,0,0,0,
323,324,7,1,0,0,324,63,1,0,0,0,31,65,68,71,80,87,104,111,125,132,138,145,
155,160,168,185,198,205,216,221,223,230,237,245,258,268,272,287,297,302,
311,317];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class TangleParser extends antlr4.Parser {

    static grammarFileName = "TangleParser.g4";
    static literalNames = [ null, null, "'='", null, "'<import>'", "'<props>'", 
                            "'<code>'", "'function '", "'if'", "'else if'", 
                            "'else'", "'('", null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, "'<'", null, "'from'", null, null, 
                            null, null, "'</import>'", null, "'</props>'", 
                            null, "'return'", null, null, "'</code>'" ];
    static symbolicNames = [ null, "WS", "ASSIGN", "ASSIGN_OPERATOR", "IMPORT_OPEN", 
                             "PROPS_OPEN", "CODE_OPEN", "FUNCTION", "IF", 
                             "ELSE_IF", "ELSE", "LPAREN", "EMBEDDED_OPEN", 
                             "EMBEDDED_CLOSE", "EMBEDDED_CONTENT_CLOSE", 
                             "INT", "BOOL", "STRING_VALUE", "CODE_BLOCK_OPEN", 
                             "CODE_BLOCK_CLOSE", "FUNC_START", "ARGS_OPEN", 
                             "ARGS_CLOSE", "ARGS_SEPARATOR", "VAR_DEF", 
                             "STATEMENT_END", "TAG_SLASH", "TAG_OPEN", "NAME", 
                             "FROM", "IMPORT_ID", "IMPORT_PATH", "IMPORT_STATEMENT_END", 
                             "IMPORT_WS", "IMPORT_CLOSE", "PROPS_WS", "PROPS_CLOSE", 
                             "COMMENT_START", "RETURN", "METHOD_CALL", "CODE_WS", 
                             "CODE_CLOSE", "EXPRESSION_OPEN", "IF_WS", "ELSE_WS", 
                             "FUNCTION_ARGS_WS", "ARITHMETIC_OPERATOR", 
                             "LOGICAL_OPERATOR", "NOT_OPERATOR", "COMPARISON_OPERATOR", 
                             "CREMENT_OPERATOR", "STATEMENT_WS", "EXPRESSION_CLOSE", 
                             "TAG_WS", "TAG_CLOSE", "CLOSING_WS", "ATTRIBUTE_WS", 
                             "EMBEDDED_END_IF", "EMBEDDED_WS", "COMMENT_CONTENT", 
                             "COMMENT_CLOSE", "TEXT", "CLOSING_OPEN" ];
    static ruleNames = [ "document", "importDeclaration", "importStatement", 
                         "componentImport", "styleImport", "propsDeclaration", 
                         "propsContent", "codeDeclaration", "codeContent", 
                         "functionDeclaration", "functionArgs", "comment", 
                         "variableDeclaration", "variableModification", 
                         "ifStatement", "embeddedIfStatement", "updateExpression", 
                         "elementsDeclaration", "content", "elementAttribute", 
                         "embeddedStatement", "expression", "operand", "embeddedIf", 
                         "embeddedElseIf", "embeddedElse", "functionCall", 
                         "functionCallArgs", "variableTypes", "stringType", 
                         "textContent", "operator" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = TangleParser.ruleNames;
        this.literalNames = TangleParser.literalNames;
        this.symbolicNames = TangleParser.symbolicNames;
    }



	document() {
	    let localctx = new DocumentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, TangleParser.RULE_document);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 65;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===4) {
	            this.state = 64;
	            this.importDeclaration();
	        }

	        this.state = 68;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===5) {
	            this.state = 67;
	            this.propsDeclaration();
	        }

	        this.state = 71;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===6) {
	            this.state = 70;
	            this.codeDeclaration();
	        }

	        this.state = 73;
	        this.elementsDeclaration();
	        this.state = 74;
	        this.match(TangleParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	importDeclaration() {
	    let localctx = new ImportDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, TangleParser.RULE_importDeclaration);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 76;
	        this.match(TangleParser.IMPORT_OPEN);
	        this.state = 80;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===30 || _la===31) {
	            this.state = 77;
	            this.importStatement();
	            this.state = 82;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 83;
	        this.match(TangleParser.IMPORT_CLOSE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	importStatement() {
	    let localctx = new ImportStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, TangleParser.RULE_importStatement);
	    try {
	        this.state = 87;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 30:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 85;
	            this.componentImport();
	            break;
	        case 31:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 86;
	            this.styleImport();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	componentImport() {
	    let localctx = new ComponentImportContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, TangleParser.RULE_componentImport);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 89;
	        this.match(TangleParser.IMPORT_ID);
	        this.state = 90;
	        this.match(TangleParser.FROM);
	        this.state = 91;
	        this.match(TangleParser.IMPORT_PATH);
	        this.state = 92;
	        this.match(TangleParser.IMPORT_STATEMENT_END);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	styleImport() {
	    let localctx = new StyleImportContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, TangleParser.RULE_styleImport);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 94;
	        this.match(TangleParser.IMPORT_PATH);
	        this.state = 95;
	        this.match(TangleParser.IMPORT_STATEMENT_END);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	propsDeclaration() {
	    let localctx = new PropsDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, TangleParser.RULE_propsDeclaration);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 97;
	        this.match(TangleParser.PROPS_OPEN);
	        this.state = 98;
	        this.propsContent();
	        this.state = 99;
	        this.match(TangleParser.PROPS_CLOSE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	propsContent() {
	    let localctx = new PropsContentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, TangleParser.RULE_propsContent);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 104;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===24) {
	            this.state = 101;
	            this.variableDeclaration();
	            this.state = 106;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	codeDeclaration() {
	    let localctx = new CodeDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, TangleParser.RULE_codeDeclaration);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 107;
	        this.match(TangleParser.CODE_OPEN);
	        this.state = 111;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 285213056) !== 0) || ((((_la - 37)) & ~0x1f) === 0 && ((1 << (_la - 37)) & 8195) !== 0)) {
	            this.state = 108;
	            this.codeContent();
	            this.state = 113;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 114;
	        this.match(TangleParser.CODE_CLOSE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	codeContent() {
	    let localctx = new CodeContentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, TangleParser.RULE_codeContent);
	    var _la = 0;
	    try {
	        this.state = 132;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 116;
	            this.comment();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 117;
	            this.variableDeclaration();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 118;
	            this.ifStatement();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 119;
	            this.functionDeclaration();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 120;
	            this.functionCall();
	            this.state = 121;
	            this.match(TangleParser.STATEMENT_END);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 123;
	            this.match(TangleParser.RETURN);
	            this.state = 125;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) === 0 && ((1 << _la) & 268666880) !== 0) || _la===48 || _la===50) {
	                this.state = 124;
	                this.expression();
	            }

	            this.state = 127;
	            this.match(TangleParser.STATEMENT_END);
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 128;
	            this.updateExpression();
	            this.state = 129;
	            this.match(TangleParser.STATEMENT_END);
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 131;
	            this.variableModification();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	functionDeclaration() {
	    let localctx = new FunctionDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, TangleParser.RULE_functionDeclaration);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 134;
	        this.match(TangleParser.FUNCTION);
	        this.state = 135;
	        this.match(TangleParser.NAME);
	        this.state = 136;
	        this.match(TangleParser.LPAREN);
	        this.state = 138;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 268666880) !== 0) || _la===48 || _la===50) {
	            this.state = 137;
	            this.functionArgs();
	        }

	        this.state = 140;
	        this.match(TangleParser.ARGS_CLOSE);
	        this.state = 141;
	        this.match(TangleParser.CODE_BLOCK_OPEN);
	        this.state = 145;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 285213056) !== 0) || ((((_la - 37)) & ~0x1f) === 0 && ((1 << (_la - 37)) & 8195) !== 0)) {
	            this.state = 142;
	            this.codeContent();
	            this.state = 147;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 148;
	        this.match(TangleParser.CODE_BLOCK_CLOSE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	functionArgs() {
	    let localctx = new FunctionArgsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, TangleParser.RULE_functionArgs);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 150;
	        this.expression();
	        this.state = 155;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===23) {
	            this.state = 151;
	            this.match(TangleParser.ARGS_SEPARATOR);
	            this.state = 152;
	            this.expression();
	            this.state = 157;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	comment() {
	    let localctx = new CommentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, TangleParser.RULE_comment);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 158;
	        this.match(TangleParser.COMMENT_START);
	        this.state = 160;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===59) {
	            this.state = 159;
	            this.match(TangleParser.COMMENT_CONTENT);
	        }

	        this.state = 162;
	        this.match(TangleParser.COMMENT_CLOSE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variableDeclaration() {
	    let localctx = new VariableDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, TangleParser.RULE_variableDeclaration);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 164;
	        this.match(TangleParser.VAR_DEF);
	        this.state = 165;
	        this.match(TangleParser.NAME);
	        this.state = 168;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===2) {
	            this.state = 166;
	            this.match(TangleParser.ASSIGN);
	            this.state = 167;
	            this.expression();
	        }

	        this.state = 170;
	        this.match(TangleParser.STATEMENT_END);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variableModification() {
	    let localctx = new VariableModificationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, TangleParser.RULE_variableModification);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 172;
	        this.match(TangleParser.NAME);
	        this.state = 173;
	        _la = this._input.LA(1);
	        if(!(_la===2 || _la===3)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 174;
	        this.expression();
	        this.state = 175;
	        this.match(TangleParser.STATEMENT_END);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ifStatement() {
	    let localctx = new IfStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, TangleParser.RULE_ifStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 177;
	        this.match(TangleParser.IF);
	        this.state = 178;
	        this.match(TangleParser.EXPRESSION_OPEN);
	        this.state = 179;
	        this.expression();
	        this.state = 180;
	        this.match(TangleParser.EXPRESSION_CLOSE);
	        this.state = 181;
	        this.match(TangleParser.CODE_BLOCK_OPEN);
	        this.state = 185;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 285213056) !== 0) || ((((_la - 37)) & ~0x1f) === 0 && ((1 << (_la - 37)) & 8195) !== 0)) {
	            this.state = 182;
	            this.codeContent();
	            this.state = 187;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 188;
	        this.match(TangleParser.CODE_BLOCK_CLOSE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	embeddedIfStatement() {
	    let localctx = new EmbeddedIfStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, TangleParser.RULE_embeddedIfStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 190;
	        this.match(TangleParser.EXPRESSION_OPEN);
	        this.state = 191;
	        this.expression();
	        this.state = 192;
	        this.match(TangleParser.EXPRESSION_CLOSE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	updateExpression() {
	    let localctx = new UpdateExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, TangleParser.RULE_updateExpression);
	    try {
	        this.state = 198;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 50:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 194;
	            this.match(TangleParser.CREMENT_OPERATOR);
	            this.state = 195;
	            this.match(TangleParser.NAME);
	            break;
	        case 28:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 196;
	            this.match(TangleParser.NAME);
	            this.state = 197;
	            this.match(TangleParser.CREMENT_OPERATOR);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	elementsDeclaration() {
	    let localctx = new ElementsDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, TangleParser.RULE_elementsDeclaration);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 200;
	        this.match(TangleParser.TAG_OPEN);
	        this.state = 201;
	        this.match(TangleParser.NAME);
	        this.state = 205;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===28) {
	            this.state = 202;
	            this.elementAttribute();
	            this.state = 207;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 216;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 54:
	            this.state = 208;
	            this.match(TangleParser.TAG_CLOSE);
	            this.state = 209;
	            this.content();
	            this.state = 210;
	            this.match(TangleParser.CLOSING_OPEN);
	            this.state = 211;
	            this.match(TangleParser.NAME);
	            this.state = 212;
	            this.match(TangleParser.TAG_CLOSE);
	            break;
	        case 26:
	            this.state = 214;
	            this.match(TangleParser.TAG_SLASH);
	            this.state = 215;
	            this.match(TangleParser.TAG_CLOSE);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	content() {
	    let localctx = new ContentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, TangleParser.RULE_content);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 223;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,19,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 221;
	                this._errHandler.sync(this);
	                switch(this._input.LA(1)) {
	                case 27:
	                    this.state = 218;
	                    this.elementsDeclaration();
	                    break;
	                case 12:
	                    this.state = 219;
	                    this.embeddedStatement();
	                    break;
	                case 61:
	                    this.state = 220;
	                    this.textContent();
	                    break;
	                default:
	                    throw new antlr4.error.NoViableAltException(this);
	                } 
	            }
	            this.state = 225;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,19,this._ctx);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	elementAttribute() {
	    let localctx = new ElementAttributeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, TangleParser.RULE_elementAttribute);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 226;
	        this.match(TangleParser.NAME);
	        this.state = 227;
	        this.match(TangleParser.ASSIGN);
	        this.state = 230;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 12:
	            this.state = 228;
	            this.embeddedStatement();
	            break;
	        case 17:
	            this.state = 229;
	            this.stringType();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	embeddedStatement() {
	    let localctx = new EmbeddedStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, TangleParser.RULE_embeddedStatement);
	    try {
	        this.state = 237;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 232;
	            this.embeddedIf();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 233;
	            this.match(TangleParser.EMBEDDED_OPEN);
	            this.state = 234;
	            this.expression();
	            this.state = 235;
	            this.match(TangleParser.EMBEDDED_CLOSE);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expression() {
	    let localctx = new ExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, TangleParser.RULE_expression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 239;
	        this.operand();
	        this.state = 245;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 46)) & ~0x1f) === 0 && ((1 << (_la - 46)) & 11) !== 0)) {
	            this.state = 240;
	            this.operator();
	            this.state = 241;
	            this.operand();
	            this.state = 247;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	operand() {
	    let localctx = new OperandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, TangleParser.RULE_operand);
	    try {
	        this.state = 258;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 248;
	            this.functionCall();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 249;
	            this.match(TangleParser.NOT_OPERATOR);
	            this.state = 250;
	            this.operand();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 251;
	            this.match(TangleParser.LPAREN);
	            this.state = 252;
	            this.expression();
	            this.state = 253;
	            this.match(TangleParser.ARGS_CLOSE);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 255;
	            this.updateExpression();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 256;
	            this.variableTypes();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 257;
	            this.match(TangleParser.NAME);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	embeddedIf() {
	    let localctx = new EmbeddedIfContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, TangleParser.RULE_embeddedIf);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 260;
	        this.match(TangleParser.EMBEDDED_OPEN);
	        this.state = 261;
	        this.match(TangleParser.IF);
	        this.state = 262;
	        this.embeddedIfStatement();
	        this.state = 263;
	        this.match(TangleParser.EMBEDDED_CLOSE);
	        this.state = 264;
	        this.content();
	        this.state = 268;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,24,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 265;
	                this.embeddedElseIf(); 
	            }
	            this.state = 270;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,24,this._ctx);
	        }

	        this.state = 272;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
	        if(la_===1) {
	            this.state = 271;
	            this.embeddedElse();

	        }
	        this.state = 274;
	        this.match(TangleParser.EMBEDDED_OPEN);
	        this.state = 275;
	        this.match(TangleParser.EMBEDDED_END_IF);
	        this.state = 276;
	        this.match(TangleParser.EMBEDDED_CLOSE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	embeddedElseIf() {
	    let localctx = new EmbeddedElseIfContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, TangleParser.RULE_embeddedElseIf);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 278;
	        this.match(TangleParser.EMBEDDED_OPEN);
	        this.state = 279;
	        this.match(TangleParser.ELSE_IF);
	        this.state = 280;
	        this.embeddedIfStatement();
	        this.state = 281;
	        this.match(TangleParser.EMBEDDED_CLOSE);
	        this.state = 282;
	        this.content();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	embeddedElse() {
	    let localctx = new EmbeddedElseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, TangleParser.RULE_embeddedElse);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 284;
	        this.match(TangleParser.EMBEDDED_OPEN);
	        this.state = 285;
	        this.match(TangleParser.ELSE);
	        this.state = 287;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===42) {
	            this.state = 286;
	            this.embeddedIfStatement();
	        }

	        this.state = 289;
	        this.match(TangleParser.EMBEDDED_CLOSE);
	        this.state = 290;
	        this.content();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	functionCall() {
	    let localctx = new FunctionCallContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, TangleParser.RULE_functionCall);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 292;
	        this.match(TangleParser.NAME);
	        this.state = 297;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===39) {
	            this.state = 293;
	            this.match(TangleParser.METHOD_CALL);
	            this.state = 294;
	            this.match(TangleParser.NAME);
	            this.state = 299;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 300;
	        this.match(TangleParser.LPAREN);
	        this.state = 302;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 268666880) !== 0) || _la===48 || _la===50) {
	            this.state = 301;
	            this.functionCallArgs();
	        }

	        this.state = 304;
	        this.match(TangleParser.ARGS_CLOSE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	functionCallArgs() {
	    let localctx = new FunctionCallArgsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, TangleParser.RULE_functionCallArgs);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 306;
	        this.expression();
	        this.state = 311;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===23) {
	            this.state = 307;
	            this.match(TangleParser.ARGS_SEPARATOR);
	            this.state = 308;
	            this.expression();
	            this.state = 313;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variableTypes() {
	    let localctx = new VariableTypesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, TangleParser.RULE_variableTypes);
	    try {
	        this.state = 317;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 15:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 314;
	            this.match(TangleParser.INT);
	            break;
	        case 17:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 315;
	            this.stringType();
	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 316;
	            this.match(TangleParser.BOOL);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	stringType() {
	    let localctx = new StringTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, TangleParser.RULE_stringType);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 319;
	        this.match(TangleParser.STRING_VALUE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	textContent() {
	    let localctx = new TextContentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, TangleParser.RULE_textContent);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 321;
	        this.match(TangleParser.TEXT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	operator() {
	    let localctx = new OperatorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, TangleParser.RULE_operator);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 323;
	        _la = this._input.LA(1);
	        if(!(((((_la - 46)) & ~0x1f) === 0 && ((1 << (_la - 46)) & 11) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

TangleParser.EOF = antlr4.Token.EOF;
TangleParser.WS = 1;
TangleParser.ASSIGN = 2;
TangleParser.ASSIGN_OPERATOR = 3;
TangleParser.IMPORT_OPEN = 4;
TangleParser.PROPS_OPEN = 5;
TangleParser.CODE_OPEN = 6;
TangleParser.FUNCTION = 7;
TangleParser.IF = 8;
TangleParser.ELSE_IF = 9;
TangleParser.ELSE = 10;
TangleParser.LPAREN = 11;
TangleParser.EMBEDDED_OPEN = 12;
TangleParser.EMBEDDED_CLOSE = 13;
TangleParser.EMBEDDED_CONTENT_CLOSE = 14;
TangleParser.INT = 15;
TangleParser.BOOL = 16;
TangleParser.STRING_VALUE = 17;
TangleParser.CODE_BLOCK_OPEN = 18;
TangleParser.CODE_BLOCK_CLOSE = 19;
TangleParser.FUNC_START = 20;
TangleParser.ARGS_OPEN = 21;
TangleParser.ARGS_CLOSE = 22;
TangleParser.ARGS_SEPARATOR = 23;
TangleParser.VAR_DEF = 24;
TangleParser.STATEMENT_END = 25;
TangleParser.TAG_SLASH = 26;
TangleParser.TAG_OPEN = 27;
TangleParser.NAME = 28;
TangleParser.FROM = 29;
TangleParser.IMPORT_ID = 30;
TangleParser.IMPORT_PATH = 31;
TangleParser.IMPORT_STATEMENT_END = 32;
TangleParser.IMPORT_WS = 33;
TangleParser.IMPORT_CLOSE = 34;
TangleParser.PROPS_WS = 35;
TangleParser.PROPS_CLOSE = 36;
TangleParser.COMMENT_START = 37;
TangleParser.RETURN = 38;
TangleParser.METHOD_CALL = 39;
TangleParser.CODE_WS = 40;
TangleParser.CODE_CLOSE = 41;
TangleParser.EXPRESSION_OPEN = 42;
TangleParser.IF_WS = 43;
TangleParser.ELSE_WS = 44;
TangleParser.FUNCTION_ARGS_WS = 45;
TangleParser.ARITHMETIC_OPERATOR = 46;
TangleParser.LOGICAL_OPERATOR = 47;
TangleParser.NOT_OPERATOR = 48;
TangleParser.COMPARISON_OPERATOR = 49;
TangleParser.CREMENT_OPERATOR = 50;
TangleParser.STATEMENT_WS = 51;
TangleParser.EXPRESSION_CLOSE = 52;
TangleParser.TAG_WS = 53;
TangleParser.TAG_CLOSE = 54;
TangleParser.CLOSING_WS = 55;
TangleParser.ATTRIBUTE_WS = 56;
TangleParser.EMBEDDED_END_IF = 57;
TangleParser.EMBEDDED_WS = 58;
TangleParser.COMMENT_CONTENT = 59;
TangleParser.COMMENT_CLOSE = 60;
TangleParser.TEXT = 61;
TangleParser.CLOSING_OPEN = 62;

TangleParser.RULE_document = 0;
TangleParser.RULE_importDeclaration = 1;
TangleParser.RULE_importStatement = 2;
TangleParser.RULE_componentImport = 3;
TangleParser.RULE_styleImport = 4;
TangleParser.RULE_propsDeclaration = 5;
TangleParser.RULE_propsContent = 6;
TangleParser.RULE_codeDeclaration = 7;
TangleParser.RULE_codeContent = 8;
TangleParser.RULE_functionDeclaration = 9;
TangleParser.RULE_functionArgs = 10;
TangleParser.RULE_comment = 11;
TangleParser.RULE_variableDeclaration = 12;
TangleParser.RULE_variableModification = 13;
TangleParser.RULE_ifStatement = 14;
TangleParser.RULE_embeddedIfStatement = 15;
TangleParser.RULE_updateExpression = 16;
TangleParser.RULE_elementsDeclaration = 17;
TangleParser.RULE_content = 18;
TangleParser.RULE_elementAttribute = 19;
TangleParser.RULE_embeddedStatement = 20;
TangleParser.RULE_expression = 21;
TangleParser.RULE_operand = 22;
TangleParser.RULE_embeddedIf = 23;
TangleParser.RULE_embeddedElseIf = 24;
TangleParser.RULE_embeddedElse = 25;
TangleParser.RULE_functionCall = 26;
TangleParser.RULE_functionCallArgs = 27;
TangleParser.RULE_variableTypes = 28;
TangleParser.RULE_stringType = 29;
TangleParser.RULE_textContent = 30;
TangleParser.RULE_operator = 31;

class DocumentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TangleParser.RULE_document;
    }

	elementsDeclaration() {
	    return this.getTypedRuleContext(ElementsDeclarationContext,0);
	};

	EOF() {
	    return this.getToken(TangleParser.EOF, 0);
	};

	importDeclaration() {
	    return this.getTypedRuleContext(ImportDeclarationContext,0);
	};

	propsDeclaration() {
	    return this.getTypedRuleContext(PropsDeclarationContext,0);
	};

	codeDeclaration() {
	    return this.getTypedRuleContext(CodeDeclarationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TangleParserListener ) {
	        listener.enterDocument(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TangleParserListener ) {
	        listener.exitDocument(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TangleParserVisitor ) {
	        return visitor.visitDocument(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ImportDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TangleParser.RULE_importDeclaration;
    }

	IMPORT_OPEN() {
	    return this.getToken(TangleParser.IMPORT_OPEN, 0);
	};

	IMPORT_CLOSE() {
	    return this.getToken(TangleParser.IMPORT_CLOSE, 0);
	};

	importStatement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ImportStatementContext);
	    } else {
	        return this.getTypedRuleContext(ImportStatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof TangleParserListener ) {
	        listener.enterImportDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TangleParserListener ) {
	        listener.exitImportDeclaration(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TangleParserVisitor ) {
	        return visitor.visitImportDeclaration(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ImportStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TangleParser.RULE_importStatement;
    }

	componentImport() {
	    return this.getTypedRuleContext(ComponentImportContext,0);
	};

	styleImport() {
	    return this.getTypedRuleContext(StyleImportContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TangleParserListener ) {
	        listener.enterImportStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TangleParserListener ) {
	        listener.exitImportStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TangleParserVisitor ) {
	        return visitor.visitImportStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ComponentImportContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TangleParser.RULE_componentImport;
    }

	IMPORT_ID() {
	    return this.getToken(TangleParser.IMPORT_ID, 0);
	};

	FROM() {
	    return this.getToken(TangleParser.FROM, 0);
	};

	IMPORT_PATH() {
	    return this.getToken(TangleParser.IMPORT_PATH, 0);
	};

	IMPORT_STATEMENT_END() {
	    return this.getToken(TangleParser.IMPORT_STATEMENT_END, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TangleParserListener ) {
	        listener.enterComponentImport(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TangleParserListener ) {
	        listener.exitComponentImport(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TangleParserVisitor ) {
	        return visitor.visitComponentImport(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StyleImportContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TangleParser.RULE_styleImport;
    }

	IMPORT_PATH() {
	    return this.getToken(TangleParser.IMPORT_PATH, 0);
	};

	IMPORT_STATEMENT_END() {
	    return this.getToken(TangleParser.IMPORT_STATEMENT_END, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TangleParserListener ) {
	        listener.enterStyleImport(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TangleParserListener ) {
	        listener.exitStyleImport(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TangleParserVisitor ) {
	        return visitor.visitStyleImport(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PropsDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TangleParser.RULE_propsDeclaration;
    }

	PROPS_OPEN() {
	    return this.getToken(TangleParser.PROPS_OPEN, 0);
	};

	propsContent() {
	    return this.getTypedRuleContext(PropsContentContext,0);
	};

	PROPS_CLOSE() {
	    return this.getToken(TangleParser.PROPS_CLOSE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TangleParserListener ) {
	        listener.enterPropsDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TangleParserListener ) {
	        listener.exitPropsDeclaration(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TangleParserVisitor ) {
	        return visitor.visitPropsDeclaration(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PropsContentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TangleParser.RULE_propsContent;
    }

	variableDeclaration = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(VariableDeclarationContext);
	    } else {
	        return this.getTypedRuleContext(VariableDeclarationContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof TangleParserListener ) {
	        listener.enterPropsContent(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TangleParserListener ) {
	        listener.exitPropsContent(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TangleParserVisitor ) {
	        return visitor.visitPropsContent(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CodeDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TangleParser.RULE_codeDeclaration;
    }

	CODE_OPEN() {
	    return this.getToken(TangleParser.CODE_OPEN, 0);
	};

	CODE_CLOSE() {
	    return this.getToken(TangleParser.CODE_CLOSE, 0);
	};

	codeContent = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CodeContentContext);
	    } else {
	        return this.getTypedRuleContext(CodeContentContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof TangleParserListener ) {
	        listener.enterCodeDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TangleParserListener ) {
	        listener.exitCodeDeclaration(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TangleParserVisitor ) {
	        return visitor.visitCodeDeclaration(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CodeContentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TangleParser.RULE_codeContent;
    }

	comment() {
	    return this.getTypedRuleContext(CommentContext,0);
	};

	variableDeclaration() {
	    return this.getTypedRuleContext(VariableDeclarationContext,0);
	};

	ifStatement() {
	    return this.getTypedRuleContext(IfStatementContext,0);
	};

	functionDeclaration() {
	    return this.getTypedRuleContext(FunctionDeclarationContext,0);
	};

	functionCall() {
	    return this.getTypedRuleContext(FunctionCallContext,0);
	};

	STATEMENT_END() {
	    return this.getToken(TangleParser.STATEMENT_END, 0);
	};

	RETURN() {
	    return this.getToken(TangleParser.RETURN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	updateExpression() {
	    return this.getTypedRuleContext(UpdateExpressionContext,0);
	};

	variableModification() {
	    return this.getTypedRuleContext(VariableModificationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TangleParserListener ) {
	        listener.enterCodeContent(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TangleParserListener ) {
	        listener.exitCodeContent(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TangleParserVisitor ) {
	        return visitor.visitCodeContent(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FunctionDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TangleParser.RULE_functionDeclaration;
    }

	FUNCTION() {
	    return this.getToken(TangleParser.FUNCTION, 0);
	};

	NAME() {
	    return this.getToken(TangleParser.NAME, 0);
	};

	LPAREN() {
	    return this.getToken(TangleParser.LPAREN, 0);
	};

	ARGS_CLOSE() {
	    return this.getToken(TangleParser.ARGS_CLOSE, 0);
	};

	CODE_BLOCK_OPEN() {
	    return this.getToken(TangleParser.CODE_BLOCK_OPEN, 0);
	};

	CODE_BLOCK_CLOSE() {
	    return this.getToken(TangleParser.CODE_BLOCK_CLOSE, 0);
	};

	functionArgs() {
	    return this.getTypedRuleContext(FunctionArgsContext,0);
	};

	codeContent = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CodeContentContext);
	    } else {
	        return this.getTypedRuleContext(CodeContentContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof TangleParserListener ) {
	        listener.enterFunctionDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TangleParserListener ) {
	        listener.exitFunctionDeclaration(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TangleParserVisitor ) {
	        return visitor.visitFunctionDeclaration(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FunctionArgsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TangleParser.RULE_functionArgs;
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	ARGS_SEPARATOR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TangleParser.ARGS_SEPARATOR);
	    } else {
	        return this.getToken(TangleParser.ARGS_SEPARATOR, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof TangleParserListener ) {
	        listener.enterFunctionArgs(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TangleParserListener ) {
	        listener.exitFunctionArgs(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TangleParserVisitor ) {
	        return visitor.visitFunctionArgs(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CommentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TangleParser.RULE_comment;
    }

	COMMENT_START() {
	    return this.getToken(TangleParser.COMMENT_START, 0);
	};

	COMMENT_CLOSE() {
	    return this.getToken(TangleParser.COMMENT_CLOSE, 0);
	};

	COMMENT_CONTENT() {
	    return this.getToken(TangleParser.COMMENT_CONTENT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TangleParserListener ) {
	        listener.enterComment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TangleParserListener ) {
	        listener.exitComment(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TangleParserVisitor ) {
	        return visitor.visitComment(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VariableDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TangleParser.RULE_variableDeclaration;
    }

	VAR_DEF() {
	    return this.getToken(TangleParser.VAR_DEF, 0);
	};

	NAME() {
	    return this.getToken(TangleParser.NAME, 0);
	};

	STATEMENT_END() {
	    return this.getToken(TangleParser.STATEMENT_END, 0);
	};

	ASSIGN() {
	    return this.getToken(TangleParser.ASSIGN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TangleParserListener ) {
	        listener.enterVariableDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TangleParserListener ) {
	        listener.exitVariableDeclaration(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TangleParserVisitor ) {
	        return visitor.visitVariableDeclaration(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VariableModificationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TangleParser.RULE_variableModification;
    }

	NAME() {
	    return this.getToken(TangleParser.NAME, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	STATEMENT_END() {
	    return this.getToken(TangleParser.STATEMENT_END, 0);
	};

	ASSIGN() {
	    return this.getToken(TangleParser.ASSIGN, 0);
	};

	ASSIGN_OPERATOR() {
	    return this.getToken(TangleParser.ASSIGN_OPERATOR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TangleParserListener ) {
	        listener.enterVariableModification(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TangleParserListener ) {
	        listener.exitVariableModification(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TangleParserVisitor ) {
	        return visitor.visitVariableModification(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IfStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TangleParser.RULE_ifStatement;
    }

	IF() {
	    return this.getToken(TangleParser.IF, 0);
	};

	EXPRESSION_OPEN() {
	    return this.getToken(TangleParser.EXPRESSION_OPEN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	EXPRESSION_CLOSE() {
	    return this.getToken(TangleParser.EXPRESSION_CLOSE, 0);
	};

	CODE_BLOCK_OPEN() {
	    return this.getToken(TangleParser.CODE_BLOCK_OPEN, 0);
	};

	CODE_BLOCK_CLOSE() {
	    return this.getToken(TangleParser.CODE_BLOCK_CLOSE, 0);
	};

	codeContent = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CodeContentContext);
	    } else {
	        return this.getTypedRuleContext(CodeContentContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof TangleParserListener ) {
	        listener.enterIfStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TangleParserListener ) {
	        listener.exitIfStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TangleParserVisitor ) {
	        return visitor.visitIfStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EmbeddedIfStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TangleParser.RULE_embeddedIfStatement;
    }

	EXPRESSION_OPEN() {
	    return this.getToken(TangleParser.EXPRESSION_OPEN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	EXPRESSION_CLOSE() {
	    return this.getToken(TangleParser.EXPRESSION_CLOSE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TangleParserListener ) {
	        listener.enterEmbeddedIfStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TangleParserListener ) {
	        listener.exitEmbeddedIfStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TangleParserVisitor ) {
	        return visitor.visitEmbeddedIfStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class UpdateExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TangleParser.RULE_updateExpression;
    }

	CREMENT_OPERATOR() {
	    return this.getToken(TangleParser.CREMENT_OPERATOR, 0);
	};

	NAME() {
	    return this.getToken(TangleParser.NAME, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TangleParserListener ) {
	        listener.enterUpdateExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TangleParserListener ) {
	        listener.exitUpdateExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TangleParserVisitor ) {
	        return visitor.visitUpdateExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ElementsDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TangleParser.RULE_elementsDeclaration;
    }

	TAG_OPEN() {
	    return this.getToken(TangleParser.TAG_OPEN, 0);
	};

	NAME = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TangleParser.NAME);
	    } else {
	        return this.getToken(TangleParser.NAME, i);
	    }
	};


	TAG_CLOSE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TangleParser.TAG_CLOSE);
	    } else {
	        return this.getToken(TangleParser.TAG_CLOSE, i);
	    }
	};


	content() {
	    return this.getTypedRuleContext(ContentContext,0);
	};

	CLOSING_OPEN() {
	    return this.getToken(TangleParser.CLOSING_OPEN, 0);
	};

	TAG_SLASH() {
	    return this.getToken(TangleParser.TAG_SLASH, 0);
	};

	elementAttribute = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ElementAttributeContext);
	    } else {
	        return this.getTypedRuleContext(ElementAttributeContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof TangleParserListener ) {
	        listener.enterElementsDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TangleParserListener ) {
	        listener.exitElementsDeclaration(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TangleParserVisitor ) {
	        return visitor.visitElementsDeclaration(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ContentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TangleParser.RULE_content;
    }

	elementsDeclaration = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ElementsDeclarationContext);
	    } else {
	        return this.getTypedRuleContext(ElementsDeclarationContext,i);
	    }
	};

	embeddedStatement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(EmbeddedStatementContext);
	    } else {
	        return this.getTypedRuleContext(EmbeddedStatementContext,i);
	    }
	};

	textContent = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TextContentContext);
	    } else {
	        return this.getTypedRuleContext(TextContentContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof TangleParserListener ) {
	        listener.enterContent(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TangleParserListener ) {
	        listener.exitContent(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TangleParserVisitor ) {
	        return visitor.visitContent(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ElementAttributeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TangleParser.RULE_elementAttribute;
    }

	NAME() {
	    return this.getToken(TangleParser.NAME, 0);
	};

	ASSIGN() {
	    return this.getToken(TangleParser.ASSIGN, 0);
	};

	embeddedStatement() {
	    return this.getTypedRuleContext(EmbeddedStatementContext,0);
	};

	stringType() {
	    return this.getTypedRuleContext(StringTypeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TangleParserListener ) {
	        listener.enterElementAttribute(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TangleParserListener ) {
	        listener.exitElementAttribute(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TangleParserVisitor ) {
	        return visitor.visitElementAttribute(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EmbeddedStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TangleParser.RULE_embeddedStatement;
    }

	embeddedIf() {
	    return this.getTypedRuleContext(EmbeddedIfContext,0);
	};

	EMBEDDED_OPEN() {
	    return this.getToken(TangleParser.EMBEDDED_OPEN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	EMBEDDED_CLOSE() {
	    return this.getToken(TangleParser.EMBEDDED_CLOSE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TangleParserListener ) {
	        listener.enterEmbeddedStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TangleParserListener ) {
	        listener.exitEmbeddedStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TangleParserVisitor ) {
	        return visitor.visitEmbeddedStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TangleParser.RULE_expression;
    }

	operand = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(OperandContext);
	    } else {
	        return this.getTypedRuleContext(OperandContext,i);
	    }
	};

	operator = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(OperatorContext);
	    } else {
	        return this.getTypedRuleContext(OperatorContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof TangleParserListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TangleParserListener ) {
	        listener.exitExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TangleParserVisitor ) {
	        return visitor.visitExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class OperandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TangleParser.RULE_operand;
    }

	functionCall() {
	    return this.getTypedRuleContext(FunctionCallContext,0);
	};

	NOT_OPERATOR() {
	    return this.getToken(TangleParser.NOT_OPERATOR, 0);
	};

	operand() {
	    return this.getTypedRuleContext(OperandContext,0);
	};

	LPAREN() {
	    return this.getToken(TangleParser.LPAREN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	ARGS_CLOSE() {
	    return this.getToken(TangleParser.ARGS_CLOSE, 0);
	};

	updateExpression() {
	    return this.getTypedRuleContext(UpdateExpressionContext,0);
	};

	variableTypes() {
	    return this.getTypedRuleContext(VariableTypesContext,0);
	};

	NAME() {
	    return this.getToken(TangleParser.NAME, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TangleParserListener ) {
	        listener.enterOperand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TangleParserListener ) {
	        listener.exitOperand(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TangleParserVisitor ) {
	        return visitor.visitOperand(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EmbeddedIfContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TangleParser.RULE_embeddedIf;
    }

	EMBEDDED_OPEN = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TangleParser.EMBEDDED_OPEN);
	    } else {
	        return this.getToken(TangleParser.EMBEDDED_OPEN, i);
	    }
	};


	IF() {
	    return this.getToken(TangleParser.IF, 0);
	};

	embeddedIfStatement() {
	    return this.getTypedRuleContext(EmbeddedIfStatementContext,0);
	};

	EMBEDDED_CLOSE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TangleParser.EMBEDDED_CLOSE);
	    } else {
	        return this.getToken(TangleParser.EMBEDDED_CLOSE, i);
	    }
	};


	content() {
	    return this.getTypedRuleContext(ContentContext,0);
	};

	EMBEDDED_END_IF() {
	    return this.getToken(TangleParser.EMBEDDED_END_IF, 0);
	};

	embeddedElseIf = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(EmbeddedElseIfContext);
	    } else {
	        return this.getTypedRuleContext(EmbeddedElseIfContext,i);
	    }
	};

	embeddedElse() {
	    return this.getTypedRuleContext(EmbeddedElseContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TangleParserListener ) {
	        listener.enterEmbeddedIf(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TangleParserListener ) {
	        listener.exitEmbeddedIf(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TangleParserVisitor ) {
	        return visitor.visitEmbeddedIf(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EmbeddedElseIfContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TangleParser.RULE_embeddedElseIf;
    }

	EMBEDDED_OPEN() {
	    return this.getToken(TangleParser.EMBEDDED_OPEN, 0);
	};

	ELSE_IF() {
	    return this.getToken(TangleParser.ELSE_IF, 0);
	};

	embeddedIfStatement() {
	    return this.getTypedRuleContext(EmbeddedIfStatementContext,0);
	};

	EMBEDDED_CLOSE() {
	    return this.getToken(TangleParser.EMBEDDED_CLOSE, 0);
	};

	content() {
	    return this.getTypedRuleContext(ContentContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TangleParserListener ) {
	        listener.enterEmbeddedElseIf(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TangleParserListener ) {
	        listener.exitEmbeddedElseIf(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TangleParserVisitor ) {
	        return visitor.visitEmbeddedElseIf(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EmbeddedElseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TangleParser.RULE_embeddedElse;
    }

	EMBEDDED_OPEN() {
	    return this.getToken(TangleParser.EMBEDDED_OPEN, 0);
	};

	ELSE() {
	    return this.getToken(TangleParser.ELSE, 0);
	};

	EMBEDDED_CLOSE() {
	    return this.getToken(TangleParser.EMBEDDED_CLOSE, 0);
	};

	content() {
	    return this.getTypedRuleContext(ContentContext,0);
	};

	embeddedIfStatement() {
	    return this.getTypedRuleContext(EmbeddedIfStatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TangleParserListener ) {
	        listener.enterEmbeddedElse(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TangleParserListener ) {
	        listener.exitEmbeddedElse(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TangleParserVisitor ) {
	        return visitor.visitEmbeddedElse(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FunctionCallContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TangleParser.RULE_functionCall;
    }

	NAME = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TangleParser.NAME);
	    } else {
	        return this.getToken(TangleParser.NAME, i);
	    }
	};


	LPAREN() {
	    return this.getToken(TangleParser.LPAREN, 0);
	};

	ARGS_CLOSE() {
	    return this.getToken(TangleParser.ARGS_CLOSE, 0);
	};

	METHOD_CALL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TangleParser.METHOD_CALL);
	    } else {
	        return this.getToken(TangleParser.METHOD_CALL, i);
	    }
	};


	functionCallArgs() {
	    return this.getTypedRuleContext(FunctionCallArgsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TangleParserListener ) {
	        listener.enterFunctionCall(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TangleParserListener ) {
	        listener.exitFunctionCall(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TangleParserVisitor ) {
	        return visitor.visitFunctionCall(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FunctionCallArgsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TangleParser.RULE_functionCallArgs;
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	ARGS_SEPARATOR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TangleParser.ARGS_SEPARATOR);
	    } else {
	        return this.getToken(TangleParser.ARGS_SEPARATOR, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof TangleParserListener ) {
	        listener.enterFunctionCallArgs(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TangleParserListener ) {
	        listener.exitFunctionCallArgs(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TangleParserVisitor ) {
	        return visitor.visitFunctionCallArgs(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VariableTypesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TangleParser.RULE_variableTypes;
    }

	INT() {
	    return this.getToken(TangleParser.INT, 0);
	};

	stringType() {
	    return this.getTypedRuleContext(StringTypeContext,0);
	};

	BOOL() {
	    return this.getToken(TangleParser.BOOL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TangleParserListener ) {
	        listener.enterVariableTypes(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TangleParserListener ) {
	        listener.exitVariableTypes(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TangleParserVisitor ) {
	        return visitor.visitVariableTypes(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StringTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TangleParser.RULE_stringType;
    }

	STRING_VALUE() {
	    return this.getToken(TangleParser.STRING_VALUE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TangleParserListener ) {
	        listener.enterStringType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TangleParserListener ) {
	        listener.exitStringType(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TangleParserVisitor ) {
	        return visitor.visitStringType(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TextContentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TangleParser.RULE_textContent;
    }

	TEXT() {
	    return this.getToken(TangleParser.TEXT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TangleParserListener ) {
	        listener.enterTextContent(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TangleParserListener ) {
	        listener.exitTextContent(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TangleParserVisitor ) {
	        return visitor.visitTextContent(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class OperatorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TangleParser.RULE_operator;
    }

	ARITHMETIC_OPERATOR() {
	    return this.getToken(TangleParser.ARITHMETIC_OPERATOR, 0);
	};

	LOGICAL_OPERATOR() {
	    return this.getToken(TangleParser.LOGICAL_OPERATOR, 0);
	};

	COMPARISON_OPERATOR() {
	    return this.getToken(TangleParser.COMPARISON_OPERATOR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TangleParserListener ) {
	        listener.enterOperator(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TangleParserListener ) {
	        listener.exitOperator(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TangleParserVisitor ) {
	        return visitor.visitOperator(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




TangleParser.DocumentContext = DocumentContext; 
TangleParser.ImportDeclarationContext = ImportDeclarationContext; 
TangleParser.ImportStatementContext = ImportStatementContext; 
TangleParser.ComponentImportContext = ComponentImportContext; 
TangleParser.StyleImportContext = StyleImportContext; 
TangleParser.PropsDeclarationContext = PropsDeclarationContext; 
TangleParser.PropsContentContext = PropsContentContext; 
TangleParser.CodeDeclarationContext = CodeDeclarationContext; 
TangleParser.CodeContentContext = CodeContentContext; 
TangleParser.FunctionDeclarationContext = FunctionDeclarationContext; 
TangleParser.FunctionArgsContext = FunctionArgsContext; 
TangleParser.CommentContext = CommentContext; 
TangleParser.VariableDeclarationContext = VariableDeclarationContext; 
TangleParser.VariableModificationContext = VariableModificationContext; 
TangleParser.IfStatementContext = IfStatementContext; 
TangleParser.EmbeddedIfStatementContext = EmbeddedIfStatementContext; 
TangleParser.UpdateExpressionContext = UpdateExpressionContext; 
TangleParser.ElementsDeclarationContext = ElementsDeclarationContext; 
TangleParser.ContentContext = ContentContext; 
TangleParser.ElementAttributeContext = ElementAttributeContext; 
TangleParser.EmbeddedStatementContext = EmbeddedStatementContext; 
TangleParser.ExpressionContext = ExpressionContext; 
TangleParser.OperandContext = OperandContext; 
TangleParser.EmbeddedIfContext = EmbeddedIfContext; 
TangleParser.EmbeddedElseIfContext = EmbeddedElseIfContext; 
TangleParser.EmbeddedElseContext = EmbeddedElseContext; 
TangleParser.FunctionCallContext = FunctionCallContext; 
TangleParser.FunctionCallArgsContext = FunctionCallArgsContext; 
TangleParser.VariableTypesContext = VariableTypesContext; 
TangleParser.StringTypeContext = StringTypeContext; 
TangleParser.TextContentContext = TextContentContext; 
TangleParser.OperatorContext = OperatorContext; 
