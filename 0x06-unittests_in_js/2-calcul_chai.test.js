const expect = require('chai').expect;
const calculateNumber = require("./2-calcul_chai.js");

describe( 'calculateNumber', function (){
  it('Should add rounded number', function () {
    expect(calculateNumber('SUM', 1, 3)).to.equal(4);
  });
  it('Should subtract two rounded number', function () {
    expect(calculateNumber('SUBTRACT', 1, 3.7)).to.equal( -3);
  });
  it('should divided two rounded number', function () {
    expect(calculateNumber('DIVIDE', 3.7, 2.3)).to.equal(2);
  });
  it('should return error if b is 0', function () {
    expect(calculateNumber('DIVIDE', 1.5, 0)).to.equal('Error');
  });
});
