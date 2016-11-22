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
    var alltrees =[];
%}

%%

expression 
    :  final_result end EOF {console.log(alltrees);return alltrees}
    |  final_result EOF {console.log(alltrees);return $$;}
    ;

assignment 
    : string assign number end {
        assignNode = node.createAssignNode($1, $3);
        alltrees.push(new Tree(assignNode, $1, $3));
    }
    | assignment string assign number end {
        assignNode = node.createAssignNode($2, $4);
        alltrees.push(new Tree(assignNode, $2, $4));
        }
    ;


final_result 
    :  assignment
    |  assignment e end
    |  e
    ;

e 
    : e plus e {
        operator = node.createOperatorNode($2);
        $$ = new Tree(operator, $1, $3);
        alltrees.push($$)
    }
    | e into e {
        operator = node.createOperatorNode($2);
        $$ = new Tree(operator, $1, $3);
        alltrees.push($$)
    }
    | number {$$ = node.createNumberNode($1); alltrees.push($$)}
    | string plus number {
        operator = node.createOperatorNode($2);
        $$ = new Tree(operator, $1, $3);
        alltrees.push($$);
    }
    ;