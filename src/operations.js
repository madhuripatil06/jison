var assignVariables = {};

var operations = {};

operations.assignVariable  = function(name, node){
	assignVariable[name] = node;
};

operations.getVariable = function(name){
	return assignVariable[name];
};

