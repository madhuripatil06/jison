var oneDigitNumber = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen","Fifteen", "Sixteen", "Seventeen","eighteen","Nineteen","Twenty" ];
var t = ["", "Ten","Twenty","Thirty", "Fourty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety", "Twenty"];
var positions = {"3":"Thousend", "6": "Million", "7": "Billion"};


 var parse2Digitnumber = function(number){
	if(+(number.join("")) == 0) return "";
	if(number[1] == 0)
		return t[+number[0]];
	if(+number > oneDigitNumber.length)
		return t[+number[0]] + " "+  oneDigitNumber[+number[1]];
	return oneDigitNumber[+(number[0]+number[1])];
};

var parse3DigitNumber = function(number){
	if(+(number.join("")) == 0) return "";
	if(+(number[0])== 0 && +number[1] == 0)
		return oneDigitNumber[+number[0]] +" Hundred";
	return oneDigitNumber[+number[0]]+" Hundred " + t[(+number[1])] +" "+ oneDigitNumber[(+number[2])] ;
};

var calculator = {};
calculator["1"] = function(number){
	return oneDigitNumber[+number[0]];
};
calculator["2"] = parse2Digitnumber;
calculator["3"] = parse3DigitNumber;

var splitBigNum = function(number){
	var result = [];
	var n = number.split("");
	for(var i = 0 ; i < n.length/3 ; i++){
		result.unshift(n.splice(-3));
	};
	if(n.length > 0)
		result.unshift(n);
	return parseBigNum(result);
}

var isItZero = function(number){
	return (+number.join("")) == 0
}

var parseBigNum = function(splitedNumber){
	var result = ""
	for(var i = 0 ; i < splitedNumber.length ; i++){
		var position = positions[(splitedNumber.length - i-1)*3];
		result += calculator[splitedNumber[i].length+""](splitedNumber[i])+ " ";
		if(!isItZero(splitedNumber[i]) && position)
			result += position + " " 
	}
	return result;
};

module.exports = splitBigNum;



