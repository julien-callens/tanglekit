lexer grammar JSBOldLexer;

WS: [ \t\r\n]+ -> skip ;

IMPORT_OPEN: '<import>' -> pushMode(IMPORT) ;
PROPS_OPEN: '<props>' ;
CODE_OPEN: '<code>' ;
PROPS_CLOSE: '</props>' ;
CODE_CLOSE: '</code>' ;

TAG_OPEN: '<' -> pushMode(TAG) ;
VAR_OPEN: '{{' -> pushMode(ATT_VARIABLE) ;


LINE_COMMENT: '//' ~[\r\n]* ;

FUNC_DECLARATION: 'function' -> pushMode(FUNCTION) ;

INT : [0-9]+ ;
fragment LETTER : [a-zA-Z] ;
fragment SPACE: ' ' ;
EQUALS: '=' ;
STATEMENT_END: ';' ;
LET: 'let' ;
CONST: 'const' ;
QUOTE: ['] ;

VAR_NAME: LETTER+ ;
ID: [a-zA-Z_][a-zA-Z0-9_-]* ;
STRING_OPEN: QUOTE -> pushMode(STRING) ;
//TEXT: ( ~[<{] | '{' ~'{' )+ ;
mode IMPORT;

    FROM: 'from' ;
    IMPORT_ID: LETTER+ ;
    IMPORT_PATH: QUOTE .*? QUOTE ;
    IMPORT_STATEMENT_END: STATEMENT_END ;

    IMPORT_WS: WS -> skip ;
    IMPORT_CLOSE: '</import>' -> popMode ;

mode TAG;

    TAG_CLOSE: '>' -> popMode ;
    TAG_SLASH_CLOSE: '/>' -> popMode ;
    ATT_EQUALS  : '=' ;
    TAG_SLASH   : '/' ;
    TAG_WS: WS -> skip ;

    TAG_NAME: ID ;

    ATT_OPEN: QUOTE -> pushMode(ATTRIBUTE) ;
    ATT_VAR_OPEN: VAR_OPEN -> pushMode(ATT_VARIABLE) ;

mode ATTRIBUTE;

    ATT_VALUE: ID;
    ATT_SEPARATOR: SPACE ;
    ATT_CLOSE: QUOTE -> popMode ;

mode ATT_VARIABLE;

    ATT_VAR_NAME: ID ;
    VAR_CLOSE: '}}' -> popMode ;

    VAR_INT: [0-9]+ ;
//    STRING_OPEN: QUOTE -> pushMode(STRING) ;

    LPAREN: '(' ;
    RPAREN: ')' ;
    COMMA: ',' ;

    VAR_EQUALS: EQUALS ;

    VAR_WS: WS -> skip ;
    VAR_END: STATEMENT_END -> popMode ;

mode STRING;

    STRING_CONTENT: ~[']* ;
    STRING_CLOSE: QUOTE -> popMode ;

mode FUNCTION;

    FUNC_NAME: LETTER+ ;
    FUNC_ARGS_OPEN: '(' -> pushMode(ATT_VARIABLE) ;

    FUNC_WS: WS -> skip ;
    FUNC_ARGS_CLOSE: ')' -> popMode ;
