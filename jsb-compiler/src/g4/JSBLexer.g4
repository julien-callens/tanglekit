lexer grammar JSBLexer;

WS: [ \t\r\n]+ -> skip ;

IMPORT_OPEN: '<import>' -> pushMode(IMPORT) ;
PROPS_OPEN: '<props>' -> pushMode(PROPS) ;
CODE_OPEN: '<code>' -> pushMode(CODE) ;

TAG_OPEN: '<' -> pushMode(TAG) ;
VAR_OPEN: '{{' -> pushMode(VARIABLE) ;
ID: [a-zA-Z_][a-zA-Z0-9_-]* ;

TEXT: ( ~[<{] | '{' ~'{' )+ ;

fragment INT : [0-9]+ ;
fragment LETTER : [a-zA-Z] ;
fragment SPACE: ' ' ;
fragment EQUALS: '=' ;
fragment STATEMENT_END: ';' ;
fragment LET: 'let' ;
fragment CONST: 'const' ;
fragment QUOTE: ['] ;

mode PROPS;

    PROP_ID: (LET | CONST) -> pushMode(VARIABLE) ;

    PROPS_WS: WS -> skip ;
    PROPS_CLOSE: '</props>' -> popMode ;

mode IMPORT;

    FROM: 'from' ;
    IMPORT_ID: LETTER+ ;
    IMPORT_PATH: QUOTE .*? QUOTE ;
    IMPORT_STATEMENT_END: STATEMENT_END ;

    IMPORT_WS: WS -> skip ;
    IMPORT_CLOSE: '</import>' -> popMode ;

mode CODE;

    LINE_COMMENT: '//' ~[\r\n]* ;

    VAR_DECLARATION: (LET | CONST) -> pushMode(VARIABLE) ;
    FUNC_DECLARATION: 'function' -> pushMode(FUNCTION) ;

     CODE_WS: WS -> skip ;
     CODE_CLOSE: '</code>' -> popMode ;

mode TAG;

    TAG_CLOSE: '>' -> popMode ;
    TAG_SLASH_CLOSE: '/>' -> popMode ;
    ATT_EQUALS  : '=' ;
    TAG_SLASH   : '/' ;
    TAG_WS: WS -> skip ;

    TAG_NAME: ID ;

    ATT_OPEN: QUOTE -> pushMode(ATTRIBUTE) ;
    ATT_VAR_OPEN: VAR_OPEN -> pushMode(VARIABLE) ;

mode ATTRIBUTE;

    ATT_VALUE: ID;
    ATT_SEPARATOR: SPACE ;
    ATT_CLOSE: QUOTE -> popMode ;

mode VARIABLE;

    VAR_NAME: ID ;
    VAR_CLOSE: '}}' -> popMode ;

    VAR_INT: [0-9]+ ;
    STRING_OPEN: QUOTE -> pushMode(STRING) ;

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
    FUNC_ARGS_OPEN: '(' -> pushMode(VARIABLE) ;

    FUNC_WS: WS -> skip ;
    FUNC_ARGS_CLOSE: ')' -> popMode ;
