const myFizzBuzz = require('./myFizzBuzz');

test('if it returns fizzbuzz', () => {
  expect(myFizzBuzz(15)).toBe('fizzbuzz');
});

test('if it returns fizz', () => {
  expect(myFizzBuzz(9)).toBe('fizz');
});

test('if it returns buzz', () => {
  expect(myFizzBuzz(20)).toBe('buzz');
});

test('if receves only numbers', () => {
  expect(myFizzBuzz('string')).toBeFalsy();
});
