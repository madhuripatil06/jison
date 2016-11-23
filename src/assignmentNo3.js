var path = require("path");
var fs = require("fs");
var grammer = fs.readFileSync("src/common.jison", "utf-8");
var Parser = require("jison").Parser;
var jison = new Parser(grammer);
var Tree = require(path.resolve("./src/tree.js"));

var evaluate = function(exp){
	var tree = jison.parse(exp);
	return tree.evaluate();
}

module.exports = evaluate;