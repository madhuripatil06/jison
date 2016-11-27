var fs = require("fs");
var path = require("path");
var output = require(path.resolve("output.js"));
var grammer = fs.readFileSync("src/common.jison", "utf-8");
var treeAsList = require(path.resolve("./src/treeAsList.js"));
var Parser = require("jison").Parser;
var jison = new Parser(grammer);



var addPrintForLastTree = function(lastTree,result){
	if(typeof(lastTree) != "string")
		result += "console.log("+lastTree.toJs()+");\n";
	else 
		result += "console.log("+ lastTree+")\n";
	return result;
}


var process = function(){
	var tree = jison.parse("x=0;x;");
	var result = "";
	for(var i = 0 ; i < tree.length - 1 ; i++){
		result += tree[i].toJs();
	};
	var lastTree = tree[tree.length-1];
	return addPrintForLastTree(lastTree, result);
}



fs.writeFileSync(path.resolve("output.js"), process());
