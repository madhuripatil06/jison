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
    var UnaryTree = require(path.resolve("./src/unaryTree.js"));
%}

%%

expression 
    :  assignment EOF {return $1;}
    ;

assignment 
    : assignment assig end
        {$1.push($2);}
    | assignment e end
        {$1.push($2);}
    | {$$ = [];}
    ;

assig
    : string assign e {
       var n = node.createAssignNode($1, $3);
       $$ = new UnaryTree(n);
    };

operators
    : plus { $$ = $1;}
    | minus
    | into
    | by
    ;
e 
    : e operators e {
        operator = node.createOperatorNode($2);
        $$ = new Tree(operator, $1, $3);
    }
    | e power e {
        operator = node.createOperatorNode($2);
        $$ = new Tree(operator, $1, $3);
    }
    | number {$$ = node.createNumberNode($1);}
    | string {$$ = $1}
    ;