var operations = require("./operations.js");
var Node = {};

Node.createOperatorNode = function(name){
	var node = {};
	node.name = name;
	node.type = "Operator";
	node.evaluator = Operations[name];
};

Node.createNumberNode = function(name){
	var node = {};
	node.name = name;
	node.type = "NUMBER";
	node.evaluator = Operations[name];
};

module.exports = Node;
