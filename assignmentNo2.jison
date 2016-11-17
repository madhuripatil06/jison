

%lex

%%
\s+         	/* skip whitespace */
[0-9]+      	return 'NUMBER'
"-"         	return 'minus'
"+"         	return 'plus'
"*"         	return 'times'
"/"         	return 'by'
<<EOF>>         return 'EOF'

/lex


%left 'plus'
%left 'minus'
%left 'times'
%left 'by'

%%

expressions
	: e EOF
	{console.log($1)}
	; 

e

    : e plus e 
    	{
		    $$ = ["(",$1,'plus', $3, ")"].join(" ") ;
		}
    | e minus e 
	    {
		    $$ = ["(",$1,'minus', $3, ")"].join(" ") ;
	    }
    | e times e 
	    {
		    $$ = ["(",$1,'times', $3, ")"].join(" ") ;
	    }
    | e by e 
	    {
		    $$ = ["(",$1,'by', words($3).trim(), ")"].join(" ") ;
	    }
    | NUMBER  
    	{
		    words = require("./numberToWords.js");
		    $$ = words($1).trim();
		}
    ;

