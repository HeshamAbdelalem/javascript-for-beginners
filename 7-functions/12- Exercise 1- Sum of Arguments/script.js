//? in case the arguments are just numbers
/* console.log(sum(1, 2, 3));

function sum(...items) {
  const total = items.reduce((a, b) => a + b); //* we used this method because the rest operator returns the argument in an array
  return total;
}
 */

console.log(sum([1, 2, 3]));

function sum(...items) {
  //console.log(items); //* that's gonna return array inside array!
  if (items.length === 1 && Array.isArray(items[0])) {
    items = [...items[0]];
    console.log(items);
    return items.reduce((a, b) => a + b);
  }
}
