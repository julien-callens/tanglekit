lexer grammar JSBLexer;

WS: [ \t\r\n]+ -> skip ;

EMBEDDED_OPEN: LBRACE LBRACE;
EMBEDDED_CLOSE: RBRACE RBRACE;

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

TAG_OPEN: '<' ;
TAG_CLOSE: '>' -> pushMode(CONTENT);
COMMENT_START: '//' -> pushMode(COMMENT);
SLASH: '/';

mode IMPORT;

    FROM: 'from' ;
    IMPORT_ID: LETTER+ ;
    IMPORT_PATH_OPEN: STRING_WRAPPER -> pushMode(STRING) ;
    IMPORT_STATEMENT_END: SEMICOLON ;

    IMPORT_WS: WS -> skip ;
    IMPORT_CLOSE: '</import>' -> popMode ;

mode STRING;

    STRING_CONTENT: ~['"]* ;
    STRING_CLOSE: STRING_OPEN -> popMode ;

mode CONTENT;

     TAG_POP: (TAG_OPEN | TAG_CLOSE | TAG_SLASH_CLOSE) -> popMode;
     EMBEDDED_POP: (EMBEDDED_OPEN | EMBEDDED_CLOSE) -> popMode;
     TEXT: ~[<{]+ ;

mode COMMENT;

     COMMENT_CONTENT: ~[\n]* ;
     COMMENT_CLOSE: '\n' -> popMode ;
