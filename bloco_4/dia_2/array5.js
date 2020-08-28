let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior = 0;
for (num in numbers){
    if (numbers[num] > maior){
        maior = numbers[num];
    }
}
console.log(maior);