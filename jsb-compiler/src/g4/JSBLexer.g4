lexer grammar JSBLexer;

WS      : [ \t\r\n]+ -> skip ;
TEXT: ~[<{}]+ ;
ID: [a-zA-Z_][a-zA-Z0-9_-]* ;

TAG_OPEN: '<' -> pushMode(INSIDE_TAG) ;
VAR_OPEN: '{{' -> pushMode(INSIDE_VAR) ;

mode INSIDE_TAG;

    TAG_CLOSE: '>' -> popMode ;
    TAG_SLASH_CLOSE: '/>' -> popMode ;
    ATTRIBUTE_EQUALS  : '=' ;
    TAG_SLASH   : '/' ;
    TAG_WS: WS -> skip ;

    TAG_NAME: ID ;

    ATTRIBUTE_VALUE: '\'' ( ~['] | ' ' )* '\'' ;
    ATTRIBUTE_VAR_OPEN: VAR_OPEN -> pushMode(INSIDE_VAR) ;

mode INSIDE_VAR;

    VAR_NAME: ID ;
    VAR_CLOSE: '}}' -> popMode ;

    LPAREN: '(' ;
    RPAREN: ')' ;
    COMMA: ',' ;
    VAR_WS: WS -> skip ;
