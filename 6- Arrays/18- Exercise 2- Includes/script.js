//*  implement a function similar to include method

const numbers = [1, 2, 3, 5, 10];
console.log(include(numbers, 3));

/* //! This is how i did it
function include(array, searchElement) {
  for (let i = 0; i <= array.length; i++) {
    console.log(array[i]);
    if (searchElement === array[i]) {
      return true;
    }
  }
  return false;
}
*/

//! This is how Mosh did it

function include(array, searchElement) {
  for (let element of array) {
    if (element === searchElement) {
      return true;
    }
  }
  return false;
}