var operations = {
	"plus": function(node1, node2){ return node1.evaluate() + node2.evaluate();},
	"minus": function(node1, node2){ return node1.evaluate() - node2.evaluate();},
	"into": function(node1, node2){ return node1.evaluate() * node2.evaluate();},
	"by": function(node1, node2){ return node1.evaluate() / node2.evaluate();},
	"NUMBER": function(arg1){ return +arg1;},
}

module.exports = operations;