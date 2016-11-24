var node = {};

var operations = {
	'+': function(leave1, leave2, symbolTable){
		return leave1.evaluate(symbolTable) + leave2.evaluate(symbolTable)
	},
	'^': function(leave1, leave2, symbolTable){
		return Math.pow(leave1.evaluate(symbolTable), leave2.evaluate(symbolTable));

	},
	'*': function(leave1, leave2, symbolTable){
		return leave1.evaluate(symbolTable) * leave2.evaluate(symbolTable);
	},
	'/': function(leave1, leave2, symbolTable){
		return leave1.evaluate(symbolTable) / leave2.evaluate(symbolTable);
	},
	'-': function(leave1, leave2, symbolTable){
		return leave1.evaluate(symbolTable) - leave2.evaluate(symbolTable);
	}
};


node.createNumberNode = function(number){
	return {
		type : "NUMBER",
		value : Number(number),
		evaluate : function(){
			return this.value;
		}
	}
};



node.createAssignNode = function(name, node){
	return {
		type : "Assign",
		value : node,
		name : name,
		evaluate : function(symbolTable){
			return symbolTable[this.name] = this.value;
		}
	}	
};

node.createOperatorNode = function(sign){
	return {
		type : "Operator",
		value : sign,
		evaluate : operations[sign]
	}
};

module.exports = node;