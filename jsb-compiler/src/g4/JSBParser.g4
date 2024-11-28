parser grammar JSBParser;

options {
    tokenVocab = JSBLexer;
}

document
    :  importDeclaration?
       propsDeclaration?
       codeDeclaration?
       elementsDeclaration
    ;

importDeclaration
    : IMPORT_OPEN importContent* IMPORT_CLOSE
    ;

importContent
    : IMPORT_ID FROM IMPORT_PATH IMPORT_STATEMENT_END
    ;

propsDeclaration
    : PROPS_OPEN propsContent* PROPS_CLOSE
    ;

propsContent
    : variableDeclaration
    ;

codeDeclaration
    : CODE_OPEN codeStatement* CODE_CLOSE
    ;

codeStatement
    : variableDeclaration
    | functionDeclaration
    | importDeclaration
    | LINE_COMMENT
    ;

functionDeclaration
    : FUNC_DECLARATION functionCall
    ;

functionCall
    : FUNC_NAME FUNC_ARGS_OPEN functionArgs? FUNC_ARGS_CLOSE
    ;

elementsDeclaration
    : TAG_OPEN TAG_NAME elementAttribute* (TAG_CLOSE content TAG_OPEN TAG_SLASH TAG_NAME TAG_CLOSE | TAG_SLASH_CLOSE)
    ;

content
    : (elementsDeclaration
    | elementInsert
    | TEXT)*
    ;

elementAttribute
    : TAG_NAME ATT_EQUALS (attributeInsert | elementInsert)
    ;

attributeInsert
    : ATT_OPEN ATT_VALUE (ATT_SEPARATOR ATT_VALUE)* ATT_CLOSE
    ;

elementInsert
    : (VAR_OPEN | ATT_VAR_OPEN) elementInsertContent VAR_CLOSE
    ;

elementInsertContent
    : (varFunction | VAR_NAME)*
    ;

varFunction
    : VAR_NAME LPAREN functionArgs? RPAREN
    ;

functionArgs
    : expression (COMMA expression)*
    ;

expression
    : VAR_INT
    | varString
    | varFunction
    | VAR_NAME
    ;

variableDeclaration
    : variableKind VAR_NAME VAR_EQUALS expression VAR_END
    ;

varString
    : STRING_OPEN STRING_CONTENT* STRING_CLOSE
    ;

variableKind
    : PROP_ID
    | VAR_DECLARATION
    ;
