let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let menor = numbers[0]
for (num in numbers){

    if (numbers[num] < menor){
        menor = numbers[num];
    }
}
console.log(menor);