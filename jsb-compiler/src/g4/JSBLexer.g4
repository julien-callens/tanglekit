lexer grammar JSBLexer;

TAG_OPEN: '<' -> pushMode(TAG) ;
VAR_OPEN: '{{' -> pushMode(VAR) ;
ID: [a-zA-Z_][a-zA-Z0-9_-]* ;
TEXT: ~[<]+ ;

QUOTE: ['] ;
SPACE: ' ' ;
WS      : [ \t\r\n]+ -> skip ;

mode TAG;

    TAG_CLOSE: '>' -> popMode ;
    TAG_SLASH_CLOSE: '/>' -> popMode ;
    ATTRIBUTE_EQUALS  : '=' ;
    TAG_SLASH   : '/' ;
    TAG_WS: WS -> skip ;

    TAG_NAME: ID ;

    ATTRIBUTE_OPEN: QUOTE -> pushMode(ATTRIBUTE) ;
    ATTRIBUTE_VAR_OPEN: VAR_OPEN -> pushMode(VAR) ;

mode ATTRIBUTE;

    ATTRIBUTE_VALUE: ID;
    ATTRIBUTE_SEPARATOR: SPACE ;
    ATTRIBUTE_CLOSE: QUOTE -> popMode ;

mode VAR;

    VAR_NAME: ID ;
    VAR_CLOSE: '}}' -> popMode ;

    LPAREN: '(' ;
    RPAREN: ')' ;
    COMMA: ',' ;
    VAR_WS: WS -> skip ;
