// Generated from C:/Users/julie/WebstormProjects/jsb/jsb-compiler/src/g4/JSBParser.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import JSBParserListener from './JSBParserListener.js';
import JSBParserVisitor from './JSBParserVisitor.js';

const serializedATN = [4,1,19,87,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,5,0,20,8,0,10,0,12,0,23,9,0,1,1,1,1,
1,1,5,1,28,8,1,10,1,12,1,31,9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,41,8,
1,1,2,1,2,1,2,5,2,46,8,2,10,2,12,2,49,9,2,1,3,1,3,1,3,1,3,3,3,55,8,3,1,4,
1,4,1,4,1,4,1,5,1,5,5,5,63,8,5,10,5,12,5,66,9,5,1,6,1,6,1,6,3,6,71,8,6,1,
6,1,6,1,7,1,7,1,7,5,7,78,8,7,10,7,12,7,81,9,7,1,8,1,8,3,8,85,8,8,1,8,0,0,
9,0,2,4,6,8,10,12,14,16,0,1,2,0,5,5,13,13,89,0,21,1,0,0,0,2,24,1,0,0,0,4,
47,1,0,0,0,6,50,1,0,0,0,8,56,1,0,0,0,10,64,1,0,0,0,12,67,1,0,0,0,14,74,1,
0,0,0,16,84,1,0,0,0,18,20,3,2,1,0,19,18,1,0,0,0,20,23,1,0,0,0,21,19,1,0,
0,0,21,22,1,0,0,0,22,1,1,0,0,0,23,21,1,0,0,0,24,25,5,4,0,0,25,29,5,11,0,
0,26,28,3,6,3,0,27,26,1,0,0,0,28,31,1,0,0,0,29,27,1,0,0,0,29,30,1,0,0,0,
30,40,1,0,0,0,31,29,1,0,0,0,32,33,5,6,0,0,33,34,3,4,2,0,34,35,5,4,0,0,35,
36,5,9,0,0,36,37,5,11,0,0,37,38,5,6,0,0,38,41,1,0,0,0,39,41,5,7,0,0,40,32,
1,0,0,0,40,39,1,0,0,0,41,3,1,0,0,0,42,46,3,2,1,0,43,46,5,2,0,0,44,46,3,8,
4,0,45,42,1,0,0,0,45,43,1,0,0,0,45,44,1,0,0,0,46,49,1,0,0,0,47,45,1,0,0,
0,47,48,1,0,0,0,48,5,1,0,0,0,49,47,1,0,0,0,50,51,5,11,0,0,51,54,5,8,0,0,
52,55,5,12,0,0,53,55,3,8,4,0,54,52,1,0,0,0,54,53,1,0,0,0,55,7,1,0,0,0,56,
57,7,0,0,0,57,58,3,10,5,0,58,59,5,15,0,0,59,9,1,0,0,0,60,63,3,12,6,0,61,
63,5,14,0,0,62,60,1,0,0,0,62,61,1,0,0,0,63,66,1,0,0,0,64,62,1,0,0,0,64,65,
1,0,0,0,65,11,1,0,0,0,66,64,1,0,0,0,67,68,5,14,0,0,68,70,5,16,0,0,69,71,
3,14,7,0,70,69,1,0,0,0,70,71,1,0,0,0,71,72,1,0,0,0,72,73,5,17,0,0,73,13,
1,0,0,0,74,79,3,16,8,0,75,76,5,18,0,0,76,78,3,16,8,0,77,75,1,0,0,0,78,81,
1,0,0,0,79,77,1,0,0,0,79,80,1,0,0,0,80,15,1,0,0,0,81,79,1,0,0,0,82,85,5,
14,0,0,83,85,3,12,6,0,84,82,1,0,0,0,84,83,1,0,0,0,85,17,1,0,0,0,11,21,29,
40,45,47,54,62,64,70,79,84];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class JSBParser extends antlr4.Parser {

    static grammarFileName = "JSBParser.g4";
    static literalNames = [ null, null, null, null, "'<'", "'{{'", "'>'", 
                            "'/>'", "'='", "'/'", null, null, null, null, 
                            null, "'}}'", "'('", "')'", "','" ];
    static symbolicNames = [ null, "WS", "TEXT", "ID", "TAG_OPEN", "VAR_OPEN", 
                             "TAG_CLOSE", "TAG_SLASH_CLOSE", "ATTRIBUTE_EQUALS", 
                             "TAG_SLASH", "TAG_WS", "TAG_NAME", "ATTRIBUTE_VALUE", 
                             "ATTRIBUTE_VAR_OPEN", "VAR_NAME", "VAR_CLOSE", 
                             "LPAREN", "RPAREN", "COMMA", "VAR_WS" ];
    static ruleNames = [ "document", "element", "content", "elementAttribute", 
                         "elementInsert", "elementInsertContent", "varFunction", 
                         "functionArgs", "expression" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = JSBParser.ruleNames;
        this.literalNames = JSBParser.literalNames;
        this.symbolicNames = JSBParser.symbolicNames;
    }



	document() {
	    let localctx = new DocumentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, JSBParser.RULE_document);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 21;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===4) {
	            this.state = 18;
	            this.element();
	            this.state = 23;
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



	element() {
	    let localctx = new ElementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, JSBParser.RULE_element);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 24;
	        this.match(JSBParser.TAG_OPEN);
	        this.state = 25;
	        this.match(JSBParser.TAG_NAME);
	        this.state = 29;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===11) {
	            this.state = 26;
	            this.elementAttribute();
	            this.state = 31;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 40;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 6:
	            this.state = 32;
	            this.match(JSBParser.TAG_CLOSE);
	            this.state = 33;
	            this.content();
	            this.state = 34;
	            this.match(JSBParser.TAG_OPEN);
	            this.state = 35;
	            this.match(JSBParser.TAG_SLASH);
	            this.state = 36;
	            this.match(JSBParser.TAG_NAME);
	            this.state = 37;
	            this.match(JSBParser.TAG_CLOSE);
	            break;
	        case 7:
	            this.state = 39;
	            this.match(JSBParser.TAG_SLASH_CLOSE);
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
	    this.enterRule(localctx, 4, JSBParser.RULE_content);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 47;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 45;
	                this._errHandler.sync(this);
	                switch(this._input.LA(1)) {
	                case 4:
	                    this.state = 42;
	                    this.element();
	                    break;
	                case 2:
	                    this.state = 43;
	                    this.match(JSBParser.TEXT);
	                    break;
	                case 5:
	                case 13:
	                    this.state = 44;
	                    this.elementInsert();
	                    break;
	                default:
	                    throw new antlr4.error.NoViableAltException(this);
	                } 
	            }
	            this.state = 49;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
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
	    this.enterRule(localctx, 6, JSBParser.RULE_elementAttribute);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 50;
	        this.match(JSBParser.TAG_NAME);
	        this.state = 51;
	        this.match(JSBParser.ATTRIBUTE_EQUALS);
	        this.state = 54;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 12:
	            this.state = 52;
	            this.match(JSBParser.ATTRIBUTE_VALUE);
	            break;
	        case 5:
	        case 13:
	            this.state = 53;
	            this.elementInsert();
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



	elementInsert() {
	    let localctx = new ElementInsertContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, JSBParser.RULE_elementInsert);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 56;
	        _la = this._input.LA(1);
	        if(!(_la===5 || _la===13)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 57;
	        this.elementInsertContent();
	        this.state = 58;
	        this.match(JSBParser.VAR_CLOSE);
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



	elementInsertContent() {
	    let localctx = new ElementInsertContentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, JSBParser.RULE_elementInsertContent);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 64;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===14) {
	            this.state = 62;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 60;
	                this.varFunction();
	                break;

	            case 2:
	                this.state = 61;
	                this.match(JSBParser.VAR_NAME);
	                break;

	            }
	            this.state = 66;
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



	varFunction() {
	    let localctx = new VarFunctionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, JSBParser.RULE_varFunction);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 67;
	        this.match(JSBParser.VAR_NAME);
	        this.state = 68;
	        this.match(JSBParser.LPAREN);
	        this.state = 70;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===14) {
	            this.state = 69;
	            this.functionArgs();
	        }

	        this.state = 72;
	        this.match(JSBParser.RPAREN);
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
	    this.enterRule(localctx, 14, JSBParser.RULE_functionArgs);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 74;
	        this.expression();
	        this.state = 79;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===18) {
	            this.state = 75;
	            this.match(JSBParser.COMMA);
	            this.state = 76;
	            this.expression();
	            this.state = 81;
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



	expression() {
	    let localctx = new ExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, JSBParser.RULE_expression);
	    try {
	        this.state = 84;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 82;
	            this.match(JSBParser.VAR_NAME);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 83;
	            this.varFunction();
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


}

JSBParser.EOF = antlr4.Token.EOF;
JSBParser.WS = 1;
JSBParser.TEXT = 2;
JSBParser.ID = 3;
JSBParser.TAG_OPEN = 4;
JSBParser.VAR_OPEN = 5;
JSBParser.TAG_CLOSE = 6;
JSBParser.TAG_SLASH_CLOSE = 7;
JSBParser.ATTRIBUTE_EQUALS = 8;
JSBParser.TAG_SLASH = 9;
JSBParser.TAG_WS = 10;
JSBParser.TAG_NAME = 11;
JSBParser.ATTRIBUTE_VALUE = 12;
JSBParser.ATTRIBUTE_VAR_OPEN = 13;
JSBParser.VAR_NAME = 14;
JSBParser.VAR_CLOSE = 15;
JSBParser.LPAREN = 16;
JSBParser.RPAREN = 17;
JSBParser.COMMA = 18;
JSBParser.VAR_WS = 19;

JSBParser.RULE_document = 0;
JSBParser.RULE_element = 1;
JSBParser.RULE_content = 2;
JSBParser.RULE_elementAttribute = 3;
JSBParser.RULE_elementInsert = 4;
JSBParser.RULE_elementInsertContent = 5;
JSBParser.RULE_varFunction = 6;
JSBParser.RULE_functionArgs = 7;
JSBParser.RULE_expression = 8;

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
        this.ruleIndex = JSBParser.RULE_document;
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
	    if(listener instanceof JSBParserListener ) {
	        listener.enterDocument(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSBParserListener ) {
	        listener.exitDocument(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSBParserVisitor ) {
	        return visitor.visitDocument(this);
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
        this.ruleIndex = JSBParser.RULE_element;
    }

	TAG_OPEN = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(JSBParser.TAG_OPEN);
	    } else {
	        return this.getToken(JSBParser.TAG_OPEN, i);
	    }
	};


	TAG_NAME = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(JSBParser.TAG_NAME);
	    } else {
	        return this.getToken(JSBParser.TAG_NAME, i);
	    }
	};


	TAG_CLOSE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(JSBParser.TAG_CLOSE);
	    } else {
	        return this.getToken(JSBParser.TAG_CLOSE, i);
	    }
	};


	content() {
	    return this.getTypedRuleContext(ContentContext,0);
	};

	TAG_SLASH() {
	    return this.getToken(JSBParser.TAG_SLASH, 0);
	};

	TAG_SLASH_CLOSE() {
	    return this.getToken(JSBParser.TAG_SLASH_CLOSE, 0);
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
	    if(listener instanceof JSBParserListener ) {
	        listener.enterElement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSBParserListener ) {
	        listener.exitElement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSBParserVisitor ) {
	        return visitor.visitElement(this);
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
        this.ruleIndex = JSBParser.RULE_content;
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
	        return this.getTokens(JSBParser.TEXT);
	    } else {
	        return this.getToken(JSBParser.TEXT, i);
	    }
	};


	elementInsert = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ElementInsertContext);
	    } else {
	        return this.getTypedRuleContext(ElementInsertContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof JSBParserListener ) {
	        listener.enterContent(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSBParserListener ) {
	        listener.exitContent(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSBParserVisitor ) {
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
        this.ruleIndex = JSBParser.RULE_elementAttribute;
    }

	TAG_NAME() {
	    return this.getToken(JSBParser.TAG_NAME, 0);
	};

	ATTRIBUTE_EQUALS() {
	    return this.getToken(JSBParser.ATTRIBUTE_EQUALS, 0);
	};

	ATTRIBUTE_VALUE() {
	    return this.getToken(JSBParser.ATTRIBUTE_VALUE, 0);
	};

	elementInsert() {
	    return this.getTypedRuleContext(ElementInsertContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JSBParserListener ) {
	        listener.enterElementAttribute(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSBParserListener ) {
	        listener.exitElementAttribute(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSBParserVisitor ) {
	        return visitor.visitElementAttribute(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ElementInsertContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JSBParser.RULE_elementInsert;
    }

	elementInsertContent() {
	    return this.getTypedRuleContext(ElementInsertContentContext,0);
	};

	VAR_CLOSE() {
	    return this.getToken(JSBParser.VAR_CLOSE, 0);
	};

	VAR_OPEN() {
	    return this.getToken(JSBParser.VAR_OPEN, 0);
	};

	ATTRIBUTE_VAR_OPEN() {
	    return this.getToken(JSBParser.ATTRIBUTE_VAR_OPEN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof JSBParserListener ) {
	        listener.enterElementInsert(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSBParserListener ) {
	        listener.exitElementInsert(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSBParserVisitor ) {
	        return visitor.visitElementInsert(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ElementInsertContentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JSBParser.RULE_elementInsertContent;
    }

	varFunction = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(VarFunctionContext);
	    } else {
	        return this.getTypedRuleContext(VarFunctionContext,i);
	    }
	};

	VAR_NAME = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(JSBParser.VAR_NAME);
	    } else {
	        return this.getToken(JSBParser.VAR_NAME, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof JSBParserListener ) {
	        listener.enterElementInsertContent(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSBParserListener ) {
	        listener.exitElementInsertContent(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSBParserVisitor ) {
	        return visitor.visitElementInsertContent(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VarFunctionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JSBParser.RULE_varFunction;
    }

	VAR_NAME() {
	    return this.getToken(JSBParser.VAR_NAME, 0);
	};

	LPAREN() {
	    return this.getToken(JSBParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(JSBParser.RPAREN, 0);
	};

	functionArgs() {
	    return this.getTypedRuleContext(FunctionArgsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JSBParserListener ) {
	        listener.enterVarFunction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSBParserListener ) {
	        listener.exitVarFunction(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSBParserVisitor ) {
	        return visitor.visitVarFunction(this);
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
        this.ruleIndex = JSBParser.RULE_functionArgs;
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

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(JSBParser.COMMA);
	    } else {
	        return this.getToken(JSBParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof JSBParserListener ) {
	        listener.enterFunctionArgs(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSBParserListener ) {
	        listener.exitFunctionArgs(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSBParserVisitor ) {
	        return visitor.visitFunctionArgs(this);
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
        this.ruleIndex = JSBParser.RULE_expression;
    }

	VAR_NAME() {
	    return this.getToken(JSBParser.VAR_NAME, 0);
	};

	varFunction() {
	    return this.getTypedRuleContext(VarFunctionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof JSBParserListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof JSBParserListener ) {
	        listener.exitExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof JSBParserVisitor ) {
	        return visitor.visitExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




JSBParser.DocumentContext = DocumentContext; 
JSBParser.ElementContext = ElementContext; 
JSBParser.ContentContext = ContentContext; 
JSBParser.ElementAttributeContext = ElementAttributeContext; 
JSBParser.ElementInsertContext = ElementInsertContext; 
JSBParser.ElementInsertContentContext = ElementInsertContentContext; 
JSBParser.VarFunctionContext = VarFunctionContext; 
JSBParser.FunctionArgsContext = FunctionArgsContext; 
JSBParser.ExpressionContext = ExpressionContext; 
