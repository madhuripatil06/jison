%lex

%%
\s+         	{/* skip whitespace */}
[0-9]+      	{return 'NUMBER';}
"("      		{return 'OPEN';}
"+"         	{return 'OPERATOR';}
"-"         	{return 'OPERATOR';}
"*"         	{return 'OPERATOR';}
"/"         	{return 'OPERATOR';}
<<EOF>>         {return 'EOF';}

/lex

%{
	represent = require("./parenthesis.js");	
%}


%%
E
	:E EOF{ console.log(represent($$));}

    | E OPERATOR NUMBER {$$ = [$1, $2, $3]}

    | NUMBER ;

