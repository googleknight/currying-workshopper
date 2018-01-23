const binary = require('./binary');

describe('Basic elementary tests', () => {
  it('it should returns sum of its argument', () => {
    expect(binary(10, 20)).toBe(30);
  });
  it('For no arguments it should return 0', () => {
    expect(binary()).toBe(0);
  });
  it('For single argument it should return 0', () => {
    expect(binary(40)).toBe(40);
  });
});

