function curry(functionArg) {
  const argumentCount = functionArg.length;
  return function functionFirst() {
    const args = Array.prototype.slice.call(arguments, 0);
    if (args.length >= argumentCount) {
      return functionArg(...args);
    }
    return function functionSecond() {
      const args2 = Array.prototype.slice.call(arguments, 0);
      return functionFirst(...args.concat(args2));
    };
  };
}
module.exports = curry;

