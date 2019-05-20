// *iterate through an object with for..in loop

const person = {
  name: 'Hisham',
  age: 30
};

for (let key in person) {
  console.log(key, person[key]);
}

// *iterate through an array with for..in loop
/* 
const colors = ['red', 'green', 'blue', 'black'];

for (let index in colors) {
  console.log(index, colors[index]);
}
 */

// * iterate through an array with for..of loop

const colors = ['red', 'green', 'blue', 'black'];

for (let color of colors) {
  console.log(color);
}
