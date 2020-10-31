const myRemove = require('./myRemove');

test('if returns the expected array', () => {
  expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
});

test('if it do not return a wrong array', () => {
  expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
});

test('does not change the passad array', () => {
  const arr = [1, 2, 3, 4];
  myRemove(arr, 1);
  expect(arr).toEqual([1, 2, 3, 4]);
});
