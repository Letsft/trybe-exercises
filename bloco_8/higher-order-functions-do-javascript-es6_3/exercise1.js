const assert = require('assert');
const arrays = [['1', '2', '3'], [true], [4, 5, 6]];

function flatten() {
  arrays.reduce((previousValue, currentValue) => previousValue.concat(currentValue), []);
  // escreva seu código aqui
}

assert.deepEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);
