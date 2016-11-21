%lex

%%
\s+         	{/* skip whitespace */}
";"      		{return 'END';}
[0-9]+      	{return 'NUMBER';}
[a-z]      		{return 'ALPHABET';}
"="      		{return 'ASSIGNMENT';}
"*"         	{return 'times';}
"+"         	{return 'plus';}
"-"         	{return 'minus';}
<<EOF>>         {return 'EOF';}

/lex

%left 'plus'
%right 'times'
%right 'ASSIGNMENT'

%%



expressions
	: e EOF
		{console.log($1)}
	; 

e
	: e times NUMBER {$$ = (+$1) * (+$3);}

    | e ALPHABET plus NUMBER {$$ = (+$1) + (+$4);}

    | e plus NUMBER {$$ = (+$1) + (+$3) ;}

    | e minus NUMBER {$$ = (+$1) - (+$3)}

    | e ALPHABET minus NUMBER {$$ = (+$1) - (+$4)}

    | e ALPHABET times NUMBER {$$ = (+$1) * (+$4)}

    | ALPHABET ASSIGNMENT NUMBER END {console.log(+$3," assignment ",$3);$$ = +$3;}

    | e ALPHABET ASSIGNMENT NUMBER END

    | NUMBER
    ;

