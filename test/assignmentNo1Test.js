var path = require("path");
var representation = require(path.resolve("./src/assignmentNo1.js"));
var assert = require('assert');

describe('Assignment No. 1 tests', function() {
	describe('represent function for tree', function() {

		it('should return list representaion for tree for more complex tree', function() {
			var result = representation("1+2+3;");
			assert.equal("( 1 + ( 2 + 3 ) )", result)
		});
		it('should return list representaion for tree for first level deep', function() {
			var result = representation("1+2;");
			assert.equal("( 1 + 2 )", result)
		});
	});
});