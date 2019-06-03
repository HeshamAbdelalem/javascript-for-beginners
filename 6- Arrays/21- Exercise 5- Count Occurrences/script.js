const numbers = [1, 2, 3, 1, 4, 5, 6, 6, 1, 1];

const count = countOccurrences(numbers, 1);
console.log('TCL: count', count);
/*
function countOccurrences(array, searchElement) {
  let count = 0;
  for (let ele of array) {
    if (searchElement === ele) {
      count++;
    }
  }
  return count;
}
*/
//* ^ This was my solution for this exercise
//* we can also achieve the same result by using reduce method
//* I couldn't understand the logic of reduce method at this moment -maybe i will come back to it later- and i prefer the first solution

function countOccurrences(array, searchElement) {
  return array.reduce((accumulator, current) => {
    let occurrence = current === searchElement ? 1 : 0;
    console.log(accumulator, current, searchElement);
    return occurrence + accumulator;
  }, 0);
}
