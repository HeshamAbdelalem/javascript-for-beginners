const numbers = [1, 2, 3, 4];

const joined = numbers.join('-'); //? this method gonna join the array and turns it to a string with (-) between each element
console.log('TCL: joined', joined);

const message = 'This is a message';
const parts = message.split(' '); //? this is gonna split the string and return an array

const combined = parts.join('-'); //? gonna return it to string with (-) after eac element

//NOTE: This technique is useful when we built url slug

console.log('TCL: combined', combined);
console.log('TCL: parts', parts);
