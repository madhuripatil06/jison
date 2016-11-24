var node = {};


node.createAssignNode = function(name, node){
	return {
		type : "Assign",
		value : node,
		name : name,
		evaluate : function(symbolTable){
			return symbolTable[this.name] = this.value;
		}
	}	
};

module.exports = node;