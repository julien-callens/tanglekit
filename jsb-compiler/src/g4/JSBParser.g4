parser grammar JSBParser;

options {
    tokenVocab = JSBLexer;
}

document
    : elementsDeclaration
    ;

elementsDeclaration
    : (POP_TAG | TAG_OPEN) NAME elementAttribute* (TAG_CLOSE content (POP_TAG | TAG_OPEN) SLASH NAME TAG_CLOSE | TAG_SLASH_CLOSE)
    ;

content
    : (elementsDeclaration | embeddedStatement | textContent)*
    ;

elementAttribute
    : NAME EQUALS (embeddedStatement | stringType)
    ;

embeddedStatement
    : (POP_EMBEDDED | EMBEDDED_OPEN) embeddedExpression EMBEDDED_CLOSE
    ;


embeddedExpression
    : functionCall
    | variableTypes
    | NAME
    ;

functionCall
    : NAME FUNC_ARGS_OPEN functionArgs? FUNC_ARGS_CLOSE
    ;

functionArgs
    : embeddedExpression (FUNC_ARGS_SEPARATOR embeddedExpression)*
    ;

variableTypes
    : INT
    | stringType
    | BOOL
    ;

stringType
    : STRING_OPEN STRING_CONTENT STRING_CLOSE
    ;

textContent
    : TEXT
    ;
