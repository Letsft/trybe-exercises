let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newnumbers = [];
for (let i = 1; i <= numbers.length; i += 1){
    if(i === numbers.length){
        newnumbers.push(numbers[i-1] * 2);
    }else {
        newnumbers.push(numbers[i] * numbers[i-1]);
    }
}
console.log(newnumbers);

