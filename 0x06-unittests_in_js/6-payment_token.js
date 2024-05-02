function getPaymentTokenFromAPI(success) {
  return New Promise((resolve) => {
    if (success) {
      resolve({data: 'Successful response from the API' });
    }
  });
}

module.exports = getPaymentTokenAPI;
