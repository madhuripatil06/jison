var library = require("../parenthesis.js");
var assert = require('assert');

describe('parenthesis', function() {
	describe('parenthesis for simple list', function() {
		it('should return ( 1 )  the value is [1] ', function() {
		  assert.equal("( 1 )", library([1]));
		});

		it('should return ( 1 4 5 )  the value is [1,2,3] ', function() {
		  assert.equal("( 1 2 3 )", library([1,2,3]));
		});
	});

	describe('parenthesis for list in list', function() {
		it('should return ( 1 ( 1 2 ) )  the value is [1, [1,2]] ', function() {
		  assert.equal("( 1 ( 1 2 ) )", library([1,[1,2]]));
		});
	});

	describe('parenthesis for complex lists', function() {
		it('should return ( 1 )  the value is [1] ', function() {
			console.log(library([1, [2], 4, [4,5,[8]]]));
		  assert.equal("( 1 ( 2 ) 4 ( 4 5 ( 8 ) ) )", library([1, [2], 4, [4,5,[8]]]));
		});

		// it('should return ( 1 4 5 )  the value is [1,2,3] ', function() {
		//   assert.equal("( 1 2 3 )", library([1,2,3]));
		// });
	});
});