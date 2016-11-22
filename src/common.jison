%lex

%%
\s+             {/* skip whitespace */}
[0-9]+          { return 'number';}
'+'             { return 'plus';}
<<EOF>>         { return 'EOF';}

/lex

%left 'plus'

%{  
    var path = require("path");
    var node = require(path.resolve("./src/node.js"));
    var PlusTree = require(path.resolve("./src/tree.js"));
%}

%%

expression 
    :   e EOF {return $$;}
    ;

e   
    : e plus e {
        operator = node.createPlusNode($2);
        $$ = new PlusTree(operator, $1, $3);
    }
    | number {$$ = node.createNumberNode($1);}
    ;