var path = require("path");
var treeAsList = require(path.resolve("./src/treeAsList.js"));
var numtoWords = require(path.resolve("./libraries/numberToWords.js"));
var paren = require(path.resolve("./libraries/parenthesis.js"));

operatorsInWords = {"+": 'plus', "*": "times", "/": "by", "-": "minus"}

var represent = function(input){
	var result = [];
	for(var i = 0 ; i < input.length; i++){
		if(input[i] instanceof Array)
			result.push(represent(input[i]))
		else if(typeof(input[i])=="number")
			result.push(numtoWords(""+input[i]));
		else
			result.push(operatorsInWords[input[i]]);
	}
	return result;
};

var representTree = function(expression){
	var tree = treeAsList(expression);
	return paren(represent(tree));
}

module.exports = representTree;