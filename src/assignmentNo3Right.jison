%lex

%%
\s+         	{/* skip whitespace */}
[0-9]+      	{return 'NUMBER';}
[a-zA-Z]+       {return 'var'} 
"="             { return 'identifier'}
";"             { return 'end'}
<<EOF>>         {return 'EOF';}

/lex


%%

endFunction 
	: e EOF
	;


assignment 
	: var identifier NUMBER end
	;

e
	: assignment
	| e assignment
    | NUMBER
    ;

