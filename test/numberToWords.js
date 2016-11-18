var library = require("../numberToWords.js");
var assert = require('assert');

describe('Array', function() {
	describe('number representation for one digit number', function() {
		it('should return One when the value is 1', function() {
		  assert.equal("One", library("1"));
		});
	});

    describe('number representation for 2 digit number', function() {
	    it('should return Ten when the value is 10', function() {
	      assert.equal("Ten", library("10"));
	    });

	    it('should return Eighteen when the value is 18', function() {
	      assert.equal("Eighteen", library("18"));
	    });
	});


    describe('number representation for 3 digit number', function() {
		it('should return One Hundred when the value is 100', function() {
	      assert.equal("One Hundred", library("100"));
	    });

	    it('should return Two Hundred when the value is 200', function() {
	      assert.equal("Two Hundred", library("200"));
	    });

	    it('should return Five Hundred One when the value is 501', function() {
	      assert.equal("Five Hundred One", library("501"));
	    });
	});
});