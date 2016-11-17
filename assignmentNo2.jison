%lex

%%
\s+         	{/* skip whitespace */}
[0-9]+      	{return 'NUMBER';}
"*"         	{return 'times';}
"-"         	{return 'minus';}
"+"         	{return 'plus';}
"/"         	{return 'by';}
<<EOF>>         {return 'EOF';}

/lex


%left 'plus'
%left 'minus'
%left 'times'
%left 'by'

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
    | E by NUMBER 
	    {
		    $$ = ["(",$1,'by', words($3).trim(), ")"].join(" ") ;
	    }
    | NUMBER  
    	{
		    words = require("./numberToWords.js");
		    $$ = words($1).trim();
		}
    ;

