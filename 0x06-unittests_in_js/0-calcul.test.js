var assert = require('assert');

const calculateNumber = require("./0-calcul.js");

describe( 'calculateNumber', function (){
  it('Should add rounded number', function () {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });
  it('Should round and add float and int', function () {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });
  it('should round two float', function () {
    assert.equal(calculateNumber(1.2, 3.7), 5);
  });
  it('should round up two float', function () {
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });
});
