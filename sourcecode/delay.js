const delay = function outerFunction(first = 0) {
  return function innetFunction(second = 0) {
    return first + second;
  };
};
module.exports = delay;
