var path = require("path");
var fs = require("fs");
var grammer = fs.readFileSync("src/common.jison", "utf-8");
var Parser = require("jison").Parser;
var jison = new Parser(grammer);
var Tree = require(path.resolve("./src/tree.js"));


var convertTreeToList = function(tree){
	var result = [];
	var keys = ["firstLeave", "parentNode","secondLeave"];
	for(var i = 0 ; i < keys.length; i++){
		if(tree[keys[i]] instanceof Tree)
			result.push(convertTreeToList(tree[keys[i]]))
		else
			result.push(tree[keys[i]].value);
	}
	return result;
};

var wrap = function(exp){
	var tree = jison.parse(exp);
	return convertTreeToList(tree[0]);
}

module.exports = wrap;