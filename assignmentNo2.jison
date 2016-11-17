%lex

%%
\s+         	{/* skip whitespace */}
[0-9]+      	{return 'NUMBER';}
"+"         	{return 'plus';}
"-"         	{return 'minus';}
"*"         	{return 'times';}
<<EOF>>         {return 'EOF';}

/lex


%left 'times'
%left 'plus'
%left 'minus'

%%
E
	:E EOF{ console.log($$);}

    | E plus NUMBER 
    	{
		    $$ = ["(",$1,'plus', words($3).trim(), ")"].join(" ") ;
		}
    | E minus NUMBER 
	    {
		    $$ = ["(",$1,'minus', words($3).trim(), ")"].join(" ") ;
	    }
    | E times NUMBER 
	    {
		    $$ = ["(",$1,'times', words($3).trim(), ")"].join(" ") ;
	    }
    | NUMBER  
    	{
		    words = require("./numberToWords.js");
		    $$ = words($1).trim();
		}
    ;

