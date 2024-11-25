grammar JSBSyntax;

document
    : propsDeclaration?
      codeDeclaration?
      contentDeclaration?
    ;

propsDeclaration
    : '<props>' propsContent '</props>'
    ;

codeDeclaration
    : '<code>' codeContent '</code>'
    ;

contentDeclaration
    : element+
    ;

propsContent
    : variableDeclaration?
    ;

codeContent
    : (variableDeclaration
      | functionDeclaration
      | importDeclaration
      | LINE_COMMENT
      )*
    ;

variableDeclaration
    : variableKind ID '=' expression ';'
    ;

functionDeclaration
    : 'export'? 'function' functionCall functionContent
    ;

importDeclaration
    : 'import' ID 'from' STRING ';'
    ;

variableKind
    : 'let'
    | 'const'
    ;

functionCall
    : ID '(' functionArgs? ')'
    ;

functionArgs
    : expression (',' expression)*
    ;

functionContent
    : BRACE_OPEN functionContentBody BRACE_CLOSE
    ;

functionContentBody
    : (statement | ANY_CHAR_NO_BRACE)*
    ;

statement
    : variableDeclaration
    | functionDeclaration
    | importDeclaration
    | expressionStatement
    | ifStatement
    | LINE_COMMENT
    ;

expressionStatement
    : expression ';'
    ;

ifStatement
    : 'if' '(' expression ')' statement ('else' statement)?
    ;

element
    : '<' ID attribute* '>' elementContent* '</' ID '>'
    | '<' ID attribute* '/>'
    | TEXT
    ;

elementContent
    : (element
    | TEXT)+
    ;

attribute
    : ID '=' STRING
    | ID '=' expressionInBraces
    ;

expressionInBraces
    : '{{' expression '}}'
    ;

expression
    : expression ('===' | '==' | '!=' | '<' | '>' | '<=' | '>=') expression
    | expression ('+' | '-' | '*' | '/' | '%') expression
    | '(' expression ')'
    | STRING
    | ID
    | functionCall
    ;

LINE_COMMENT : '//' ~[\r\n]* ;
ID  : [a-zA-Z_][a-zA-Z0-9_-]* ;
STRING : '\'' .*? '\'' ;
TEXT: [^<]+ ;
WS  : [ \t\r\n]+ -> skip ;

BRACE_OPEN: '{' ;
BRACE_CLOSE: '}' ;
ANY_CHAR_NO_BRACE: ~[{}] ;
