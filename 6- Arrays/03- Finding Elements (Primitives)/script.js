const numbers = [1, 2, 3, 4, 5, 1, 6];

//*  if the element in our array it will return the element index , else it will return -1

console.log(numbers.indexOf('a')); //? returns -1
console.log(numbers.indexOf(5)); //? returns 4 => which is '5' index

console.log(numbers.lastIndexOf(1)); //? returns 5 => which is '1' index
if (numbers.indexOf(1) !== -1) console.log(true); //? it will check if '1' in our array
if (numbers.includes(1)) console.log(true); //? an modern way to check if '1' in our array
