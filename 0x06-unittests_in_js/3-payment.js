const Utils = require('./utils.js');

function sendPaymentRequestToApi(totalAmount, totalShipping) {
  result = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${result}`);
}

module.exports = sendPaymentRequestToApi;
