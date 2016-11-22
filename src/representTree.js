var path = require("path");
var treeAsList = require(path.resolve("./src/treeAsList.js"));
var represent = require(path.resolve("./libraries/parenthesis.js"));

var representTree = function(expression){
	return represent(treeAsList(expression));
}

module.exports = representTree;