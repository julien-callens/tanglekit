lexer grammar TangleLexer;

WS: [ \t\r\n]+ -> skip ;

fragment VAR_LET: 'let';
fragment VAR_CONST: 'const';
fragment STRING_WRAPPER: QUOTE | DOUBLE_QUOTE;
fragment LBRACE: '{';
fragment RBRACE: '}';
fragment RPAREN: ')';
fragment COMMA: ',';
fragment DOT: '.';
fragment SEMICOLON: ';';
fragment QUOTE: '\'';
fragment DOUBLE_QUOTE: '"';
fragment SLASH: '/';
fragment NUMBER: [0-9_]+;
fragment LETTER: [a-zA-Z_];

IMPORT_OPEN: '<import>' -> pushMode(IMPORT);
PROPS_OPEN: '<props>' -> pushMode(PROPS);
CODE_OPEN: '<code>' -> pushMode(CODE);

BOOL: 'true' | 'false';
EQUALS: '=';
LPAREN: '(';

EMBEDDED_OPEN: LBRACE LBRACE;
EMBEDDED_CLOSE: RBRACE RBRACE;
EMBEDDED_CONTENT_CLOSE: EMBEDDED_CLOSE -> pushMode(CONTENT);

INT: [0-9]+;
STRING_OPEN: STRING_WRAPPER -> pushMode(STRING);

CODE_BLOCK_OPEN: LBRACE;
CODE_BLOCK_CLOSE: RBRACE;

FUNC_START: NAME LPAREN ;
ARGS_OPEN: LPAREN;
ARGS_CLOSE: RPAREN;
ARGS_SEPARATOR: COMMA;

VAR_DEF: VAR_LET | VAR_CONST;

STATEMENT_END: SEMICOLON;

TAG_SLASH: SLASH;
TAG_OPEN: '<' -> pushMode(TAG);

NAME: LETTER (LETTER | NUMBER)*;

mode IMPORT;

    FROM: 'from' ;
    IMPORT_ID: LETTER+ ;
    IMPORT_PATH_OPEN: STRING_WRAPPER -> pushMode(STRING) ;
    IMPORT_STATEMENT_END: SEMICOLON ;

    IMPORT_WS: WS -> skip ;
    IMPORT_CLOSE: '</import>' -> popMode ;

mode PROPS;

    PROP_DEF: VAR_DEF -> type(VAR_DEF) ;
    PROP_NAME: NAME -> type(NAME) ;
    PROP_EQUALS: EQUALS -> type(EQUALS), pushMode(STATEMENT) ;

    PROPS_WS: WS -> skip ;
    PROP_CLOSE: STATEMENT_END -> type(STATEMENT_END);
    PROPS_CLOSE: '</props>' -> popMode ;

mode CODE;

    CODE_VAR_DEF: VAR_DEF -> type(VAR_DEF) ;
    CODE_NAME: NAME -> type(NAME) ;
    CODE_EQUALS: EQUALS -> type(EQUALS), pushMode(STATEMENT) ;

    CODE_STATEMENT_END: STATEMENT_END -> type(STATEMENT_END) ;

    CODE_WS: WS -> skip ;
    CODE_CLOSE: '</code>' -> popMode ;

mode STATEMENT;

    INT_STATEMENT: INT -> type(INT) ;
    BOOLEAN_STATEMENT: BOOL -> type(BOOL) ;
    STRING_START: STRING_WRAPPER -> type(STRING_OPEN), pushMode(STRING) ;
    NAME_STATEMENT: NAME -> type(NAME) ;
    STATEMENT_WS: WS -> skip ;
    STATEMENT_CLOSE: SEMICOLON -> type(STATEMENT_END), popMode ;

mode TAG;

    TAG_WS: WS -> skip ;
    TAG_CLOSE: '>' -> popMode ;

    TAG_CLOSING: TAG_SLASH -> type(TAG_SLASH), popMode ;
    TAG_NAME: NAME -> type(NAME), pushMode(ATTRIBUTE) ;

mode ATTRIBUTE;

    ATTRIBUTE_WS: WS -> skip ;
    ATTRIBUTE_SLASH: SLASH -> type(TAG_SLASH) ;
    ATTRIBUTE_CLOSE: '>' -> type(TAG_CLOSE), popMode, pushMode(CONTENT) ;

    ATTRIBUTE_NAME: NAME -> type(NAME) ;
    ATTRIBUTE_EQUALS: EQUALS -> type(EQUALS) ;
    ATTRIBUTE_VALUE: STRING_OPEN -> type(STRING_OPEN), pushMode(STRING) ;
    ATTRIBUTE_VALUE_DYNAMIC: EMBEDDED_OPEN -> type(EMBEDDED_OPEN), pushMode(EMBEDDED) ;

mode EMBEDDED;

    EMBEDDED_INT: INT -> type(INT) ;
    EMBEDDED_BOOL: BOOL -> type(BOOL) ;
    EMBEDDED_NAME: NAME -> type(NAME) ;
    CLOSE: EMBEDDED_CLOSE -> type(EMBEDDED_CLOSE), popMode ;
    EMBEDDED_WS: WS -> skip ;

mode STRING;

    STRING_CONTENT: ~['"]* ;
    STRING_CLOSE: STRING_OPEN -> popMode ;

mode CONTENT;

     TEXT: ~[<{]+ ;
     EMBEDDED_POP: EMBEDDED_OPEN -> type(EMBEDDED_OPEN), pushMode(EMBEDDED) ;
     TAG_POP: TAG_OPEN -> type(TAG_OPEN), popMode, pushMode(TAG);
