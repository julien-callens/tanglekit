parser grammar TangleParser;

options {
    tokenVocab = TangleLexer;
}

document
    : importDeclaration?
      propsDeclaration?
      codeDeclaration?
      elementsDeclaration EOF
    ;

importDeclaration
    : IMPORT_OPEN importStatement* IMPORT_CLOSE
    ;

importStatement
    : componentImport
    | styleImport
    ;

componentImport
    : IMPORT_ID FROM IMPORT_PATH IMPORT_STATEMENT_END
    ;

styleImport
    : IMPORT_PATH IMPORT_STATEMENT_END
    ;

propsDeclaration
    : PROPS_OPEN propsContent PROPS_CLOSE
    ;

propsContent
    : variableDeclaration*
    ;

codeDeclaration
    : CODE_OPEN codeContent* CODE_CLOSE
    ;

codeContent
    : comment
    | variableDeclaration
    | ifStatement
    | functionDeclaration
    | (functionCall STATEMENT_END)
    | RETURN expression? STATEMENT_END
    | updateExpression STATEMENT_END
    | variableModification
    ;

functionDeclaration
    : FUNCTION NAME LPAREN functionArgs? ARGS_CLOSE CODE_BLOCK_OPEN codeContent* CODE_BLOCK_CLOSE
    ;

functionArgs
    : expression (ARGS_SEPARATOR expression)*
    ;

comment
    : COMMENT_START COMMENT_CONTENT? COMMENT_CLOSE
    ;

variableDeclaration
    : VAR_DEF NAME (ASSIGN expression)? STATEMENT_END
    ;

variableModification
    : NAME (ASSIGN | ASSIGN_OPERATOR) expression STATEMENT_END
    ;

ifStatement
    : IF EXPRESSION_OPEN expression EXPRESSION_CLOSE CODE_BLOCK_OPEN codeContent* CODE_BLOCK_CLOSE
    ;

embeddedIfStatement
    : EXPRESSION_OPEN expression EXPRESSION_CLOSE
    ;

updateExpression
    : CREMENT_OPERATOR NAME
    | NAME CREMENT_OPERATOR
    ;

elementsDeclaration
    : TAG_OPEN NAME elementAttribute*
    ( TAG_CLOSE content CLOSING_OPEN NAME TAG_CLOSE
    | TAG_SLASH TAG_CLOSE)
    ;

content
    : (elementsDeclaration
    | embeddedStatement
    | textContent)*
    ;

elementAttribute
    : NAME ASSIGN (embeddedStatement | stringType)
    ;

embeddedStatement
    : embeddedIf
    | EMBEDDED_OPEN expression EMBEDDED_CLOSE
    ;

expression
    : operand (operator operand)*
    ;

operand
    : functionCall
    | NOT_OPERATOR operand
    | LPAREN expression ARGS_CLOSE
    | updateExpression
    | variableTypes
    | NAME
    ;

embeddedIf
    : EMBEDDED_OPEN IF embeddedIfStatement EMBEDDED_CLOSE
    content
    embeddedElseIf*
    embeddedElse?
    EMBEDDED_OPEN EMBEDDED_END_IF EMBEDDED_CLOSE
    ;

embeddedElseIf
    : EMBEDDED_OPEN ELSE_IF embeddedIfStatement EMBEDDED_CLOSE
    content
    ;

embeddedElse
    : EMBEDDED_OPEN ELSE embeddedIfStatement? EMBEDDED_CLOSE
    content
    ;

functionCall
    : NAME(METHOD_CALL NAME)* LPAREN functionCallArgs? ARGS_CLOSE
    ;

functionCallArgs
    : expression (ARGS_SEPARATOR expression)*
    ;

variableTypes
    : INT
    | stringType
    | BOOL
    ;

stringType
    : STRING_VALUE
    ;

textContent
    : TEXT
    ;

operator
    : ARITHMETIC_OPERATOR
    | LOGICAL_OPERATOR
    | COMPARISON_OPERATOR
    ;
