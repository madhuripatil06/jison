var library = require("../parenthesis.js");
var assert = require('assert');

describe('parenthesis', function() {
	describe('parenthesis should add for simple list', function() {
		it('should return ( 1 )  the value is [1] ', function() {
		  assert.equal("( 1 )", library([1]));
		});

		it('should return ( 1 4 5 )  the value is [1,2,3] ', function() {
		  assert.equal("( 1 2 3 )", library([1,2,3]));
		});
	});

	describe('parenthesis should add for list in list', function() {
		it('should return ( 1 ( 1 2 ) )  the value is [1, [1,2]] ', function() {
		  assert.equal("( 1 ( 1 2 ) )", library([1,[1,2]]));
		});
	});
});