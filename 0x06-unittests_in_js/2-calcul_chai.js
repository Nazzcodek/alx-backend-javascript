// the calculation function


module.exports = function calculateNumber(a, b, type) {
  aRound = Math.round(a);
  bRound = Math.round(b);
  if (type === 'SUM') {
    return aRound + bRound;
  }
  if (type === 'SUBTRACT') {
    return aRound - bRound;
  }
  if (type === 'DIVIDE') {
    if (bRound === 0) {
      return 'Error';
    }
  }
}
