lexer grammar oldLexer;

FUNCTION: 'function ';
ENDIF: '/if';
IF: 'if';
ELSE: 'else';
fragment VAR_LET: 'let';
fragment VAR_CONST: 'const';
fragment STRING_WRAPPER: QUOTE | DOUBLE_QUOTE;
fragment LBRACE: '{';
fragment RBRACE: '}';
LPAREN: '(';
fragment RPAREN: ')';
fragment COMMA: ',';
fragment SEMICOLON: ';';
fragment QUOTE: '\'';
fragment DOUBLE_QUOTE: '"';
fragment SLASH: '/';
fragment NUMBER: [0-9_]+;
fragment LETTER: [a-zA-Z_];

WS: [ \t\r\n]+ -> skip ;

IMPORT_OPEN: '<import>' -> pushMode(IMPORT);
PROPS_OPEN: '<props>' -> pushMode(PROPS);
CODE_OPEN: '<code>' -> pushMode(CODE);

BOOL: 'true' | 'false';

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

ASSIGN: '=';

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
        PROP_ASSIGN: ASSIGN-> type(ASSIGN), pushMode(STATEMENT) ;

        PROPS_WS: WS -> skip ;
        PROPS_CLOSE: '</props>' -> popMode ;

mode CODE;

        COMMENT_START: SLASH SLASH -> pushMode(COMMENT) ;

        CODE_VAR_DEF: VAR_DEF -> type(VAR_DEF) ;
        CODE_NAME: NAME -> type(NAME) ;
        CODE_ASSIGN: ASSIGN-> type(ASSIGN), pushMode(STATEMENT) ;

        FUNCTION_DECLARATION: FUNCTION -> type(FUNCTION) ;
        FUNCTION_NAME: NAME -> type(NAME) ;
        FUNCTION_ARGS_OPEN: LPAREN -> type(LPAREN), pushMode(FUNCTION_ARGS) ;
        BLOCK_OPEN: CODE_BLOCK_OPEN -> type(CODE_BLOCK_OPEN), pushMode(CODE) ;

        CODE_STATEMENT_END: STATEMENT_END -> type(STATEMENT_END) ;

        CODE_WS: WS -> skip ;
        BLOCK_CLOSE: CODE_BLOCK_CLOSE -> type(CODE_BLOCK_CLOSE), popMode ;
        CODE_CLOSE: '</code>' -> popMode ;

mode STATEMENT;

        FUNCTION_STATEMENT_CALL: FUNC_START -> type(FUNC_START), pushMode(FUNCTION_CALL_ARGS) ;
        STRING_START: STRING_WRAPPER -> type(STRING_OPEN), pushMode(STRING) ;
        NAME_STATEMENT: NAME -> type(NAME) ;
        STATEMENT_WS: WS -> skip ;
        STATEMENT_CLOSE: SEMICOLON -> type(STATEMENT_END), popMode ;

mode FUNCTION_ARGS;

        NAME_ARG: NAME -> type(NAME) ;
        FUNCTION_ARGS_SEPARATOR: ARGS_SEPARATOR -> type(ARGS_SEPARATOR) ;
        FUNCTION_ARGS_CLOSE: RPAREN -> type(ARGS_CLOSE), popMode ;
        FUNCTION_ARGS_WS: WS -> skip ;

mode FUNCTION_CALL_ARGS;

        NAME_CALL_ARG: NAME -> type(NAME) ;
        STRING_CALL_ARG: STRING_WRAPPER -> type(STRING_OPEN), pushMode(STRING) ;
        FUNCTION_CALL_ARG: FUNC_START -> type(FUNC_START), pushMode(FUNCTION_CALL_ARGS) ;
        FUNCTION_CALL_ARGS_SEPARATOR: ARGS_SEPARATOR -> type(ARGS_SEPARATOR) ;
        FUNCTION_CALL_ARGS_CLOSE: RPAREN -> type(ARGS_CLOSE), popMode ;
        FUNCTION_CALL_ARGS_WS: WS -> skip ;

mode IF_ARGS;

      IF_ARGS_SEPARATOR: ARGS_SEPARATOR -> type(ARGS_SEPARATOR) ;
      IF_ARGS_CLOSE: RPAREN -> type(ARGS_CLOSE), popMode ;
      IF_ARGS_WS: WS -> skip ;

mode TAG;
        TAG_WS: WS -> skip ;
        TAG_CLOSE: '>' -> popMode ;

        TAG_NAME: NAME -> type(NAME), pushMode(ATTRIBUTE) ;

mode ATTRIBUTE;

    ATTRIBUTE_WS: WS -> skip ;
    ATTRIBUTE_SLASH: SLASH -> type(TAG_SLASH) ;
    ATTRIBUTE_CLOSE: '>' -> type(TAG_CLOSE), popMode, pushMode(CONTENT) ;

    ATTRIBUTE_NAME: NAME -> type(NAME) ;
    ATTRIBUTE_ASSIGN: ASSIGN-> type(ASSIGN) ;
    ATTRIBUTE_VALUE: STRING_OPEN -> type(STRING_OPEN), pushMode(STRING) ;
    ATTRIBUTE_VALUE_DYNAMIC: EMBEDDED_OPEN -> type(EMBEDDED_OPEN), pushMode(EMBEDDED) ;

mode EMBEDDED;

    END_IF: ENDIF -> type(ENDIF) ;
    EMBEDDED_IF: IF -> type(IF) ;
    EMBEDDED_IF_ARGS_OPEN: LPAREN -> type(LPAREN), pushMode(IF_ARGS) ;

    EMBEDDED_NAME: NAME -> type(NAME) ;
    EMBEDDED_FUNCTION_NAME: NAME -> type(NAME) ;
    EMBEDDED_FUNCTION_ARGS_OPEN: LPAREN -> type(LPAREN), pushMode(FUNCTION_CALL_ARGS) ;
    CLOSE: EMBEDDED_CLOSE -> type(EMBEDDED_CLOSE), popMode ;
    EMBEDDED_WS: WS -> skip ;

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
