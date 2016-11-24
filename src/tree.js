var feachVariable = function(name,symbolTable){
	var result;
	if(typeof(name) != "string")
		return name;
	if(typeof(name) == "string")
		result = symbolTable[name];
	if(typeof(result) == "string")
		result = feachVariable(result, symbolTable);
	return result;
}


var evaluateTree = function(parentNode, firstLeave, secondLeave, symbolTable){
	parentNode = feachVariable(parentNode, symbolTable)
	firstLeave = feachVariable(firstLeave, symbolTable);
	secondLeave = feachVariable(secondLeave, symbolTable);
	return parentNode.evaluate(firstLeave, secondLeave, symbolTable);
};


function Tree(parentNode, firstLeave, secondLeave){
	this.parentNode = parentNode;
	this.firstLeave = firstLeave;
	this.secondLeave = secondLeave;
	this.evaluate = function(symbolTable){
		return evaluateTree(parentNode, firstLeave, secondLeave, symbolTable);
	};
};


module.exports = Tree;