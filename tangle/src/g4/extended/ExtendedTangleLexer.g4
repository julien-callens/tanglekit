lexer grammar ExtendedTangleLexer;

WS: [ \t\r\n]+ -> skip ;

// fragments
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

// operators
fragment PLUS: '+';
fragment MINUS: '-';
fragment MULTIPLY: '*';
fragment DIVIDE: '/';
fragment MOD: '%';
fragment AND: '&&';
fragment OR: '||';
fragment NOT: '!';
fragment EQUAL: '===';
fragment NOT_EQUAL: '!==';
fragment LESS: '<';
fragment LESS_EQUAL: '<=';
fragment GREATER: '>';
fragment GREATER_EQUAL: '>=';

// assignment
ASSIGN: '=';
fragment PLUS_ASSIGN: '+=';
fragment MINUS_ASSIGN: '-=';
fragment MULTIPLY_ASSIGN: '*=';
fragment DIVIDE_ASSIGN: '/=';
fragment INCREMENT: '++';
fragment DECREMENT: '--';

ASSIGN_OPERATOR: ASSIGN | PLUS_ASSIGN | MINUS_ASSIGN | MULTIPLY_ASSIGN | DIVIDE_ASSIGN;


// blocks
IMPORT_OPEN: '<import>' -> pushMode(IMPORT);
PROPS_OPEN: '<props>' -> pushMode(PROPS);
CODE_OPEN: '<code>' -> pushMode(CODE);

FUNCTION: 'function ';
IF: 'if';
ELSE_IF: 'else if';
ELSE: 'else';
LPAREN: '(';

EMBEDDED_OPEN: LBRACE LBRACE;
EMBEDDED_CLOSE: RBRACE RBRACE;
EMBEDDED_CONTENT_CLOSE: EMBEDDED_CLOSE -> pushMode(CONTENT);

// types
INT: [0-9]+;
BOOL: 'true' | 'false';
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
    PROP_ASSIGN: ASSIGN-> type(ASSIGN), pushMode(STATEMENT) ;

    PROPS_WS: WS -> skip ;
    PROP_CLOSE: STATEMENT_END -> type(STATEMENT_END);
    PROPS_CLOSE: '</props>' -> popMode ;

mode CODE;

    COMMENT_START: SLASH SLASH -> pushMode(COMMENT) ;

    IF_STATEMENT: IF -> type(IF), pushMode(IF_STATEMENT) ;

    CODE_VAR_DEF: VAR_DEF -> type(VAR_DEF) ;
    CODE_NAME: NAME -> type(NAME) ;
    CODE_ASSIGN: ASSIGN -> type(ASSIGN), pushMode(STATEMENT) ;
    CODE_ASSIGN_OPERATOR: ASSIGN_OPERATOR -> type(ASSIGN_OPERATOR), pushMode(STATEMENT) ;

    FUNCTION_DECLARATION: FUNCTION -> type(FUNCTION) ;
    FUNCTION_NAME: NAME -> type(NAME) ;
    METHOD_CALL: DOT ;
    FUNCTION_ARGS_OPEN: LPAREN -> type(LPAREN), pushMode(FUNCTION_ARGS) ;
    FUNCTION_CODE_BLOCK_OPEN: CODE_BLOCK_OPEN -> type(CODE_BLOCK_OPEN), pushMode(CODE) ;
    FUNCTION_CODE_BLOCK_CLOSE: CODE_BLOCK_CLOSE -> type(CODE_BLOCK_CLOSE), popMode ;

    CODE_STATEMENT_END: STATEMENT_END -> type(STATEMENT_END) ;
    CODE_WS: WS -> skip ;
    CODE_CLOSE: '</code>' -> popMode ;

mode IF_STATEMENT;

    EXPRESSION_OPEN: LPAREN -> popMode, pushMode(STATEMENT) ;
    IF_WS: WS -> skip ;

