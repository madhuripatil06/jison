%lex

%%
\s+             {/* skip whitespace */}
[0-9]+          { return 'number';}
'+'             { return 'plus';}
';'             { return 'end';}
'='             { return 'assign';}
'^'             { return 'power';}
[a-zA-Z]+       { return 'string';}
'*'             { return 'into';}
<<EOF>>         { return 'EOF';}

/lex

%left 'plus'
%left 'into'
%right 'into'
%right 'assign'
%left 'power'

%{  
    var path = require("path");
    var node = require(path.resolve("./src/node.js"));
    var Tree = require(path.resolve("./src/tree.js"));
    var memory = require(path.resolve("./src/memory.js"));
%}

%%

expression 
    :  final_result end EOF {console.log($$.evaluate());return $$;}
    |  final_result EOF {console.log($$.evaluate());return $$;}
    ;

assignment 
    : string assign e end {
        $$ = $3;
        memory.createVarNode($1, $3);
    }
    | assignment string assign e end {
        $$ = $4;
        memory.createVarNode($2, $4);
    }
    ;


final_result 
    :  assignment
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
    | e power e {
        operator = node.createOperatorNode($2);
        $$ = new Tree(operator, $1, $3);
    }
    | number {$$ = node.createNumberNode($1);}
    | string {$$ = memory.getVarNode($1);}
    ;