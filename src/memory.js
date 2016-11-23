var variables = {};

var operations = {};

operations.createVarNode = function(varName, node){
	variables[varName] = node;
};

operations.getVarNode = function(varName){
	return variables[varName];
}

module.exports = operations;