mode ELSE_STATEMENT;

    ELSE_EXPRESSION_OPEN: LPAREN -> type(EXPRESSION_OPEN), popMode, pushMode(STATEMENT) ;
    ELSE_WS: WS -> skip ;
    EMPTY_ELSE: EMBEDDED_CLOSE -> type(EMBEDDED_CLOSE), popMode, popMode ;

mode FUNCTION_ARGS;

    STRING_ARG: STRING_WRAPPER -> type(STRING_OPEN), pushMode(STRING) ;
    INT_ARG: INT -> type(INT) ;
    BOOL_ARG: BOOL -> type(BOOL) ;
    NAME_ARG: NAME -> type(NAME) ;
    FUNCTION_ARGS: LPAREN -> type(LPAREN), pushMode(FUNCTION_ARGS) ;

    FUNCTION_ARGS_SEPARATOR: ARGS_SEPARATOR -> type(ARGS_SEPARATOR) ;
    FUNCTION_ARGS_CLOSE: RPAREN -> type(ARGS_CLOSE), popMode ;
    FUNCTION_ARGS_WS: WS -> skip ;

mode STATEMENT;

    ARITHMETIC_OPERATOR: PLUS | MINUS | MULTIPLY | DIVIDE | MOD;
    LOGICAL_OPERATOR: AND | OR | NOT;
    COMPARISON_OPERATOR: EQUAL | NOT_EQUAL | LESS | LESS_EQUAL | GREATER | GREATER_EQUAL;
    CREMENT_OPERATOR: INCREMENT | DECREMENT;

    INT_STATEMENT: INT -> type(INT) ;
    BOOLEAN_STATEMENT: BOOL -> type(BOOL) ;
    STRING_START: STRING_WRAPPER -> type(STRING_OPEN), pushMode(STRING) ;
    NAME_STATEMENT: NAME -> type(NAME) ;
    STATEMENT_WS: WS -> skip ;
    STATEMENT_CLOSE: SEMICOLON -> type(STATEMENT_END), popMode ;
    EXPRESSION_CLOSE: RPAREN -> popMode ;

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
    ATTRIBUTE_ASSIGN: ASSIGN-> type(ASSIGN) ;
    ATTRIBUTE_VALUE: STRING_OPEN -> type(STRING_OPEN), pushMode(STRING) ;
    ATTRIBUTE_VALUE_DYNAMIC: EMBEDDED_OPEN -> type(EMBEDDED_OPEN), pushMode(EMBEDDED) ;

mode EMBEDDED;

    EMBEDDED_IF: IF -> type(IF), pushMode(IF_STATEMENT) ;
    EMBEDDED_ELSE_IF: ELSE_IF -> type(ELSE_IF), pushMode(IF_STATEMENT) ;
    EMBEDDED_ELSE: ELSE -> type(ELSE), pushMode(ELSE_STATEMENT) ;
    EMBEDDED_END_IF: SLASH IF ;

    EMBEDDED_INT: INT -> type(INT) ;
    EMBEDDED_BOOL: BOOL -> type(BOOL) ;
    EMBEDDED_NAME: NAME -> type(NAME) ;
    EMBEDDED_METHOD_CALL: DOT -> type(METHOD_CALL) ;
    EMBEDDED_FUNCTION_ARGS_OPEN: LPAREN -> type(LPAREN), pushMode(FUNCTION_ARGS) ;

    CLOSE: EMBEDDED_CLOSE -> type(EMBEDDED_CLOSE), popMode ;
    EMBEDDED_WS: WS -> skip ;

mode COMMENT;

    COMMENT_CONTENT: ~[\n]* ;
    COMMENT_CLOSE: '\n' -> popMode ;

mode STRING;

    STRING_CONTENT: ~['"]* ;
    STRING_CLOSE: STRING_OPEN -> popMode ;

mode CONTENT;

     TEXT: ~[<{]+ ;
     EMBEDDED_POP: EMBEDDED_OPEN -> type(EMBEDDED_OPEN), pushMode(EMBEDDED) ;
     TAG_POP: TAG_OPEN -> type(TAG_OPEN), popMode, pushMode(TAG);
