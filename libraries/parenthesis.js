var represent = function(input,result){
	result.push("(");
	input.forEach(function(item){
		if(item instanceof Array){
			result = result.concat(represent(item,[]));
		}
		else
			result.push(item)
	});
	result.push(")");
	return result;
};

var wrap  =function(input){
	return represent(input, []).join(" ");
}

module.exports = wrap;
