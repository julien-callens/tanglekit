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
    : CODE_OPEN codeContent* CODE_CLOSE
    ;

codeContent
    : variableDeclaration
    ;

variableDeclaration
    : VAR_DEF NAME (EQUALS statement)? STATEMENT_END
    ;

statement
    : variableTypes
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
    : NAME EQUALS (embeddedStatement | stringType)
    ;

embeddedStatement
    : EMBEDDED_OPEN expression EMBEDDED_CLOSE
    ;

expression
    : variableTypes
    | NAME
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
