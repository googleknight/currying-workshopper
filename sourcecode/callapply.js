const callAndApply = {
  caller(object, method, nameArg, ageArg, tShirtSizeArg) {
    method.call(object, nameArg, ageArg, tShirtSizeArg);
    return object;
  },
  applier(object, method, argumentsArr) {
    method.apply(object, argumentsArr);
    return object;
  },
};
module.exports = callAndApply;
