const assert = require('assert');

const names = [
  'Aanemarie',
  'Adervandes',
  'Akifusa',
  'Abegildo',
  'Adicellia',
  'Aladonata',
  'Abeladerco',
  'Adieidy',
  'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  return names.reduce(
    (previousValue, currentValue) =>
      previousValue + currentValue.toString().replace(/[^a || A]/g, '').length,
    0,
  );
}

assert.deepEqual(containsA(), 20);
