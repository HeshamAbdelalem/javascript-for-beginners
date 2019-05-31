const numbers = [1, 2, 3, 4, 5, 6, 1, 1, 2, 1];

const output = except(numbers, [1, 2, 6]);
console.log('TCL: output', output);
/*
function except(array, excluded) {
  let newArray = [];
  for (let key of array) {
    for (let el of excluded) {
      if (el !== key) {
        newArray.push(key);
      }
    }
  }
  return newArray;
}
//* the function with this way work if the excluded have only 1 element on the array
*/

//* This is mosh solution
//NOTE: i forget includes method!! please remember it!!

function except(array, excluded) {
  let newArray = [];
  for (let key of array) {
    if (!excluded.includes(key)) {
      newArray.push(key);
    }
  }
  return newArray;
}