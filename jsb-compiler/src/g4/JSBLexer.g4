lexer grammar JSBLexer;

WS: [ \t\r\n]+ -> skip ;

EMBEDDED_OPEN: LBRACE LBRACE;
EMBEDDED_CLOSE: RBRACE RBRACE;
EMBEDDED_CONTENT_CLOSE: EMBEDDED_CLOSE -> pushMode(CONTENT);

INT: [0-9]+;
BOOL: 'true' | 'false';
STRING_OPEN: STRING_WRAPPER -> pushMode(STRING);

FUNCTION_START: 'function';
CODE_BLOCK_OPEN: LBRACE;
CODE_BLOCK_CLOSE: RBRACE;

IF_START: 'if ' LPAREN;

ARGS_OPEN: LPAREN;
ARGS_CLOSE: RPAREN;
FUNC_ARGS_SEPARATOR: COMMA;

VAR_DEF: VAR_LET | VAR_CONST;

NAME: LETTER (LETTER | NUMBER)*;

EQUALS: '=';

fragment VAR_LET: 'let';
fragment VAR_CONST: 'const';
fragment STRING_WRAPPER: QUOTE | DOUBLE_QUOTE;
fragment LBRACE: '{';
fragment RBRACE: '}';
fragment LPAREN: '(';
fragment RPAREN: ')';
fragment COMMA: ',';
fragment SEMICOLON: ';';
fragment QUOTE: '\'';
fragment DOUBLE_QUOTE: '"';
fragment NUMBER: [0-9]+;
fragment LETTER: [a-zA-Z];

TAG_SLASH_CLOSE: SLASH TAG_CLOSE;
STATEMENT_END: SEMICOLON;

IMPORT_OPEN: '<import>' -> pushMode(IMPORT);
PROPS_OPEN: '<props>' ;
PROPS_CLOSE: '</props>' ;
CODE_OPEN: '<code>' ;
CODE_CLOSE: '</code>' ;

TAG_OPEN: '<' -> pushMode(TAG);
COMMENT_START: '//' -> pushMode(COMMENT);
SLASH: '/';

mode IMPORT;

    FROM: 'from' ;
    IMPORT_ID: LETTER+ ;
    IMPORT_PATH_OPEN: STRING_WRAPPER -> pushMode(STRING) ;
    IMPORT_STATEMENT_END: SEMICOLON ;

    IMPORT_WS: WS -> skip ;
    IMPORT_CLOSE: '</import>' -> popMode ;

mode TAG;
        TAG_WS: WS -> skip ;
        TAG_CLOSE: '>' -> popMode ;

        TAG_NAME: NAME -> type(NAME), pushMode(ATTRIBUTE) ;
        TAG_SLASH: SLASH -> popMode ;

mode ATTRIBUTE;

    ATTRIBUTE_WS: WS -> skip ;
    ATTRIBUTE_CLOSE: '>' -> type(TAG_CLOSE), popMode, pushMode(CONTENT) ;

    ATTRIBUTE_NAME: NAME -> type(NAME) ;
    ATTRIBUTE_EQUALS: EQUALS -> type(EQUALS) ;
    ATTRIBUTE_VALUE: STRING_OPEN -> type(STRING_OPEN), pushMode(STRING) ;
    ATTRIBUTE_VALUE_DYNAMIC: EMBEDDED_OPEN -> type(EMBEDDED_OPEN), pushMode(EMBEDDED) ;

mode EMBEDDED;

    EMBEDDED_NAME: NAME -> type(NAME) ;
    CLOSE: EMBEDDED_CLOSE -> type(EMBEDDED_CLOSE), popMode ;

mode STRING;

    STRING_CONTENT: ~['"]* ;
    STRING_CLOSE: STRING_OPEN -> popMode ;

mode CONTENT;

     TEXT: ~[<{]+ ;
     EMBEDDED_POP: EMBEDDED_OPEN -> type(EMBEDDED_OPEN), pushMode(EMBEDDED) ;
     TAG_POP: TAG_OPEN -> type(TAG_OPEN), popMode, pushMode(TAG);

mode COMMENT;

     COMMENT_CONTENT: ~[\n]* ;
     COMMENT_CLOSE: '\n' -> popMode ;
