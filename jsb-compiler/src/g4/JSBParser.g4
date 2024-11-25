parser grammar JSBParser;

options {
    tokenVocab = JSBLexer;
}

document
    :  element* EOF
    ;

element
    : TAG_OPEN TAG_NAME elementAttribute* (TAG_CLOSE content TAG_OPEN TAG_SLASH TAG_NAME TAG_CLOSE
                        | TAG_SLASH_CLOSE)
    ;

content
    : (element
    | TEXT)*
    ;

elementAttribute
    : TAG_NAME ATTRIBUTE_EQUALS ATTRIBUTE_VALUE
    ;
