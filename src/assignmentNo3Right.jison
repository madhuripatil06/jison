%lex

%%
\s+         	{/* skip whitespace */}
[0-9]+      	{return 'NUMBER';}
[a-zA-Z]+       {return 'var'} 
"="             { return 'identifier'}
"+"             { return 'plus'}
";"             { return 'end'}
<<EOF>>         {return 'EOF';}

/lex


%%

endFunction 
	: e EOF
	;


operations
	: operations end
	| var plus NUMBER
	| operations plus NUMBER
	;


assignment 
	: var identifier NUMBER end
	;

e
	: assignment
	| e operations
	| e assignment
    | NUMBER
    ;

