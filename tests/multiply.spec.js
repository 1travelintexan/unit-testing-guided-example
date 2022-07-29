const { multiply } = require('./../calculator.js');

describe('Multiply', () => {
  test('should multiply two positive integers correctly', () => {
    const result = multiply(2, 4);
    expect(result).toBe(8);
  });

  test('should return a negative number when one argument is negative', () => {
    const result = multiply(-2, 5);
    expect(result).toBe(-10);
  });

  test('should return zero if either argument is 0', () => {
    const result = multiply(2, 0);
    expect(result).toBe(0);
    const result2 = multiply(0, 2);
    expect(result2).toBe(0);
  });
});
