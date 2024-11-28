lexer grammar JSBLexer;

WS: [ \t\r\n]+ -> skip ;

EMBEDDED_OPEN: LBRACE LBRACE;
EMBEDDED_CLOSE: RBRACE RBRACE -> pushMode(CONTENT);

FUNC_ARGS_OPEN: LPAREN;
FUNC_ARGS_CLOSE: RPAREN;
FUNC_ARGS_SEPARATOR: COMMA;

INT: [0-9]+;
BOOL: 'true' | 'false';
STRING_OPEN: STRING_WRAPPER -> pushMode(STRING);

NAME: LETTER (LETTER | NUMBER)*;

EQUALS: '=';
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

TAG_OPEN: '<' ;
TAG_CLOSE: '>' -> pushMode(CONTENT);
SLASH: '/';
TAG_SLASH_CLOSE: SLASH TAG_CLOSE;

mode STRING;

    STRING_CONTENT: ~['"]* ;
    STRING_CLOSE: STRING_OPEN -> popMode ;

mode CONTENT;

     POP_TAG: (TAG_OPEN | TAG_CLOSE | TAG_SLASH_CLOSE) -> popMode;
     POP_EMBEDDED: (EMBEDDED_OPEN | EMBEDDED_CLOSE) -> popMode;
     TEXT: ~[<{]+ ;
