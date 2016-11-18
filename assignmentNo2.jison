

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
	{console.log($1.join(" ").replace(",", ""))}
	; 

e

    : e plus e 
    	{
		    $$ = [$1,'plus', $3];
		}
    | e minus e 
	    {
		    $$ = [$1,'minus', $3] ;
	    }
    | e times e 
	    {
		    $$ = [$1,'times', $3] ;
	    }
    | e by e 
	    {
		    $$ = [$1,'by', $3];
	    }
    | NUMBER  
    	{
		    words = require("./numberToWords.js");
		    $$ = words($1);
		}
    ;

