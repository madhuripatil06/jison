%lex

%%
\s+             {/* skip whitespace */}
[0-9]+          { return 'number';}
'+'             { return 'plus';}
'*'             { return 'into';}
<<EOF>>         { return 'EOF';}

/lex

%left 'plus'
%left 'into'

%{  
    var path = require("path");
    var node = require(path.resolve("./src/node.js"));
    var Tree = require(path.resolve("./src/tree.js"));
%}

%%

expression 
    :   e EOF {return $$;}
    ;

e   
    : e plus e {
        operator = node.createOperatorNode($2);
        $$ = new Tree(operator, $1, $3);
    }
    | e into e {
        operator = node.createOperatorNode($2);
        $$ = new Tree(operator, $1, $3);
    }
    | number {$$ = node.createNumberNode($1);}
    ;