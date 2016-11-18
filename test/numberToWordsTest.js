var library = require("../numberToWords.js");
var assert = require('assert');

describe('number to words', function() {
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

	    it('should return Two Hundred Thirty Seven when the value is 237', function() {
	      assert.equal("Two Hundred Thirty Seven", library("237"));
	    });

	    it('should return Five Hundred One when the value is 501', function() {
	      assert.equal("Five Hundred One", library("501"));
	    });
	});

    describe('number representation for 4 digit number', function() {
	    it('should return One Thousend when the value is 1000', function() {
	      assert.equal("One Thousend", library("1000"));
	    });

	    it('should return One Thousend Four Hundred Fifty Six when the value is 1456', function() {
	      assert.equal("One Thousend Four Hundred Fifty Six", library("1456"));
	    });
	});

	 describe('number representation for big number', function() {
	    it('should return One Hundred  Thousend when the value is 100000', function() {
	      assert.equal("One Hundred Thousend", library("100000"));
	    });

		it('should return One Million when the value is 1000000', function() {
	      assert.equal("One Million", library("1000000"));
	    });
	});

});