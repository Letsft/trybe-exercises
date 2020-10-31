const sum = require('./sum');

test('sums two values', () => {
  expect(sum(4, 5)).toBe(9);
  expect(sum(0, 0)).toBe(0);
});
test('parameters must be numbers', () => {
  expect(() => {
    sum(4, '5');
  }).toThrow('parameters must be numbers');
});
