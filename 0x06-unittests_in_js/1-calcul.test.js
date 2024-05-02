var assert = require('assert');

const calculateNumber = require("./1-calcul.js");

describe( 'calculateNumber', function (){
  it('Should add rounded number', function () {
    assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
  });
  it('Should subtract two rounded number', function () {
    assert.strictEqual(calculateNumber('SUBTRACT', 1, 3.7), -3);
  });
  it('should divided two rounded number', function () {
    assert.equal(calculateNumber('DIVIDE', 3.7, 2.3), 2);
  });
  it('should return error if b is 0', function () {
    assert.equal(calculateNumber('DIVIDE', 1.5, 0), 'Error');
  });
});
