lexer grammar JSBLexer;

WS: [ \t\r\n]+ -> skip ;

PROPS_OPEN: '<props' .*? '>' -> pushMode(PROPS) ;
CODE_OPEN: '<code' .*? '>' -> pushMode(CODE) ;

TAG_OPEN: '<' -> pushMode(TAG) ;
VAR_OPEN: '{{' -> pushMode(VAR) ;
ID: [a-zA-Z_][a-zA-Z0-9_-]* ;
TEXT: ~[<]+ ;

QUOTE: ['] ;
SPACE: ' ' ;

mode PROPS;

    PROPS_WS: WS -> skip ;
    PROPS_CLOSE: .*? '</props>' -> popMode ;

mode CODE;

    CODE_WS: WS -> skip ;
    CODE_CLOSE: .*? '</code>' -> popMode ;

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
