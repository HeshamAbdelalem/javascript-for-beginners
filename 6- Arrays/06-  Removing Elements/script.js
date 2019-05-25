const numbers = [1, 2, 3, 4, 5];

//* Remove element from the end
//const last = numbers.pop(); //? it will remove the last element and returns it
//console.log('TCL: last:', last);

//* Remove element from the beginning
//const start = numbers.shift(); //? it will remove the first element and returns it
//console.log('TCL: start', start);

//* Remove element from the middle
const mid = numbers.splice(1, 3); //? start from index 1 and remove 3 elements , IT will also returns the removed elements
console.log('TCL: mid', mid);

console.log('TCL: numbers', numbers);
