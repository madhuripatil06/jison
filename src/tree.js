function PlusTree(parentNode, firstLeave, secondLeave){
	this.parentNode = parentNode;
	this.firstLeave = firstLeave;
	this.secondLeave = secondLeave;
	this.evaluate = function(){
		return parentNode.evaluate(firstLeave, secondLeave);
	};
};

module.exports = PlusTree;