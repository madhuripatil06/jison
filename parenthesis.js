var represent = function(input,result){
	result.push("(");
	input.forEach(function(item){
		if(item instanceof Array){
			result = represent(item,result);
		}
		else
			result.push(item)
	});
	result.push(")");
	return result;
};

var wrap  =function(number){
	return represent(number, []).join(" ");
}

module.exports = wrap;
