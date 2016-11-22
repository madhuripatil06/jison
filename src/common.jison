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
    var alltrees = []; 

    var operate  = function(arg1, operator, node){
        if(arg1 instanceof PlusTree)
            return new PlusTree(operator, arg1, node);
        return new PlusTree(operator, arg1, node);
    };

%}

%%

expression 
    :   e EOF {return $$;}
    ;

e   
    : e plus e {
        operator = node.createPlusNode($2);
        $$ = operate($1, operator, $3);
    }
    | number {$$ = node.createNumberNode($1);}
    ;