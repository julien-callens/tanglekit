// Generated from src/g4/TangleParser.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import TangleParserListener from './TangleParserListener.js';
import TangleParserVisitor from './TangleParserVisitor.js';

const serializedATN = [4,1,41,158,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,1,0,3,0,40,8,
0,1,0,3,0,43,8,0,1,0,3,0,46,8,0,1,0,1,0,1,1,1,1,5,1,52,8,1,10,1,12,1,55,
9,1,1,1,1,1,1,2,1,2,3,2,61,8,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,
4,1,4,1,5,1,5,1,5,1,5,1,6,5,6,80,8,6,10,6,12,6,83,9,6,1,7,1,7,5,7,87,8,7,
10,7,12,7,90,9,7,1,7,1,7,1,8,1,8,1,9,1,9,1,9,1,9,3,9,100,8,9,1,9,1,9,1,10,
1,10,1,11,1,11,1,11,5,11,109,8,11,10,11,12,11,112,9,11,1,11,1,11,1,11,1,
11,1,11,1,11,1,11,1,11,1,11,3,11,123,8,11,1,12,1,12,1,12,5,12,128,8,12,10,
12,12,12,131,9,12,1,13,1,13,1,13,1,13,3,13,137,8,13,1,14,1,14,1,14,1,14,
1,15,1,15,3,15,145,8,15,1,16,1,16,1,16,3,16,150,8,16,1,17,1,17,1,17,1,17,
1,18,1,18,1,18,0,0,19,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,
0,0,155,0,39,1,0,0,0,2,49,1,0,0,0,4,60,1,0,0,0,6,62,1,0,0,0,8,69,1,0,0,0,
10,74,1,0,0,0,12,81,1,0,0,0,14,84,1,0,0,0,16,93,1,0,0,0,18,95,1,0,0,0,20,
103,1,0,0,0,22,105,1,0,0,0,24,129,1,0,0,0,26,132,1,0,0,0,28,138,1,0,0,0,
30,144,1,0,0,0,32,149,1,0,0,0,34,151,1,0,0,0,36,155,1,0,0,0,38,40,3,2,1,
0,39,38,1,0,0,0,39,40,1,0,0,0,40,42,1,0,0,0,41,43,3,10,5,0,42,41,1,0,0,0,
42,43,1,0,0,0,43,45,1,0,0,0,44,46,3,14,7,0,45,44,1,0,0,0,45,46,1,0,0,0,46,
47,1,0,0,0,47,48,3,22,11,0,48,1,1,0,0,0,49,53,5,2,0,0,50,52,3,4,2,0,51,50,
1,0,0,0,52,55,1,0,0,0,53,51,1,0,0,0,53,54,1,0,0,0,54,56,1,0,0,0,55,53,1,
0,0,0,56,57,5,29,0,0,57,3,1,0,0,0,58,61,3,6,3,0,59,61,3,8,4,0,60,58,1,0,
0,0,60,59,1,0,0,0,61,5,1,0,0,0,62,63,5,25,0,0,63,64,5,24,0,0,64,65,5,26,
0,0,65,66,5,39,0,0,66,67,5,40,0,0,67,68,5,27,0,0,68,7,1,0,0,0,69,70,5,26,
0,0,70,71,5,39,0,0,71,72,5,40,0,0,72,73,5,27,0,0,73,9,1,0,0,0,74,75,5,3,
0,0,75,76,3,12,6,0,76,77,5,31,0,0,77,11,1,0,0,0,78,80,3,18,9,0,79,78,1,0,
0,0,80,83,1,0,0,0,81,79,1,0,0,0,81,82,1,0,0,0,82,13,1,0,0,0,83,81,1,0,0,
0,84,88,5,4,0,0,85,87,3,16,8,0,86,85,1,0,0,0,87,90,1,0,0,0,88,86,1,0,0,0,
88,89,1,0,0,0,89,91,1,0,0,0,90,88,1,0,0,0,91,92,5,33,0,0,92,15,1,0,0,0,93,
94,3,18,9,0,94,17,1,0,0,0,95,96,5,19,0,0,96,99,5,23,0,0,97,98,5,6,0,0,98,
100,3,20,10,0,99,97,1,0,0,0,99,100,1,0,0,0,100,101,1,0,0,0,101,102,5,20,
0,0,102,19,1,0,0,0,103,104,3,32,16,0,104,21,1,0,0,0,105,106,5,22,0,0,106,
110,5,23,0,0,107,109,3,26,13,0,108,107,1,0,0,0,109,112,1,0,0,0,110,108,1,
0,0,0,110,111,1,0,0,0,111,122,1,0,0,0,112,110,1,0,0,0,113,114,5,36,0,0,114,
115,3,24,12,0,115,116,5,22,0,0,116,117,5,21,0,0,117,118,5,23,0,0,118,119,
5,36,0,0,119,123,1,0,0,0,120,121,5,21,0,0,121,123,5,36,0,0,122,113,1,0,0,
0,122,120,1,0,0,0,123,23,1,0,0,0,124,128,3,22,11,0,125,128,3,28,14,0,126,
128,3,36,18,0,127,124,1,0,0,0,127,125,1,0,0,0,127,126,1,0,0,0,128,131,1,
0,0,0,129,127,1,0,0,0,129,130,1,0,0,0,130,25,1,0,0,0,131,129,1,0,0,0,132,
133,5,23,0,0,133,136,5,6,0,0,134,137,3,28,14,0,135,137,3,34,17,0,136,134,
1,0,0,0,136,135,1,0,0,0,137,27,1,0,0,0,138,139,5,8,0,0,139,140,3,30,15,0,
140,141,5,9,0,0,141,29,1,0,0,0,142,145,3,32,16,0,143,145,5,23,0,0,144,142,
1,0,0,0,144,143,1,0,0,0,145,31,1,0,0,0,146,150,5,11,0,0,147,150,3,34,17,
0,148,150,5,5,0,0,149,146,1,0,0,0,149,147,1,0,0,0,149,148,1,0,0,0,150,33,
1,0,0,0,151,152,5,12,0,0,152,153,5,39,0,0,153,154,5,40,0,0,154,35,1,0,0,
0,155,156,5,41,0,0,156,37,1,0,0,0,15,39,42,45,53,60,81,88,99,110,122,127,
129,136,144,149];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class TangleParser extends antlr4.Parser {

    static grammarFileName = "TangleParser.g4";
    static literalNames = [ null, null, "'<import>'", "'<props>'", "'<code>'", 
                            null, "'='", "'('", null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, "'<'", null, "'from'", null, null, 
                            null, null, "'</import>'", null, "'</props>'", 
                            null, "'</code>'", null, null, "'>'" ];
    static symbolicNames = [ null, "WS", "IMPORT_OPEN", "PROPS_OPEN", "CODE_OPEN", 
                             "BOOL", "EQUALS", "LPAREN", "EMBEDDED_OPEN", 
                             "EMBEDDED_CLOSE", "EMBEDDED_CONTENT_CLOSE", 
                             "INT", "STRING_OPEN", "CODE_BLOCK_OPEN", "CODE_BLOCK_CLOSE", 
                             "FUNC_START", "ARGS_OPEN", "ARGS_CLOSE", "ARGS_SEPARATOR", 
                             "VAR_DEF", "STATEMENT_END", "TAG_SLASH", "TAG_OPEN", 
                             "NAME", "FROM", "IMPORT_ID", "IMPORT_PATH_OPEN", 
                             "IMPORT_STATEMENT_END", "IMPORT_WS", "IMPORT_CLOSE", 
                             "PROPS_WS", "PROPS_CLOSE", "CODE_WS", "CODE_CLOSE", 
                             "STATEMENT_WS", "TAG_WS", "TAG_CLOSE", "ATTRIBUTE_WS", 
                             "EMBEDDED_WS", "STRING_CONTENT", "STRING_CLOSE", 
                             "TEXT" ];
    static ruleNames = [ "document", "importDeclaration", "importStatement", 
                         "componentImport", "styleImport", "propsDeclaration", 
                         "propsContent", "codeDeclaration", "codeContent", 
                         "variableDeclaration", "statement", "elementsDeclaration", 
                         "content", "elementAttribute", "embeddedStatement", 
                         "expression", "variableTypes", "stringType", "textContent" ];

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
	        this.state = 39;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===2) {
	            this.state = 38;
	            this.importDeclaration();
	        }

	        this.state = 42;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===3) {
	            this.state = 41;
	            this.propsDeclaration();
	        }

	        this.state = 45;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===4) {
	            this.state = 44;
	            this.codeDeclaration();
	        }

	        this.state = 47;
	        this.elementsDeclaration();
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
	        this.state = 49;
	        this.match(TangleParser.IMPORT_OPEN);
	        this.state = 53;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===25 || _la===26) {
	            this.state = 50;
	            this.importStatement();
	            this.state = 55;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 56;
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
	        this.state = 60;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 25:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 58;
	            this.componentImport();
	            break;
	        case 26:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 59;
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
	        this.state = 62;
	        this.match(TangleParser.IMPORT_ID);
	        this.state = 63;
	        this.match(TangleParser.FROM);
	        this.state = 64;
	        this.match(TangleParser.IMPORT_PATH_OPEN);
	        this.state = 65;
	        this.match(TangleParser.STRING_CONTENT);
	        this.state = 66;
	        this.match(TangleParser.STRING_CLOSE);
	        this.state = 67;
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
	        this.state = 69;
	        this.match(TangleParser.IMPORT_PATH_OPEN);
	        this.state = 70;
	        this.match(TangleParser.STRING_CONTENT);
	        this.state = 71;
	        this.match(TangleParser.STRING_CLOSE);
	        this.state = 72;
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
	        this.state = 74;
	        this.match(TangleParser.PROPS_OPEN);
	        this.state = 75;
	        this.propsContent();
	        this.state = 76;
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
	        this.state = 81;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===19) {
	            this.state = 78;
	            this.variableDeclaration();
	            this.state = 83;
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
	        this.state = 84;
	        this.match(TangleParser.CODE_OPEN);
	        this.state = 88;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===19) {
	            this.state = 85;
	            this.codeContent();
	            this.state = 90;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 91;
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
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 93;
	        this.variableDeclaration();
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
	    this.enterRule(localctx, 18, TangleParser.RULE_variableDeclaration);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 95;
	        this.match(TangleParser.VAR_DEF);
	        this.state = 96;
	        this.match(TangleParser.NAME);
	        this.state = 99;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===6) {
	            this.state = 97;
	            this.match(TangleParser.EQUALS);
	            this.state = 98;
	            this.statement();
	        }

	        this.state = 101;
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



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, TangleParser.RULE_statement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 103;
	        this.variableTypes();
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
	    this.enterRule(localctx, 22, TangleParser.RULE_elementsDeclaration);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 105;
	        this.match(TangleParser.TAG_OPEN);
	        this.state = 106;
	        this.match(TangleParser.NAME);
	        this.state = 110;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===23) {
	            this.state = 107;
	            this.elementAttribute();
	            this.state = 112;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 122;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 36:
	            this.state = 113;
	            this.match(TangleParser.TAG_CLOSE);
	            this.state = 114;
	            this.content();
	            this.state = 115;
	            this.match(TangleParser.TAG_OPEN);
	            this.state = 116;
	            this.match(TangleParser.TAG_SLASH);
	            this.state = 117;
	            this.match(TangleParser.NAME);
	            this.state = 118;
	            this.match(TangleParser.TAG_CLOSE);
	            break;
	        case 21:
	            this.state = 120;
	            this.match(TangleParser.TAG_SLASH);
	            this.state = 121;
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
	    this.enterRule(localctx, 24, TangleParser.RULE_content);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 129;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,11,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 127;
	                this._errHandler.sync(this);
	                switch(this._input.LA(1)) {
	                case 22:
	                    this.state = 124;
	                    this.elementsDeclaration();
	                    break;
	                case 8:
	                    this.state = 125;
	                    this.embeddedStatement();
	                    break;
	                case 41:
	                    this.state = 126;
	                    this.textContent();
	                    break;
	                default:
	                    throw new antlr4.error.NoViableAltException(this);
	                } 
	            }
	            this.state = 131;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,11,this._ctx);
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
	    this.enterRule(localctx, 26, TangleParser.RULE_elementAttribute);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 132;
	        this.match(TangleParser.NAME);
	        this.state = 133;
	        this.match(TangleParser.EQUALS);
	        this.state = 136;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 8:
	            this.state = 134;
	            this.embeddedStatement();
	            break;
	        case 12:
	            this.state = 135;
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
	    this.enterRule(localctx, 28, TangleParser.RULE_embeddedStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 138;
	        this.match(TangleParser.EMBEDDED_OPEN);
	        this.state = 139;
	        this.expression();
	        this.state = 140;
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



	expression() {
	    let localctx = new ExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, TangleParser.RULE_expression);
	    try {
	        this.state = 144;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 5:
	        case 11:
	        case 12:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 142;
	            this.variableTypes();
	            break;
	        case 23:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 143;
	            this.match(TangleParser.NAME);
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



	variableTypes() {
	    let localctx = new VariableTypesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, TangleParser.RULE_variableTypes);
	    try {
	        this.state = 149;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 11:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 146;
	            this.match(TangleParser.INT);
	            break;
	        case 12:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 147;
	            this.stringType();
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 148;
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
	    this.enterRule(localctx, 34, TangleParser.RULE_stringType);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 151;
	        this.match(TangleParser.STRING_OPEN);
	        this.state = 152;
	        this.match(TangleParser.STRING_CONTENT);
	        this.state = 153;
	        this.match(TangleParser.STRING_CLOSE);
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
	    this.enterRule(localctx, 36, TangleParser.RULE_textContent);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 155;
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


}

TangleParser.EOF = antlr4.Token.EOF;
TangleParser.WS = 1;
TangleParser.IMPORT_OPEN = 2;
TangleParser.PROPS_OPEN = 3;
TangleParser.CODE_OPEN = 4;
TangleParser.BOOL = 5;
TangleParser.EQUALS = 6;
TangleParser.LPAREN = 7;
TangleParser.EMBEDDED_OPEN = 8;
TangleParser.EMBEDDED_CLOSE = 9;
TangleParser.EMBEDDED_CONTENT_CLOSE = 10;
TangleParser.INT = 11;
TangleParser.STRING_OPEN = 12;
TangleParser.CODE_BLOCK_OPEN = 13;
TangleParser.CODE_BLOCK_CLOSE = 14;
TangleParser.FUNC_START = 15;
TangleParser.ARGS_OPEN = 16;
TangleParser.ARGS_CLOSE = 17;
TangleParser.ARGS_SEPARATOR = 18;
TangleParser.VAR_DEF = 19;
TangleParser.STATEMENT_END = 20;
TangleParser.TAG_SLASH = 21;
TangleParser.TAG_OPEN = 22;
TangleParser.NAME = 23;
TangleParser.FROM = 24;
TangleParser.IMPORT_ID = 25;
TangleParser.IMPORT_PATH_OPEN = 26;
TangleParser.IMPORT_STATEMENT_END = 27;
TangleParser.IMPORT_WS = 28;
TangleParser.IMPORT_CLOSE = 29;
TangleParser.PROPS_WS = 30;
TangleParser.PROPS_CLOSE = 31;
TangleParser.CODE_WS = 32;
TangleParser.CODE_CLOSE = 33;
TangleParser.STATEMENT_WS = 34;
TangleParser.TAG_WS = 35;
TangleParser.TAG_CLOSE = 36;
TangleParser.ATTRIBUTE_WS = 37;
TangleParser.EMBEDDED_WS = 38;
TangleParser.STRING_CONTENT = 39;
TangleParser.STRING_CLOSE = 40;
TangleParser.TEXT = 41;

TangleParser.RULE_document = 0;
TangleParser.RULE_importDeclaration = 1;
TangleParser.RULE_importStatement = 2;
TangleParser.RULE_componentImport = 3;
TangleParser.RULE_styleImport = 4;
TangleParser.RULE_propsDeclaration = 5;
TangleParser.RULE_propsContent = 6;
TangleParser.RULE_codeDeclaration = 7;
TangleParser.RULE_codeContent = 8;
TangleParser.RULE_variableDeclaration = 9;
TangleParser.RULE_statement = 10;
TangleParser.RULE_elementsDeclaration = 11;
TangleParser.RULE_content = 12;
TangleParser.RULE_elementAttribute = 13;
TangleParser.RULE_embeddedStatement = 14;
TangleParser.RULE_expression = 15;
TangleParser.RULE_variableTypes = 16;
TangleParser.RULE_stringType = 17;
TangleParser.RULE_textContent = 18;

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

	IMPORT_PATH_OPEN() {
	    return this.getToken(TangleParser.IMPORT_PATH_OPEN, 0);
	};

	STRING_CONTENT() {
	    return this.getToken(TangleParser.STRING_CONTENT, 0);
	};

	STRING_CLOSE() {
	    return this.getToken(TangleParser.STRING_CLOSE, 0);
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

	IMPORT_PATH_OPEN() {
	    return this.getToken(TangleParser.IMPORT_PATH_OPEN, 0);
	};

	STRING_CONTENT() {
	    return this.getToken(TangleParser.STRING_CONTENT, 0);
	};

	STRING_CLOSE() {
	    return this.getToken(TangleParser.STRING_CLOSE, 0);
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

	variableDeclaration() {
	    return this.getTypedRuleContext(VariableDeclarationContext,0);
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

	EQUALS() {
	    return this.getToken(TangleParser.EQUALS, 0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
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
        this.ruleIndex = TangleParser.RULE_statement;
    }

	variableTypes() {
	    return this.getTypedRuleContext(VariableTypesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TangleParserListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TangleParserListener ) {
	        listener.exitStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof TangleParserVisitor ) {
	        return visitor.visitStatement(this);
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

	TAG_OPEN = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TangleParser.TAG_OPEN);
	    } else {
	        return this.getToken(TangleParser.TAG_OPEN, i);
	    }
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

	EQUALS() {
	    return this.getToken(TangleParser.EQUALS, 0);
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

	variableTypes() {
	    return this.getTypedRuleContext(VariableTypesContext,0);
	};

	NAME() {
	    return this.getToken(TangleParser.NAME, 0);
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

	STRING_OPEN() {
	    return this.getToken(TangleParser.STRING_OPEN, 0);
	};

	STRING_CONTENT() {
	    return this.getToken(TangleParser.STRING_CONTENT, 0);
	};

	STRING_CLOSE() {
	    return this.getToken(TangleParser.STRING_CLOSE, 0);
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




TangleParser.DocumentContext = DocumentContext; 
TangleParser.ImportDeclarationContext = ImportDeclarationContext; 
TangleParser.ImportStatementContext = ImportStatementContext; 
TangleParser.ComponentImportContext = ComponentImportContext; 
TangleParser.StyleImportContext = StyleImportContext; 
TangleParser.PropsDeclarationContext = PropsDeclarationContext; 
TangleParser.PropsContentContext = PropsContentContext; 
TangleParser.CodeDeclarationContext = CodeDeclarationContext; 
TangleParser.CodeContentContext = CodeContentContext; 
TangleParser.VariableDeclarationContext = VariableDeclarationContext; 
TangleParser.StatementContext = StatementContext; 
TangleParser.ElementsDeclarationContext = ElementsDeclarationContext; 
TangleParser.ContentContext = ContentContext; 
TangleParser.ElementAttributeContext = ElementAttributeContext; 
TangleParser.EmbeddedStatementContext = EmbeddedStatementContext; 
TangleParser.ExpressionContext = ExpressionContext; 
TangleParser.VariableTypesContext = VariableTypesContext; 
TangleParser.StringTypeContext = StringTypeContext; 
TangleParser.TextContentContext = TextContentContext; 
