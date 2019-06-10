function sum(...args) {
  //* with the rest operator we can put any numbers of parameters and it will return in an array
  return console.log(args);
}

//* this gonna return all the parameters in an array
sum(1, 2, 3, 4, 5);

//! This is how we can deal with unknown parameters using 'arguments' keyword and for..of loop to iterate over them
/*
function sumNumbers() {
  let total = null;
  console.log(arguments);
  for (let value of arguments) {
    total += value;
  }
  return console.log(total);
}
*/

//! This how we can deal with unknown parameters using rest operator '...'
/*
function sumNumbers(...args) {
  return args.reduce(
    (currentValue, currentIndex) => currentValue + currentIndex
  );
}

console.log(sumNumbers(1, 2, 3));
*/

//NOTE: the rest parameter should be the latest parameter

function sumShopCart(discount, ...prices) {
  let total = prices.reduce((a, b) => a + b);
  console.log('TCL: sumShopCart -> total', total);

  let dis = 1 - discount;

  let totalAfterDiscount = total * dis;
  console.log('TCL: sumShopCart -> totalAfterDiscount', totalAfterDiscount);

  return totalAfterDiscount;
}

sumShopCart(0.1, 100, 900);
