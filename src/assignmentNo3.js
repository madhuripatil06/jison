var path = require("path");
var fs = require("fs");
var grammer = fs.readFileSync("src/common.jison", "utf-8");
var Parser = require("jison").Parser;
var jison = new Parser(grammer);
var Tree = require(path.resolve("./src/tree.js"));
var memory = require(path.resolve("./src/memory.js"));
var UnaryTree = require(path.resolve("./src/unaryTree.js"));

var evaluateEachTree = function(setOfTrees, restTrees){
	var result;
	for(var i = 0 ; i < setOfTrees.length ; i++){
		if(setOfTrees[i] instanceof UnaryTree){
			setOfTrees[i] = setOfTrees[i].evaluate(memory);
			result = setOfTrees[i];
		}
		else
			restTrees.push(setOfTrees[i]);
	}
	return result;
} 

var evaluaterestTrees = function(trees){
	var result;
	for(var i = 0 ; i < trees.length ; i++){
		result = trees[i].evaluate(memory);
		
	}
	return result;
}



var evaluate = function(exp){
	var tree = jison.parse(exp);
	var restTrees = [];
	var result = evaluateEachTree(tree, restTrees);
	if(result)
		result = result.evaluate(memory);
	if(restTrees.length)
		result = evaluaterestTrees(restTrees);
	return result;
}

module.exports = evaluate;