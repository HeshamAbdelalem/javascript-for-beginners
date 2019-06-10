/* function sum(a = null, b = null) {
  return a + b;
}

console.log(sum(1));
 */

function sum() {
  // console.log(arguments);

  let total = null;
  for (let value of arguments) {
    total += value;
  }
  return total;
}

console.log(sum(1, 2, 3, 5));
