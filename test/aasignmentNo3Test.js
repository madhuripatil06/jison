var path = require("path");
var evaluator = require(path.resolve("./src/assignmentNo3.js"));
var assert = require('assert');

describe('Assignment No. 3 tests', function() {
	describe('evaluate function for tree', function() {
		it('should return value for assign tree', function() {
			var result = evaluator("x=2;");
			assert.equal(2, result)
		});

		it('should return value for expression tree', function() {
			var result = evaluator("2+9;");
			assert.equal(11, result)
		});


		it('should return value for expression with assign first tree', function() {
			var result = evaluator("x=0;x+9;");
			assert.equal(9, result)
		});


		it('should return value for expression with multiple assign exp tree', function() {
			var result = evaluator("x=1;y=7;x+y+9;");
			assert.equal(17, result)
		});
	});
});