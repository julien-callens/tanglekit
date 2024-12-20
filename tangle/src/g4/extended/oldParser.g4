parser grammar oldParser;

options {
    tokenVocab = oldLexer;
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
    | (functionCall STATEMENT_END)
    ;

variableDeclaration
    : VAR_DEF NAME EQUALS statement STATEMENT_END
    ;

statement
    : functionCall
    | variableTypes
    | NAME
    ;

commentLine
    : COMMENT_START COMMENT_CONTENT
    ;

functionDeclaration
    : FUNCTION NAME LPAREN functionArgs? ARGS_CLOSE CODE_BLOCK_OPEN codeContent* CODE_BLOCK_CLOSE
    ;

ifStatement
    : IF NAME LPAREN expression ARGS_CLOSE CODE_BLOCK_OPEN codeContent* CODE_BLOCK_CLOSE
    ;

elementsDeclaration
    : TAG_OPEN NAME elementAttribute*
    ( TAG_SLASH TAG_CLOSE
    | TAG_CLOSE content TAG_OPEN TAG_SLASH NAME TAG_CLOSE)
    ;

content
    : (elementsDeclaration
    | embeddedIf
    | embeddedStatement
    | textContent)*
    ;

elementAttribute
    : NAME EQUALS (embeddedStatement | stringType)
    ;

embeddedStatement
    : EMBEDDED_OPEN expression EMBEDDED_CLOSE
    ;

functionCall
    : NAME LPAREN functionCallArgs? ARGS_CLOSE
    ;

functionArgs
    : NAME (ARGS_SEPARATOR NAME)*
    ;

functionCallArgs
    : expression (ARGS_SEPARATOR expression)*
    ;

expression
    : functionCall
    | variableTypes
    | NAME
    ;

embeddedIf
    : EMBEDDED_OPEN embeddedIfStatement EMBEDDED_CLOSE
    content?
    ((EMBEDDED_OPEN ELSE embeddedIfStatement? EMBEDDED_CLOSE)
    content?)*
    EMBEDDED_OPEN END_IF EMBEDDED_CLOSE
    ;

embeddedIfStatement
    : IF LPAREN ARGS_CLOSE
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
