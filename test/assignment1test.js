var fs = require("fs");
var grammer = fs.readFileSync("src/common.jison", "utf-8");
var Parser = require("jison").Parser;
var jison = new Parser(grammer);
var assert = require('assert');

describe.only('jison tests', function() {
	describe('evaluate function for tree', function() {
		it('should return three 1+2', function() {
			var tree = jison.parse("1+2");
			assert.equal(3, tree.evaluate());
		});

		it('should return six 1+2+3', function() {
			var tree = jison.parse("1+2+3");
			assert.equal(6, tree.evaluate());
		});
	});
});