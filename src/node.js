var node = {};
node.createNumberNode = function(number){
	return {
		type : "NUMBER",
		value : Number(number),
		evaluate : function(){
			return this.value;
		}
	}
};

node.createPlusNode = function(sign){
	return {
		type : "Operator",
		value : sign,
		evaluate : function(leave1, leave2) {
			return leave1.evaluate() + leave2.evaluate();
		}
	}
};

module.exports = node;