const numbers = arrayFromRange(-10, 0);
console.log('TCL: numbers', numbers);

function arrayFromRange(min, max) {
  // take min and max
  // filter them and return them in array

  let ar = [];
  for (let i = min; i <= max; i++) {
    ar.push(i);
  }
  return ar;
}