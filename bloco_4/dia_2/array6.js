let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impar = 0;
for (num in numbers) {
  if (numbers[num] % 2 === 1) {
    impar += 1;
  }
}
if (impar != 0) {
  console.log(`esse array tem ${impar} numeros impar`);
} else {
  console.log(`nenhum valor ímpar encontrado`);
}
