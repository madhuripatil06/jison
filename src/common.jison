%lex

%%
\s+             {/* skip whitespace */}
[0-9]+          { return 'number';}
'+'             { return 'plus';}
';'             { return 'end';}
'='             { return 'assign';}
[a-zA-Z]+       { return 'string';}
'*'             { return 'into';}
<<EOF>>         { return 'EOF';}

/lex

%left 'plus'
%left 'into'
%right 'into'
%right 'assign'

%{  
    var path = require("path");
    var node = require(path.resolve("./src/node.js"));
    var Tree = require(path.resolve("./src/tree.js"));
    var memory = require(path.resolve("./src/memory.js"));
%}

%%

expression 
    :  final_result end EOF {return $$;}
    |  final_result EOF {return $$;}
    ;

assignment 
    : string assign number end {
        numberNode = node.createNumberNode($3);
        memory.createVarNode($1, numberNode);
        $$ = numberNode;
    }
    | assignment string assign number end {
        numberNode = node.createNumberNode($4);
        memory.createVarNode($2, numberNode);
        $$ = numberNode;
    }
    ;


final_result 
    :  assignment { $$ = $1;}
    |  assignment e end { $$ = $2;}
    |  e
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
    | string {$$ = memory.getVarNode($1);}
    ;