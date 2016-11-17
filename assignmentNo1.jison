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

%%

E
	:E EOF{ console.log($$);}

    | E OPERATOR NUMBER {$$ = ["(", $1, $2, $3, ")"].join("")}

    | NUMBER ;

