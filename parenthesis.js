var represent = function(input, result){
	if(!result)
		result = "";
	result += "( ";
	for(i = 0 ; i < input.length ; i++){
		if(input[i] instanceof Array)
			result += represent(input[i]);
		else
			result += " "+input[i] + " "
	}
	result += ")";
	return result;
};
