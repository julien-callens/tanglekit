parser grammar JSBParser;

options {
    tokenVocab = JSBLexer;
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
    : IMPORT_ID FROM IMPORT_PATH_OPEN STRING_CONTENT STRING_CLOSE IMPORT_STATEMENT_END
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
    :
    commentLine
    | functionDeclaration
    | ifStatement
    | variableDeclaration
    ;

variableDeclaration
    : VAR_DEF NAME EQUALS statement STATEMENT_END
    ;

statement
    : functionCall
    | variableTypes
    ;

commentLine
    : COMMENT_START COMMENT_CONTENT
    ;

functionDeclaration
    : FUNCTION_START NAME ARGS_OPEN functionArgs? ARGS_CLOSE CODE_BLOCK_OPEN codeContent* CODE_BLOCK_CLOSE
    ;

ifStatement
    : IF_START expression ARGS_CLOSE CODE_BLOCK_OPEN codeContent* CODE_BLOCK_CLOSE
    ;

elementsDeclaration
    : (TAG_POP | TAG_OPEN) NAME elementAttribute* (TAG_CLOSE content (TAG_POP | TAG_OPEN) SLASH NAME TAG_CLOSE | TAG_SLASH_CLOSE)
    ;

content
    : (elementsDeclaration | embeddedStatement | textContent)*
    ;

elementAttribute
    : NAME EQUALS (embeddedStatement | stringType)
    ;

embeddedStatement
    : (EMBEDDED_POP | EMBEDDED_OPEN) expression EMBEDDED_CLOSE
    ;

expression
    : functionCall
    | variableTypes
    | NAME
    ;

functionCall
    : NAME ARGS_OPEN functionArgs? ARGS_CLOSE
    ;

functionArgs
    : expression (FUNC_ARGS_SEPARATOR expression)*
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
