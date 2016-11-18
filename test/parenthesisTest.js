var library = require("../parenthesis.js");
var assert = require('assert');

describe('parenthesis', function() {
	describe('parenthesis should add ( in [ ', function() {
		it('should return ( 1 )  the value is [1] ', function() {
		  assert.equal("( 1 )", library([1]));
		});
	});
});