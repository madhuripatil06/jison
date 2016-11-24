function UnaryTree(node){
	this.node = node;
	this.evaluate = function(symbolTable){
		return node.evaluate(symbolTable);
	};
};

module.exports = UnaryTree;