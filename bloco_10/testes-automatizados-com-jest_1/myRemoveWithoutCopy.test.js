
const myRemoveWithoutCopy = require('./myRemoveWithoutCopy');

test('if returns the expected array', () =>{
  expect(myRemoveWithoutCopy([1, 2, 3, 4,], 3)).toEqual([1, 2, 4]);
  expect(myRemoveWithoutCopy([1,2,3,4],5)).toEqual([1,2,3,4]);
});

test('if it do not return a wrong array', () =>{
  const arr = [1, 2, 3, 4];
  myRemoveWithoutCopy(arr, 3);
  expect(arr).not.toEqual([1 ,2 ,3 ,4]);
});

test('if it does change the passad array', () => {
  const arr = [1, 2, 3, 4];
  myRemoveWithoutCopy(arr, 1);
  expect(arr).toEqual([2, 3, 4]);
});
