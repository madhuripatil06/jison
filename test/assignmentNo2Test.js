var path = require("path");
var representation = require(path.resolve("./src/assignmentNo2.js"));
var assert = require('assert');

describe('Assignment No. 2 tests', function() {
	describe('represent tree in words', function() {
		it('should return list representaion for tree for more complex tree', function() {
			var result = representation("1+2");
			assert.equal("( One plus Two )", result)
		});
		it('should return list representaion for tree for more complex tree', function() {
			var result = representation("1*2");
			assert.equal("( One times Two )", result)
		});

		it('should return list representaion for tree for more complex tree', function() {
			var result = representation("6+1*2");
			assert.equal("( Six plus ( One times Two ) )", result)
		});


		it('should return list representaion for tree for more complex tree', function() {
			var result = representation("1000000000+2");
			assert.equal("( One Billion plus Two )", result)
		});
	});
});