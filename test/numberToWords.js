var library = require("../numberToWords.js");
var assert = require('assert');

describe('Array', function() {
  describe('number representation for number 1', function() {
    it('should return One when the value is 1', function() {
      assert.equal("One", library("1"));
    });
  });
});