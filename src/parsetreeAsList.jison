%lex

%%
\s+         	{/* skip whitespace */}
[0-9]+      	{return 'NUMBER';}
"+"         	{return 'OPERATOR';}
"-"         	{return 'OPERATOR';}
"*"         	{return 'OPERATOR';}
"/"         	{return 'OPERATOR';}
<<EOF>>         {return 'EOF';}

/lex

%%

E
	:E EOF{ console.log($$);}

    | E OPERATOR NUMBER {$$ = [$2,$1, $3];}

    | NUMBER ;

