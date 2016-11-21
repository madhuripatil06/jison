var represent = function(input,result){
	result.push("(");
	input.forEach(function(item){
		if(item instanceof Array)
			result.concat(represent(item,[]));
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
