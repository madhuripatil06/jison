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


%{
  words = require("./numberToWords.js");
  represent = require("./parenthesis.js");
%}

%left 'plus'
%left 'minus'
%left 'times'
%left 'by'

%%

expressions
	: e EOF
	{
		console.log(represent($1));
	}
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
		    $$ = words($1).trim();
		}
    ;

