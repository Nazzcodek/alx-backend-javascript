Utils = require('./utils');

module.exports = function sendPaymentRequestToApi(totalAmount, totalShipping) {
    const output = Utils.calculateNumber('SUM', totalAmount, totalShipping);
    console.log(`The total is: ${output}`);
}
