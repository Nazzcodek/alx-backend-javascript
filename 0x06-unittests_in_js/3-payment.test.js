const sinon = require('sinon');
const assert = require('assert');
const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('3-payment.js');

describe('sendPaymentRequestToApi', function() {
  describe('when sendPaymentRequestToApi is called', function() {
    it('should call Utils.calculateNumber with the correct arguments and validate the result', function() {
      // Create a spy for Utils.calculateNumber
      const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

      // Call the function under test
      sendPaymentRequestToApi(100, 20);

      // Assert that Utils.calculateNumber was called with the correct arguments
      assert.equal(calculateNumberSpy.calledWith('SUM', 100, 20), true, 'Utils.calculateNumber should be called with "SUM", 100, and 20');

      // Assert that the result is as expected
      const expectedTotal = 120; // Assuming 'SUM' operation adds the two numbers
      assert.equal(calculateNumberSpy.returnValues[0], expectedTotal, 'The result of Utils.calculateNumber should match the expected total');

      // Restore the original function
      calculateNumberSpy.restore();
    });
  });
});
