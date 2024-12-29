parser grammar TangleParser;

options {
    tokenVocab = TangleLexer;
}

document
    : importDeclaration?
      propsDeclaration?
      codeDeclaration?
      elementsDeclaration
    ;

importDeclaration
    : IMPORT_OPEN importStatement* IMPORT_CLOSE
    ;

importStatement
    : componentImport
    | styleImport
    ;

componentImport
    : IMPORT_ID FROM IMPORT_PATH_OPEN STRING_CONTENT STRING_CLOSE IMPORT_STATEMENT_END
    ;

styleImport
    : IMPORT_PATH_OPEN STRING_CONTENT STRING_CLOSE IMPORT_STATEMENT_END
    ;

propsDeclaration
    : PROPS_OPEN propsContent PROPS_CLOSE
    ;

propsContent
    : variableDeclaration*
    ;

codeDeclaration
    : CODE_OPEN (codeContent comment?)* CODE_CLOSE
    ;

codeContent
    : comment
    | variableDeclaration
    | ifStatement
    | functionDeclaration
    | (functionCall STATEMENT_END)
    | variableModification
    ;

functionDeclaration
    : FUNCTION NAME LPAREN functionArgs? ARGS_CLOSE CODE_BLOCK_OPEN codeContent* CODE_BLOCK_CLOSE
    ;

functionArgs
    : expression (ARGS_SEPARATOR expression)*
    ;

comment
    : COMMENT_START COMMENT_CONTENT COMMENT_CLOSE
    ;

variableDeclaration
    : VAR_DEF NAME (ASSIGN statement)? STATEMENT_END
    ;

variableModification
    : NAME (ASSIGN | ASSIGN_OPERATOR) statement STATEMENT_END
    ;

ifStatement
    : IF EXPRESSION_OPEN booleanExpression EXPRESSION_CLOSE CODE_BLOCK_OPEN (codeContent comment?)* CODE_BLOCK_CLOSE
    ;

embeddedIfStatement
    : EXPRESSION_OPEN booleanExpression EXPRESSION_CLOSE
    ;

booleanExpression
    : expression operator expression
    ;

statement
    : (variableTypes | NAME)?
    | checkStatement
    | CREMENT_OPERATOR NAME
    | NAME CREMENT_OPERATOR
    | functionCall
    ;

checkStatement
    : (variableTypes | NAME) operator (variableTypes | NAME)
    ;

elementsDeclaration
    : TAG_OPEN NAME elementAttribute*
    ( TAG_CLOSE content TAG_OPEN TAG_SLASH NAME TAG_CLOSE
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
    : functionCall
    | embeddedIfStatement
    | variableTypes
    | NAME
    ;

embeddedIf
    : EMBEDDED_OPEN IF embeddedIfStatement EMBEDDED_CLOSE
    content?
    embeddedElseIf*
    embeddedElse?
    EMBEDDED_OPEN EMBEDDED_END_IF EMBEDDED_CLOSE
    ;

embeddedElseIf
    : EMBEDDED_OPEN ELSE_IF embeddedIfStatement EMBEDDED_CLOSE
    content?
    ;

embeddedElse
    : EMBEDDED_OPEN ELSE embeddedIfStatement? EMBEDDED_CLOSE
    content?
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
    : STRING_OPEN STRING_CONTENT STRING_CLOSE
    ;

textContent
    : TEXT
    ;

operator
    : ARITHMETIC_OPERATOR
    | LOGICAL_OPERATOR
    | COMPARISON_OPERATOR
    ;
