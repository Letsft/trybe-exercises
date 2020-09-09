let n = 5;
let texto = '';
let position = n;
for (let i = 0; i < n; i++) {
  for (let j = 0; j <= n; j += 1) {
    if (j < position) {
      texto += ' ';
    } else {
      texto += '*';
    }
  }
  console.log(texto);
  texto = '';
  position -= 1;
}
