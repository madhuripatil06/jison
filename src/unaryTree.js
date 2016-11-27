function UnaryTree(node){
	this.node = node;
	this.evaluate = function(symbolTable){
		return node.evaluate(symbolTable);
	};
	this.toJs = function(){
		return node.toJs();
	}
};

module.exports = UnaryTree;