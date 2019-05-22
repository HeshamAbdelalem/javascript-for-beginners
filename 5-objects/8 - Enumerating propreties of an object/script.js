const circle = {
  radius: 1,
  draw() {
    console.log("drawing");
  }
};

//* we use for..in loop to deal with objects
//* the easiest way to enumerate an object is using for..in loop

for (let key in circle) {
  console.log(key); //? this will log the properties of the circle object
  console.log(circle[key]); //? this will log the value of the properties
}

//* for..of loop can only be used with iterables such as arrays and maps!
//* Objects not iterable !

//for (let key of circle) {
//  console.log(key); //? this is will log Uncaught TypeError because circle /// is not iterable
//}

for (let key of Object.keys(circle)) {
  console.log("from for..of loop: ", key); //? will log the properties
  console.log("from for..of loop: ", circle); //? will log the properties
}
//?(method) ObjectConstructor.keys(o: {}): string[]
//?Returns the names of the enumerable properties and methods of an object.

for (const key of Object.entries(circle)) {
  //? gonna return each proprety and value in an array
  console.log(key);
}

//* to check if an property in an object we use "in" operator

if ("radius" in circle) console.log("radius in circle");
if ("color" in circle) console.log("color is not in circle");
