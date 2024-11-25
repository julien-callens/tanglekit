parser grammar JSBParser;

options {
    tokenVocab = JSBLexer;
}

document
    :  element*
    ;

element
    : TAG_OPEN TAG_NAME elementAttribute* (TAG_CLOSE content TAG_OPEN TAG_SLASH TAG_NAME TAG_CLOSE | TAG_SLASH_CLOSE)
    ;

content
    : (element
    | TEXT
    | elementInsert)*
    ;

elementAttribute
    : TAG_NAME ATTRIBUTE_EQUALS (attributeInsert | elementInsert)
    ;

attributeInsert
    : ATTRIBUTE_OPEN ATTRIBUTE_VALUE (ATTRIBUTE_SEPARATOR ATTRIBUTE_VALUE)* ATTRIBUTE_CLOSE
    ;

elementInsert
    : (VAR_OPEN | ATTRIBUTE_VAR_OPEN) elementInsertContent VAR_CLOSE
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
    : VAR_NAME
    | varFunction
    ;
