const delay = require('../sourcecode/longdelay');

describe('Checking return types ', () => {
  it('The return type should be function when called with arguments', () => {
    expect(typeof delay(10)).toBe('function');
  });
  it('The return type should be number when called without arguments', () => {
    expect(typeof delay()).toBe('number');
  });
});

describe('Basic elementary tests', () => {
  it('Calling twice and then empty with no argument, should return 40', () => {
    const function1 = delay(10);
    const function2 = function1(30);
    const result = function2();
    expect(result).toBe(40);
  });
  it('It should return back 0 if no arguments is passed', () => {
    const result = delay();
    expect(result).toBe(0);
  });
  it('Calling once with argument and then with no argument', () => {
    const function1 = delay(9);
    const result = function1();
    expect(result).toBe(9);
  });
});

