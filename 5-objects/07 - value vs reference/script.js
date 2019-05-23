//NOTE: Primitive are copied by their value
//NOTE: Objects are copied by their reference

//NOTE: Value Types:: Number, String, Boolean, Symbol, undefined, null
//NOTE: Reference Types:: object, function, array

//! Example Num-1 :

/* 
let x = 20;
let y = x;

x++;
console.log("x value:", x); //? x will be 21
console.log("y value:", y);//? y will still 20 
 */
/* 
let a = { value: 50 };
let b = a;

a.value = 100;

console.log(a.value); //? a will be 100
console.log(b.value); //? b will also be 100 because it's got copied be reference
 */

//! Example Num-2 :

let num = 10;

function increase(number) {
  number++;
  console.log("I'm inside the function:", number); //? this will get increase by 1
}

increase(num); //? this will be local on the function only
console.log('Out the function', num); //? this will be still 10

let obj = { value: 20 };

function increaseObj(objc) {
  objc.value++;
  console.log('The Object inside the function:', obj.value);
}

increaseObj(obj);
console.log('The Object Out the function:', obj.value);
