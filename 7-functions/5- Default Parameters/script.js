/* function interest(principal, rate, year) {
  //* This is how we used to set default parameters values
  rate = rate || 3.5;
  year = year || 5;
  return ((principal * rate) / 100) * year;
}
 */

//NOTE: With ES6 we can set default parameters in much easier way

function interest(principal, rate = 3.5, year = 5) {
  return ((principal * rate) / 100) * year;
}

console.log(interest(10000));
