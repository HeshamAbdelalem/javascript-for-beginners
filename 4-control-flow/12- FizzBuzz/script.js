// * Divisible by 3 => Fizz
// * Divisible by 5 => Buzz
// * Divisible by both 3 and 5 => FizzBuzz
// * Not divisible by 3 or 5 => input
// * Not a number => 'Not a Number!'
/* 
let fizzBuzz = function(input) {
  if (input % 3 === 0 && input % 5 === 0) {
    console.log('FizzBuzz');
  } else if (input % 5 === 0) {
    console.log('Buzz');
  } else if (input % 3 === 0) {
    console.log('Fizz');
  } else if ((input % 3 !== 0 || input % 5 !== 0) && !isNaN(input)) {
    console.log(input);
  } else if (isNaN(input)) {
    console.log('Not a Number!!!');
  }
};

fizzBuzz('aa'); */

// Mosh way

const output = fizzBuzz(15);
console.log(output);

function fizzBuzz(input) {
  if (typeof input !== 'number') return NaN;
  if (input % 3 === 0 && input % 5 === 0) return 'FizzBuzz';
  if (input % 3 === 0) return 'Fizz';
  if (input % 5 === 0) return 'Buzz';
  return input;
}
