const delay = require('../sourcecode/delay');

describe('Basic elementary tests', () => {
  it('The return type should be function', () => {
    expect(typeof delay(10)).toBe('function');
  });
  it('It should add and return 20', () => {
    expect(delay(15)(5)).toBe(20);
  });
  it('It should return back the same number when argument for outer function is empty', () => {
    expect(delay()(5)).toBe(5);
  });
  it('It should return back the same number when argument for inner function is empty', () => {
    expect(delay(5)()).toBe(5);
  });
  it('It should return 0 for no arguments', () => {
    expect(delay()()).toBe(0);
  });
});

