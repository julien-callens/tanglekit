lexer grammar JSBLexer;

WS      : [ \t\r\n]+ -> skip ;
ID      : [a-zA-Z_][a-zA-Z0-9_-]* ;
TEXT    : ~[<>]+ ;

TAG_OPEN: '<' -> pushMode(INSIDE_TAG) ;

mode INSIDE_TAG;

TAG_CLOSE: '>' -> popMode ;
TAG_SLASH_CLOSE: '/>' -> popMode ;
ATTRIBUTE_EQUALS  : '=' ;
TAG_SLASH   : '/' ;
TAG_WS: WS -> skip ;

TAG_NAME: ID ;

ATTRIBUTE_VALUE: '\'' ( ~['] | ' ' )* '\'' ;
