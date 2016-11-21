%lex

%%
\s+         	{/* skip whitespace */}
[0-9]+      	{return 'NUMBER'}
[a-zA-Z]+       {return 'varName'} 
"="             { return 'identifier'}
"+"             { return 'plus'}
"*"             { return 'into'}
";"             { return 'end'}
<<EOF>>         {return 'EOF'}

/lex

%left 'plus'
%left 'into'
%left 'end'
%left 'identifier'

%%

expressions
	: operations EOF
	| operations end EOF
	;

assignment
	: varName identifier NUMBER end
	;

operations 
	: assignment 
	| assignment e
	;

e 
	: e plus e
	| e into e
	| NUMBER
	| varName
	;


