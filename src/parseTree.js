var tree = {
	value: []
};

tree.createParseTree = function(){
	this.value= [];
};

tree.addNode = function(node){
	this.value.push(node);
};

module.exports = tree;