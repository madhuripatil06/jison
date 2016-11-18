var oneDigitNumber = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen","Fifteen", "Sixteen", "Seventeen","eighteen","Nineteen","Twenty" ];
var ten = ["", "Ten","Twenty","Thirty", "Fourty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety", "Twenty"];
var positions = {3:"Thousend", 6: "Million", 9: "Billion"};

var parse2Digitnumber = function(number){
	if(+(number) == 0) return "";
	if(number[1] == 0)
		return ten[+number[0]];
	if(+number > oneDigitNumber.length){
		return ten[+number[0]] + " "+  oneDigitNumber[+number[1]];
	}
	return oneDigitNumber[+(number)];
};

var parse3DigitNumber = function(number){
	if(+(number) == 0) return "";
	if(+(number[0])== 0 && +number[1] == 0)
		return oneDigitNumber[+number[0]] +" Hundred";
	var result = oneDigitNumber[+number[0]]+" Hundred ";
	result += parse2Digitnumber(number[1]+number[2])
	return result;
};

var calculator = {
	1: function(number){
		return oneDigitNumber[+number[0]];
	},
	2: parse2Digitnumber,
	3: parse3DigitNumber,
};

var splitBigNum = function(input){
	var result = [];
	var number = input.split("");
	var copy = input.split("");
	for(var i = 0 ; i < number.length/3 ; i++){
		result.unshift(copy.splice(-3).join(""));
	};
	if(copy.length)
		result.unshift(copy.join(""));
	return parseBigNum(result).trim();
}

var isItZero = function(number){
	return (+number) == 0
}

var parseBigNum = function(splitedNumber){
	var result = "";
	for(var i = 0 ; i < splitedNumber.length ; i++){
		var position = positions[(splitedNumber.length - i-1)*3];
		result += calculator[splitedNumber[i].length](splitedNumber[i])+ " ";
		if(!isItZero(splitedNumber[i]) && position)
			result += position + " "; 
	}
	return result;
};

module.exports = splitBigNum;



