var path = require("path");
var fs = require("fs");
var grammer = fs.readFileSync("src/common.jison", "utf-8");
var Parser = require("jison").Parser;
var jison = new Parser(grammer);
var PlusTree = require(path.resolve("./src/tree.js"));
var represent = require(path.resolve("./libraries/parenthesis.js"));


var convertTreeToList = function(tree){
	var result = [];
	var keys = Object.keys(tree);
	for(var i = 0 ; i < keys.length -1 ; i++){
		if(tree[keys[i]] instanceof PlusTree)
			result.push(convertTreeToList(tree[keys[i]]))
		else
			result.push(tree[keys[i]].value);
	}
	return result;
};

var representTree = function(expression){
	var tree = jison.parse(expression);
	return represent(convertTreeToList(tree));
}

module.exports = representTree;