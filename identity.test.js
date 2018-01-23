const identity = require('./identity');

describe('Basic elementary tests', () => {
  it('it should returns same as its argument', () => {
    expect(identity(10)).toBe(10);
  });
  it('Type of argument and of return value should be same', () => {
    expect(typeof identity(10)).toBe('number');
  });
  it('For no argument it should return undefined', () => {
    expect(typeof identity()).toBe('undefined');
  });
});

