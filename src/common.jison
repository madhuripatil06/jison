%lex

%%
\s+             {/* skip whitespace */}
[0-9]+          { return 'number';}
'+'             { return 'plus';}
'-'             { return 'minus';}
';'             { return 'end';}
'='             { return 'assign';}
'^'             { return 'power';}
[a-zA-Z]+       { return 'string';}
'*'             { return 'into';}
'/'             { return 'by';}
<<EOF>>         { return 'EOF';}

\/lex

%left 'plus'
%left 'minus'
%left 'into'
%left 'by'
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
    :  final_result EOF {return $$;}
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
    |  e end
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
    | e minus e {
        operator = node.createOperatorNode($2);
        $$ = new Tree(operator, $1, $3);
    }

    | e by e {
        operator = node.createOperatorNode($2);
        $$ = new Tree(operator, $1, $3);
    }
    | number {$$ = node.createNumberNode($1);}
    | string {$$ = memory.getVarNode($1);}
    ;