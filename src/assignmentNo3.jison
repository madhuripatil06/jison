%lex

%%
\s+         	{/* skip whitespace */}
";"      		{return 'END';}
[0-9]+      	{return 'NUMBER';}
[a-z]      		{return 'ALPHABET';}
"="      		{return 'ASSIGNMENT';}
"+"         	{return 'OPERATOR';}
<<EOF>>         {return 'EOF';}

/lex

%%



expressions
	: E EOF
		{console.log($$)}
	; 

E

    : E ALPHABET OPERATOR NUMBER END {$$ = (+$1)+(+$4)}

    | ALPHABET ASSIGNMENT NUMBER END {$$ = +$3}

    | E ALPHABET ASSIGNMENT NUMBER END

    | NUMBER {$$ = +$1}

    ;

