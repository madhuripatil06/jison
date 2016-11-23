var node = {};

var operations = {
	'+': function(leave1, leave2){
		return leave1.evaluate() + leave2.evaluate()
	},
	'^': function(leave1, leave2){
		return Math.pow(leave1.evaluate(), leave2.evaluate());

	},
	'*': function(leave1, leave2){
		return leave1.evaluate() * leave2.evaluate();
	}
}


node.createNumberNode = function(number){
	return {
		type : "NUMBER",
		value : Number(number),
		evaluate : function(){
			return this.value;
		}
	}
};

node.createAssignNode = function(varName, node){
	return {
		type : "Assign",
		value : node,
		evaluate : function(){
			return this.value.evaluate();
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