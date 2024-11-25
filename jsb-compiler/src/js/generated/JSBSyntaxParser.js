// Generated from JSBSyntax.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import JSBSyntaxListener from './JSBSyntaxListener.js';
import JSBSyntaxVisitor from './JSBSyntaxVisitor.js';

const serializedATN = [4,1,41,215,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,1,0,3,0,46,8,0,1,0,3,0,49,8,0,1,0,3,0,52,8,0,1,1,1,1,1,
1,1,1,1,2,1,2,1,2,1,2,1,3,4,3,63,8,3,11,3,12,3,64,1,4,3,4,68,8,4,1,5,1,5,
1,5,1,5,5,5,74,8,5,10,5,12,5,77,9,5,1,6,1,6,1,6,1,6,1,6,1,6,1,7,3,7,86,8,
7,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,8,1,9,1,9,1,10,1,10,1,10,3,10,103,
8,10,1,10,1,10,1,11,1,11,1,11,5,11,110,8,11,10,11,12,11,113,9,11,1,12,1,
12,1,12,1,12,1,13,1,13,5,13,121,8,13,10,13,12,13,124,9,13,1,14,1,14,1,14,
1,14,1,14,1,14,3,14,132,8,14,1,15,1,15,1,15,1,16,1,16,1,16,1,16,1,16,1,16,
1,16,3,16,144,8,16,1,17,1,17,1,17,5,17,149,8,17,10,17,12,17,152,9,17,1,17,
1,17,5,17,156,8,17,10,17,12,17,159,9,17,1,17,1,17,1,17,1,17,1,17,1,17,5,
17,167,8,17,10,17,12,17,170,9,17,1,17,1,17,3,17,174,8,17,1,18,1,18,4,18,
178,8,18,11,18,12,18,179,1,19,1,19,1,19,1,19,1,19,1,19,3,19,188,8,19,1,20,
1,20,1,20,1,20,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,3,21,202,8,21,1,21,
1,21,1,21,1,21,1,21,1,21,5,21,210,8,21,10,21,12,21,213,9,21,1,21,0,1,42,
22,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,0,3,1,0,
11,12,2,0,18,19,24,28,1,0,29,33,225,0,45,1,0,0,0,2,53,1,0,0,0,4,57,1,0,0,
0,6,62,1,0,0,0,8,67,1,0,0,0,10,75,1,0,0,0,12,78,1,0,0,0,14,85,1,0,0,0,16,
91,1,0,0,0,18,97,1,0,0,0,20,99,1,0,0,0,22,106,1,0,0,0,24,114,1,0,0,0,26,
122,1,0,0,0,28,131,1,0,0,0,30,133,1,0,0,0,32,136,1,0,0,0,34,173,1,0,0,0,
36,177,1,0,0,0,38,187,1,0,0,0,40,189,1,0,0,0,42,201,1,0,0,0,44,46,3,2,1,
0,45,44,1,0,0,0,45,46,1,0,0,0,46,48,1,0,0,0,47,49,3,4,2,0,48,47,1,0,0,0,
48,49,1,0,0,0,49,51,1,0,0,0,50,52,3,6,3,0,51,50,1,0,0,0,51,52,1,0,0,0,52,
1,1,0,0,0,53,54,5,1,0,0,54,55,3,8,4,0,55,56,5,2,0,0,56,3,1,0,0,0,57,58,5,
3,0,0,58,59,3,10,5,0,59,60,5,4,0,0,60,5,1,0,0,0,61,63,3,34,17,0,62,61,1,
0,0,0,63,64,1,0,0,0,64,62,1,0,0,0,64,65,1,0,0,0,65,7,1,0,0,0,66,68,3,12,
6,0,67,66,1,0,0,0,67,68,1,0,0,0,68,9,1,0,0,0,69,74,3,12,6,0,70,74,3,14,7,
0,71,74,3,16,8,0,72,74,5,34,0,0,73,69,1,0,0,0,73,70,1,0,0,0,73,71,1,0,0,
0,73,72,1,0,0,0,74,77,1,0,0,0,75,73,1,0,0,0,75,76,1,0,0,0,76,11,1,0,0,0,
77,75,1,0,0,0,78,79,3,18,9,0,79,80,5,35,0,0,80,81,5,5,0,0,81,82,3,42,21,
0,82,83,5,6,0,0,83,13,1,0,0,0,84,86,5,7,0,0,85,84,1,0,0,0,85,86,1,0,0,0,
86,87,1,0,0,0,87,88,5,8,0,0,88,89,3,20,10,0,89,90,3,24,12,0,90,15,1,0,0,
0,91,92,5,9,0,0,92,93,5,35,0,0,93,94,5,10,0,0,94,95,5,36,0,0,95,96,5,6,0,
0,96,17,1,0,0,0,97,98,7,0,0,0,98,19,1,0,0,0,99,100,5,35,0,0,100,102,5,13,
0,0,101,103,3,22,11,0,102,101,1,0,0,0,102,103,1,0,0,0,103,104,1,0,0,0,104,
105,5,14,0,0,105,21,1,0,0,0,106,111,3,42,21,0,107,108,5,15,0,0,108,110,3,
42,21,0,109,107,1,0,0,0,110,113,1,0,0,0,111,109,1,0,0,0,111,112,1,0,0,0,
112,23,1,0,0,0,113,111,1,0,0,0,114,115,5,39,0,0,115,116,3,26,13,0,116,117,
5,40,0,0,117,25,1,0,0,0,118,121,3,28,14,0,119,121,5,41,0,0,120,118,1,0,0,
0,120,119,1,0,0,0,121,124,1,0,0,0,122,120,1,0,0,0,122,123,1,0,0,0,123,27,
1,0,0,0,124,122,1,0,0,0,125,132,3,12,6,0,126,132,3,14,7,0,127,132,3,16,8,
0,128,132,3,30,15,0,129,132,3,32,16,0,130,132,5,34,0,0,131,125,1,0,0,0,131,
126,1,0,0,0,131,127,1,0,0,0,131,128,1,0,0,0,131,129,1,0,0,0,131,130,1,0,
0,0,132,29,1,0,0,0,133,134,3,42,21,0,134,135,5,6,0,0,135,31,1,0,0,0,136,
137,5,16,0,0,137,138,5,13,0,0,138,139,3,42,21,0,139,140,5,14,0,0,140,143,
3,28,14,0,141,142,5,17,0,0,142,144,3,28,14,0,143,141,1,0,0,0,143,144,1,0,
0,0,144,33,1,0,0,0,145,146,5,18,0,0,146,150,5,35,0,0,147,149,3,38,19,0,148,
147,1,0,0,0,149,152,1,0,0,0,150,148,1,0,0,0,150,151,1,0,0,0,151,153,1,0,
0,0,152,150,1,0,0,0,153,157,5,19,0,0,154,156,3,36,18,0,155,154,1,0,0,0,156,
159,1,0,0,0,157,155,1,0,0,0,157,158,1,0,0,0,158,160,1,0,0,0,159,157,1,0,
0,0,160,161,5,20,0,0,161,162,5,35,0,0,162,174,5,19,0,0,163,164,5,18,0,0,
164,168,5,35,0,0,165,167,3,38,19,0,166,165,1,0,0,0,167,170,1,0,0,0,168,166,
1,0,0,0,168,169,1,0,0,0,169,171,1,0,0,0,170,168,1,0,0,0,171,174,5,21,0,0,
172,174,5,37,0,0,173,145,1,0,0,0,173,163,1,0,0,0,173,172,1,0,0,0,174,35,
1,0,0,0,175,178,3,34,17,0,176,178,5,37,0,0,177,175,1,0,0,0,177,176,1,0,0,
0,178,179,1,0,0,0,179,177,1,0,0,0,179,180,1,0,0,0,180,37,1,0,0,0,181,182,
5,35,0,0,182,183,5,5,0,0,183,188,5,36,0,0,184,185,5,35,0,0,185,186,5,5,0,
0,186,188,3,40,20,0,187,181,1,0,0,0,187,184,1,0,0,0,188,39,1,0,0,0,189,190,
5,22,0,0,190,191,3,42,21,0,191,192,5,23,0,0,192,41,1,0,0,0,193,194,6,21,
-1,0,194,195,5,13,0,0,195,196,3,42,21,0,196,197,5,14,0,0,197,202,1,0,0,0,
198,202,5,36,0,0,199,202,5,35,0,0,200,202,3,20,10,0,201,193,1,0,0,0,201,
198,1,0,0,0,201,199,1,0,0,0,201,200,1,0,0,0,202,211,1,0,0,0,203,204,10,6,
0,0,204,205,7,1,0,0,205,210,3,42,21,7,206,207,10,5,0,0,207,208,7,2,0,0,208,
210,3,42,21,6,209,203,1,0,0,0,209,206,1,0,0,0,210,213,1,0,0,0,211,209,1,
0,0,0,211,212,1,0,0,0,212,43,1,0,0,0,213,211,1,0,0,0,24,45,48,51,64,67,73,
75,85,102,111,120,122,131,143,150,157,168,173,177,179,187,201,209,211];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class JSBSyntaxParser extends antlr4.Parser {

    static grammarFileName = "JSBSyntax.g4";
    static literalNames = [ null, "'<props>'", "'</props>'", "'<code>'", 
                            "'</code>'", "'='", "';'", "'export'", "'function'", 
                            "'import'", "'from'", "'let'", "'const'", "'('", 
                            "')'", "','", "'if'", "'else'", "'<'", "'>'", 
                            "'</'", "'/>'", "'{{'", "'}}'", "'==='", "'=='", 
                            "'!='", "'<='", "'>='", "'+'", "'-'", "'*'", 
                            "'/'", "'%'", null, null, null, null, null, 
                            "'{'", "'}'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, "LINE_COMMENT", "ID", "STRING", 
                             "TEXT", "WS", "BRACE_OPEN", "BRACE_CLOSE", 
                             "ANY_CHAR_NO_BRACE" ];
    static ruleNames = [ "document", "propsDeclaration", "codeDeclaration", 
                         "contentDeclaration", "propsContent", "codeContent", 
                         "variableDeclaration", "functionDeclaration", "importDeclaration", 
                         "variableKind", "functionCall", "functionArgs", 
                         "functionContent", "functionContentBody", "statement", 
                         "expressionStatement", "ifStatement", "element", 
                         "elementContent", "attribute", "expressionInBraces", 
                         "expression" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = JSBSyntaxParser.ruleNames;
        this.literalNames = JSBSyntaxParser.literalNames;
        this.symbolicNames = JSBSyntaxParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 21:
    	    		return this.expression_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 6);
    		case 1:
    			return this.precpred(this._ctx, 5);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	document() {
	    let localctx = new DocumentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, JSBSyntaxParser.RULE_document);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 45;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===1) {
	            this.state = 44;
	            this.propsDeclaration();
	        }

	        this.state = 48;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===3) {
	            this.state = 47;
	            this.codeDeclaration();
	        }

	        this.state = 51;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===18 || _la===37) {
	            this.state = 50;
	            this.contentDeclaration();
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



	propsDeclaration() {
	    let localctx = new PropsDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, JSBSyntaxParser.RULE_propsDeclaration);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 53;
	        this.match(JSBSyntaxParser.T__0);
	        this.state = 54;
	        this.propsContent();
	        this.state = 55;
	        this.match(JSBSyntaxParser.T__1);
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
	    this.enterRule(localctx, 4, JSBSyntaxParser.RULE_codeDeclaration);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 57;
	        this.match(JSBSyntaxParser.T__2);
	        this.state = 58;
	        this.codeContent();
	        this.state = 59;
	        this.match(JSBSyntaxParser.T__3);
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



	contentDeclaration() {
	    let localctx = new ContentDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, JSBSyntaxParser.RULE_contentDeclaration);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 62; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 61;
	            this.element();
	            this.state = 64; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===18 || _la===37);
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
	    this.enterRule(localctx, 8, JSBSyntaxParser.RULE_propsContent);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 67;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===11 || _la===12) {
	            this.state = 66;
	            this.variableDeclaration();
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



	codeContent() {
	    let localctx = new CodeContentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, JSBSyntaxParser.RULE_codeContent);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 75;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 7)) & ~0x1f) === 0 && ((1 << (_la - 7)) & 134217783) !== 0)) {
	            this.state = 73;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 11:
	            case 12:
	                this.state = 69;
	                this.variableDeclaration();
	                break;
	            case 7:
	            case 8:
	                this.state = 70;
	                this.functionDeclaration();
	                break;
	            case 9:
	                this.state = 71;
	                this.importDeclaration();
	                break;
	            case 34:
	                this.state = 72;
	                this.match(JSBSyntaxParser.LINE_COMMENT);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 77;
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



	variableDeclaration() {
	    let localctx = new VariableDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, JSBSyntaxParser.RULE_variableDeclaration);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 78;
	        this.variableKind();
	        this.state = 79;
	        this.match(JSBSyntaxParser.ID);
	        this.state = 80;
	        this.match(JSBSyntaxParser.T__4);
	        this.state = 81;
	        this.expression(0);
	        this.state = 82;
	        this.match(JSBSyntaxParser.T__5);
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
	    this.enterRule(localctx, 14, JSBSyntaxParser.RULE_functionDeclaration);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 85;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===7) {
	            this.state = 84;
	            this.match(JSBSyntaxParser.T__6);
	        }

	        this.state = 87;
	        this.match(JSBSyntaxParser.T__7);
	        this.state = 88;
	        this.functionCall();
	        this.state = 89;
	        this.functionContent();
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
	    this.enterRule(localctx, 16, JSBSyntaxParser.RULE_importDeclaration);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 91;
	        this.match(JSBSyntaxParser.T__8);
	        this.state = 92;
	        this.match(JSBSyntaxParser.ID);
	        this.state = 93;
	        this.match(JSBSyntaxParser.T__9);
	        this.state = 94;
	        this.match(JSBSyntaxParser.STRING);
	        this.state = 95;
	        this.match(JSBSyntaxParser.T__5);
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



	variableKind() {
	    let localctx = new VariableKindContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, JSBSyntaxParser.RULE_variableKind);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 97;
	        _la = this._input.LA(1);
	        if(!(_la===11 || _la===12)) {
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



	functionCall() {
	    let localctx = new FunctionCallContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, JSBSyntaxParser.RULE_functionCall);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 99;
	        this.match(JSBSyntaxParser.ID);
	        this.state = 100;
	        this.match(JSBSyntaxParser.T__12);
	        this.state = 102;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 13)) & ~0x1f) === 0 && ((1 << (_la - 13)) & 12582913) !== 0)) {
	            this.state = 101;
	            this.functionArgs();
	        }

	        this.state = 104;
	        this.match(JSBSyntaxParser.T__13);
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
	    this.enterRule(localctx, 22, JSBSyntaxParser.RULE_functionArgs);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 106;
	        this.expression(0);
	        this.state = 111;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===15) {
	            this.state = 107;
	            this.match(JSBSyntaxParser.T__14);
	            this.state = 108;
	            this.expression(0);
	            this.state = 113;
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



	functionContent() {
	    let localctx = new FunctionContentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, JSBSyntaxParser.RULE_functionContent);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 114;
	        this.match(JSBSyntaxParser.BRACE_OPEN);
	        this.state = 115;
	        this.functionContentBody();
	        this.state = 116;
	        this.match(JSBSyntaxParser.BRACE_CLOSE);
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



	functionContentBody() {
	    let localctx = new FunctionContentBodyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, JSBSyntaxParser.RULE_functionContentBody);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 122;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 80768) !== 0) || ((((_la - 34)) & ~0x1f) === 0 && ((1 << (_la - 34)) & 135) !== 0)) {
	            this.state = 120;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 7:
	            case 8:
	            case 9:
	            case 11:
	            case 12:
	            case 13:
	            case 16:
	            case 34:
	            case 35:
	            case 36:
	                this.state = 118;
	                this.statement();
	                break;
	            case 41:
	                this.state = 119;
	                this.match(JSBSyntaxParser.ANY_CHAR_NO_BRACE);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 124;
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



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, JSBSyntaxParser.RULE_statement);
	    try {
	        this.state = 131;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 11:
	        case 12:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 125;
	            this.variableDeclaration();
	            break;
	        case 7:
	        case 8:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 126;
	            this.functionDeclaration();
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 127;
	            this.importDeclaration();
	            break;
	        case 13:
	        case 35:
	        case 36:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 128;
	            this.expressionStatement();
	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 129;
	            this.ifStatement();
	            break;
	        case 34:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 130;
	            this.match(JSBSyntaxParser.LINE_COMMENT);
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



	expressionStatement() {
	    let localctx = new ExpressionStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, JSBSyntaxParser.RULE_expressionStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 133;
	        this.expression(0);
	        this.state = 134;
	        this.match(JSBSyntaxParser.T__5);
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
	    this.enterRule(localctx, 32, JSBSyntaxParser.RULE_ifStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 136;
	        this.match(JSBSyntaxParser.T__15);
	        this.state = 137;
	        this.match(JSBSyntaxParser.T__12);
	        this.state = 138;
	        this.expression(0);
	        this.state = 139;
	        this.match(JSBSyntaxParser.T__13);
	        this.state = 140;
	        this.statement();
	        this.state = 143;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
	        if(la_===1) {
	            this.state = 141;
	            this.match(JSBSyntaxParser.T__16);
	            this.state = 142;
	            this.statement();

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



	element() {
	    let localctx = new ElementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, JSBSyntaxParser.RULE_element);
	    var _la = 0;
	    try {
	        this.state = 173;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 145;
	            this.match(JSBSyntaxParser.T__17);
	            this.state = 146;
	            this.match(JSBSyntaxParser.ID);
	            this.state = 150;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===35) {
	                this.state = 147;
	                this.attribute();
	                this.state = 152;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 153;
	            this.match(JSBSyntaxParser.T__18);
	            this.state = 157;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===18 || _la===37) {
	                this.state = 154;
	                this.elementContent();
	                this.state = 159;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 160;
	            this.match(JSBSyntaxParser.T__19);
	            this.state = 161;
	            this.match(JSBSyntaxParser.ID);
	            this.state = 162;
	            this.match(JSBSyntaxParser.T__18);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 163;
	            this.match(JSBSyntaxParser.T__17);
	            this.state = 164;
	            this.match(JSBSyntaxParser.ID);
	            this.state = 168;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===35) {
	                this.state = 165;
	                this.attribute();
	                this.state = 170;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 171;
	            this.match(JSBSyntaxParser.T__20);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 172;
	            this.match(JSBSyntaxParser.TEXT);
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



	elementContent() {
	    let localctx = new ElementContentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, JSBSyntaxParser.RULE_elementContent);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 177; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 177;
	        		this._errHandler.sync(this);
	        		var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
	        		switch(la_) {
	        		case 1:
	        		    this.state = 175;
	        		    this.element();
	        		    break;

	        		case 2:
	        		    this.state = 176;
	        		    this.match(JSBSyntaxParser.TEXT);
	        		    break;

	        		}
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 179; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,19, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
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



	attribute() {
	    let localctx = new AttributeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, JSBSyntaxParser.RULE_attribute);
	    try {
	        this.state = 187;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 181;
	            this.match(JSBSyntaxParser.ID);
	            this.state = 182;
	            this.match(JSBSyntaxParser.T__4);
	            this.state = 183;
	            this.match(JSBSyntaxParser.STRING);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 184;
	            this.match(JSBSyntaxParser.ID);
	            this.state = 185;
	            this.match(JSBSyntaxParser.T__4);
	            this.state = 186;
	            this.expressionInBraces();
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



	expressionInBraces() {
	    let localctx = new ExpressionInBracesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, JSBSyntaxParser.RULE_expressionInBraces);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 189;
	        this.match(JSBSyntaxParser.T__21);
	        this.state = 190;
	        this.expression(0);
	        this.state = 191;
	        this.match(JSBSyntaxParser.T__22);
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


	expression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExpressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 42;
	    this.enterRecursionRule(localctx, 42, JSBSyntaxParser.RULE_expression, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 201;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 194;
	            this.match(JSBSyntaxParser.T__12);
	            this.state = 195;
	            this.expression(0);
	            this.state = 196;
	            this.match(JSBSyntaxParser.T__13);
	            break;

	        case 2:
	            this.state = 198;
	            this.match(JSBSyntaxParser.STRING);
	            break;

	        case 3:
	            this.state = 199;
	            this.match(JSBSyntaxParser.ID);
	            break;

	        case 4:
	            this.state = 200;
	            this.functionCall();
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 211;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,23,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 209;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, JSBSyntaxParser.RULE_expression);
	                    this.state = 203;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 204;
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 520880128) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 205;
	                    this.expression(7);
	                    break;

	                case 2:
	                    localctx = new ExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, JSBSyntaxParser.RULE_expression);
	                    this.state = 206;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 207;
	                    _la = this._input.LA(1);
	                    if(!(((((_la - 29)) & ~0x1f) === 0 && ((1 << (_la - 29)) & 31) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 208;
	                    this.expression(6);
	                    break;

	                } 
	            }
	            this.state = 213;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,23,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


}

JSBSyntaxParser.EOF = antlr4.Token.EOF;
JSBSyntaxParser.T__0 = 1;
JSBSyntaxParser.T__1 = 2;
JSBSyntaxParser.T__2 = 3;
JSBSyntaxParser.T__3 = 4;
JSBSyntaxParser.T__4 = 5;
JSBSyntaxParser.T__5 = 6;
JSBSyntaxParser.T__6 = 7;
JSBSyntaxParser.T__7 = 8;
JSBSyntaxParser.T__8 = 9;
JSBSyntaxParser.T__9 = 10;
JSBSyntaxParser.T__10 = 11;
JSBSyntaxParser.T__11 = 12;
JSBSyntaxParser.T__12 = 13;
JSBSyntaxParser.T__13 = 14;
JSBSyntaxParser.T__14 = 15;
JSBSyntaxParser.T__15 = 16;
JSBSyntaxParser.T__16 = 17;
JSBSyntaxParser.T__17 = 18;
JSBSyntaxParser.T__18 = 19;
JSBSyntaxParser.T__19 = 20;
JSBSyntaxParser.T__20 = 21;
JSBSyntaxParser.T__21 = 22;
JSBSyntaxParser.T__22 = 23;
JSBSyntaxParser.T__23 = 24;
JSBSyntaxParser.T__24 = 25;
JSBSyntaxParser.T__25 = 26;
JSBSyntaxParser.T__26 = 27;
JSBSyntaxParser.T__27 = 28;
JSBSyntaxParser.T__28 = 29;
JSBSyntaxParser.T__29 = 30;
JSBSyntaxParser.T__30 = 31;
JSBSyntaxParser.T__31 = 32;
JSBSyntaxParser.T__32 = 33;
JSBSyntaxParser.LINE_COMMENT = 34;
JSBSyntaxParser.ID = 35;
JSBSyntaxParser.STRING = 36;
JSBSyntaxParser.TEXT = 37;
JSBSyntaxParser.WS = 38;
JSBSyntaxParser.BRACE_OPEN = 39;
JSBSyntaxParser.BRACE_CLOSE = 40;
JSBSyntaxParser.ANY_CHAR_NO_BRACE = 41;

JSBSyntaxParser.RULE_document = 0;
JSBSyntaxParser.RULE_propsDeclaration = 1;
JSBSyntaxParser.RULE_codeDeclaration = 2;
JSBSyntaxParser.RULE_contentDeclaration = 3;
JSBSyntaxParser.RULE_propsContent = 4;
JSBSyntaxParser.RULE_codeContent = 5;
JSBSyntaxParser.RULE_variableDeclaration = 6;
JSBSyntaxParser.RULE_functionDeclaration = 7;
JSBSyntaxParser.RULE_importDeclaration = 8;
JSBSyntaxParser.RULE_variableKind = 9;
JSBSyntaxParser.RULE_functionCall = 10;
JSBSyntaxParser.RULE_functionArgs = 11;
JSBSyntaxParser.RULE_functionContent = 12;
JSBSyntaxParser.RULE_functionContentBody = 13;
JSBSyntaxParser.RULE_statement = 14;
JSBSyntaxParser.RULE_expressionStatement = 15;
JSBSyntaxParser.RULE_ifStatement = 16;
JSBSyntaxParser.RULE_element = 17;
JSBSyntaxParser.RULE_elementContent = 18;
JSBSyntaxParser.RULE_attribute = 19;
JSBSyntaxParser.RULE_expressionInBraces = 20;
JSBSyntaxParser.RULE_expression = 21;

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
        this.ruleIndex = JSBSyntaxParser.RULE_document;
    }

	propsDeclaration() {
	    return this.getTypedRuleContext(PropsDeclarationContext,0);
	};

	codeDeclaration() {
	    return this.getTypedRuleContext(CodeDeclarationContext,0);
	};

	contentDeclaration() {
	    return this.getTypedRuleContext(ContentDeclarationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JSBSyntaxListener ) {
	        listener.enterDocument(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSBSyntaxListener ) {
	        listener.exitDocument(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSBSyntaxVisitor ) {
	        return visitor.visitDocument(this);
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
        this.ruleIndex = JSBSyntaxParser.RULE_propsDeclaration;
    }

	propsContent() {
	    return this.getTypedRuleContext(PropsContentContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JSBSyntaxListener ) {
	        listener.enterPropsDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSBSyntaxListener ) {
	        listener.exitPropsDeclaration(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSBSyntaxVisitor ) {
	        return visitor.visitPropsDeclaration(this);
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
        this.ruleIndex = JSBSyntaxParser.RULE_codeDeclaration;
    }

	codeContent() {
	    return this.getTypedRuleContext(CodeContentContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JSBSyntaxListener ) {
	        listener.enterCodeDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSBSyntaxListener ) {
	        listener.exitCodeDeclaration(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSBSyntaxVisitor ) {
	        return visitor.visitCodeDeclaration(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ContentDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JSBSyntaxParser.RULE_contentDeclaration;
    }

	element = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ElementContext);
	    } else {
	        return this.getTypedRuleContext(ElementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof JSBSyntaxListener ) {
	        listener.enterContentDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSBSyntaxListener ) {
	        listener.exitContentDeclaration(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSBSyntaxVisitor ) {
	        return visitor.visitContentDeclaration(this);
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
        this.ruleIndex = JSBSyntaxParser.RULE_propsContent;
    }

	variableDeclaration() {
	    return this.getTypedRuleContext(VariableDeclarationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JSBSyntaxListener ) {
	        listener.enterPropsContent(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSBSyntaxListener ) {
	        listener.exitPropsContent(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSBSyntaxVisitor ) {
	        return visitor.visitPropsContent(this);
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
        this.ruleIndex = JSBSyntaxParser.RULE_codeContent;
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

	functionDeclaration = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FunctionDeclarationContext);
	    } else {
	        return this.getTypedRuleContext(FunctionDeclarationContext,i);
	    }
	};

	importDeclaration = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ImportDeclarationContext);
	    } else {
	        return this.getTypedRuleContext(ImportDeclarationContext,i);
	    }
	};

	LINE_COMMENT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(JSBSyntaxParser.LINE_COMMENT);
	    } else {
	        return this.getToken(JSBSyntaxParser.LINE_COMMENT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof JSBSyntaxListener ) {
	        listener.enterCodeContent(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSBSyntaxListener ) {
	        listener.exitCodeContent(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSBSyntaxVisitor ) {
	        return visitor.visitCodeContent(this);
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
        this.ruleIndex = JSBSyntaxParser.RULE_variableDeclaration;
    }

	variableKind() {
	    return this.getTypedRuleContext(VariableKindContext,0);
	};

	ID() {
	    return this.getToken(JSBSyntaxParser.ID, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JSBSyntaxListener ) {
	        listener.enterVariableDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSBSyntaxListener ) {
	        listener.exitVariableDeclaration(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSBSyntaxVisitor ) {
	        return visitor.visitVariableDeclaration(this);
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
        this.ruleIndex = JSBSyntaxParser.RULE_functionDeclaration;
    }

	functionCall() {
	    return this.getTypedRuleContext(FunctionCallContext,0);
	};

	functionContent() {
	    return this.getTypedRuleContext(FunctionContentContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JSBSyntaxListener ) {
	        listener.enterFunctionDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSBSyntaxListener ) {
	        listener.exitFunctionDeclaration(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSBSyntaxVisitor ) {
	        return visitor.visitFunctionDeclaration(this);
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
        this.ruleIndex = JSBSyntaxParser.RULE_importDeclaration;
    }

	ID() {
	    return this.getToken(JSBSyntaxParser.ID, 0);
	};

	STRING() {
	    return this.getToken(JSBSyntaxParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JSBSyntaxListener ) {
	        listener.enterImportDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSBSyntaxListener ) {
	        listener.exitImportDeclaration(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSBSyntaxVisitor ) {
	        return visitor.visitImportDeclaration(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VariableKindContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JSBSyntaxParser.RULE_variableKind;
    }


	enterRule(listener) {
	    if(listener instanceof JSBSyntaxListener ) {
	        listener.enterVariableKind(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSBSyntaxListener ) {
	        listener.exitVariableKind(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSBSyntaxVisitor ) {
	        return visitor.visitVariableKind(this);
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
        this.ruleIndex = JSBSyntaxParser.RULE_functionCall;
    }

	ID() {
	    return this.getToken(JSBSyntaxParser.ID, 0);
	};

	functionArgs() {
	    return this.getTypedRuleContext(FunctionArgsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JSBSyntaxListener ) {
	        listener.enterFunctionCall(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSBSyntaxListener ) {
	        listener.exitFunctionCall(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSBSyntaxVisitor ) {
	        return visitor.visitFunctionCall(this);
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
        this.ruleIndex = JSBSyntaxParser.RULE_functionArgs;
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

	enterRule(listener) {
	    if(listener instanceof JSBSyntaxListener ) {
	        listener.enterFunctionArgs(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSBSyntaxListener ) {
	        listener.exitFunctionArgs(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSBSyntaxVisitor ) {
	        return visitor.visitFunctionArgs(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FunctionContentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JSBSyntaxParser.RULE_functionContent;
    }

	BRACE_OPEN() {
	    return this.getToken(JSBSyntaxParser.BRACE_OPEN, 0);
	};

	functionContentBody() {
	    return this.getTypedRuleContext(FunctionContentBodyContext,0);
	};

	BRACE_CLOSE() {
	    return this.getToken(JSBSyntaxParser.BRACE_CLOSE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JSBSyntaxListener ) {
	        listener.enterFunctionContent(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSBSyntaxListener ) {
	        listener.exitFunctionContent(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSBSyntaxVisitor ) {
	        return visitor.visitFunctionContent(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FunctionContentBodyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JSBSyntaxParser.RULE_functionContentBody;
    }

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	ANY_CHAR_NO_BRACE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(JSBSyntaxParser.ANY_CHAR_NO_BRACE);
	    } else {
	        return this.getToken(JSBSyntaxParser.ANY_CHAR_NO_BRACE, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof JSBSyntaxListener ) {
	        listener.enterFunctionContentBody(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSBSyntaxListener ) {
	        listener.exitFunctionContentBody(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSBSyntaxVisitor ) {
	        return visitor.visitFunctionContentBody(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JSBSyntaxParser.RULE_statement;
    }

	variableDeclaration() {
	    return this.getTypedRuleContext(VariableDeclarationContext,0);
	};

	functionDeclaration() {
	    return this.getTypedRuleContext(FunctionDeclarationContext,0);
	};

	importDeclaration() {
	    return this.getTypedRuleContext(ImportDeclarationContext,0);
	};

	expressionStatement() {
	    return this.getTypedRuleContext(ExpressionStatementContext,0);
	};

	ifStatement() {
	    return this.getTypedRuleContext(IfStatementContext,0);
	};

	LINE_COMMENT() {
	    return this.getToken(JSBSyntaxParser.LINE_COMMENT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JSBSyntaxListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSBSyntaxListener ) {
	        listener.exitStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSBSyntaxVisitor ) {
	        return visitor.visitStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpressionStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JSBSyntaxParser.RULE_expressionStatement;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JSBSyntaxListener ) {
	        listener.enterExpressionStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSBSyntaxListener ) {
	        listener.exitExpressionStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSBSyntaxVisitor ) {
	        return visitor.visitExpressionStatement(this);
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
        this.ruleIndex = JSBSyntaxParser.RULE_ifStatement;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof JSBSyntaxListener ) {
	        listener.enterIfStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSBSyntaxListener ) {
	        listener.exitIfStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSBSyntaxVisitor ) {
	        return visitor.visitIfStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ElementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JSBSyntaxParser.RULE_element;
    }

	ID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(JSBSyntaxParser.ID);
	    } else {
	        return this.getToken(JSBSyntaxParser.ID, i);
	    }
	};


	attribute = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AttributeContext);
	    } else {
	        return this.getTypedRuleContext(AttributeContext,i);
	    }
	};

	elementContent = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ElementContentContext);
	    } else {
	        return this.getTypedRuleContext(ElementContentContext,i);
	    }
	};

	TEXT() {
	    return this.getToken(JSBSyntaxParser.TEXT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JSBSyntaxListener ) {
	        listener.enterElement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSBSyntaxListener ) {
	        listener.exitElement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSBSyntaxVisitor ) {
	        return visitor.visitElement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ElementContentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JSBSyntaxParser.RULE_elementContent;
    }

	element = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ElementContext);
	    } else {
	        return this.getTypedRuleContext(ElementContext,i);
	    }
	};

	TEXT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(JSBSyntaxParser.TEXT);
	    } else {
	        return this.getToken(JSBSyntaxParser.TEXT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof JSBSyntaxListener ) {
	        listener.enterElementContent(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSBSyntaxListener ) {
	        listener.exitElementContent(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSBSyntaxVisitor ) {
	        return visitor.visitElementContent(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AttributeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JSBSyntaxParser.RULE_attribute;
    }

	ID() {
	    return this.getToken(JSBSyntaxParser.ID, 0);
	};

	STRING() {
	    return this.getToken(JSBSyntaxParser.STRING, 0);
	};

	expressionInBraces() {
	    return this.getTypedRuleContext(ExpressionInBracesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JSBSyntaxListener ) {
	        listener.enterAttribute(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSBSyntaxListener ) {
	        listener.exitAttribute(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSBSyntaxVisitor ) {
	        return visitor.visitAttribute(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpressionInBracesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JSBSyntaxParser.RULE_expressionInBraces;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JSBSyntaxListener ) {
	        listener.enterExpressionInBraces(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSBSyntaxListener ) {
	        listener.exitExpressionInBraces(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSBSyntaxVisitor ) {
	        return visitor.visitExpressionInBraces(this);
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
        this.ruleIndex = JSBSyntaxParser.RULE_expression;
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

	STRING() {
	    return this.getToken(JSBSyntaxParser.STRING, 0);
	};

	ID() {
	    return this.getToken(JSBSyntaxParser.ID, 0);
	};

	functionCall() {
	    return this.getTypedRuleContext(FunctionCallContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JSBSyntaxListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSBSyntaxListener ) {
	        listener.exitExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSBSyntaxVisitor ) {
	        return visitor.visitExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




JSBSyntaxParser.DocumentContext = DocumentContext; 
JSBSyntaxParser.PropsDeclarationContext = PropsDeclarationContext; 
JSBSyntaxParser.CodeDeclarationContext = CodeDeclarationContext; 
JSBSyntaxParser.ContentDeclarationContext = ContentDeclarationContext; 
JSBSyntaxParser.PropsContentContext = PropsContentContext; 
JSBSyntaxParser.CodeContentContext = CodeContentContext; 
JSBSyntaxParser.VariableDeclarationContext = VariableDeclarationContext; 
JSBSyntaxParser.FunctionDeclarationContext = FunctionDeclarationContext; 
JSBSyntaxParser.ImportDeclarationContext = ImportDeclarationContext; 
JSBSyntaxParser.VariableKindContext = VariableKindContext; 
JSBSyntaxParser.FunctionCallContext = FunctionCallContext; 
JSBSyntaxParser.FunctionArgsContext = FunctionArgsContext; 
JSBSyntaxParser.FunctionContentContext = FunctionContentContext; 
JSBSyntaxParser.FunctionContentBodyContext = FunctionContentBodyContext; 
JSBSyntaxParser.StatementContext = StatementContext; 
JSBSyntaxParser.ExpressionStatementContext = ExpressionStatementContext; 
JSBSyntaxParser.IfStatementContext = IfStatementContext; 
JSBSyntaxParser.ElementContext = ElementContext; 
JSBSyntaxParser.ElementContentContext = ElementContentContext; 
JSBSyntaxParser.AttributeContext = AttributeContext; 
JSBSyntaxParser.ExpressionInBracesContext = ExpressionInBracesContext; 
JSBSyntaxParser.ExpressionContext = ExpressionContext; 
