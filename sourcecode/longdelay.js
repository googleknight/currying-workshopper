let sum = 0;
function longdelay(input) {
  if (typeof input === 'undefined') {
    const result = sum;
    sum = 0;
    return result;
  }
  sum += input;
  return longdelay;
}

module.exports = longdelay;
