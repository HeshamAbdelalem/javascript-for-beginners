//* Function Declaration
//NOTE: we can call this function before it's defined
//NOTE: WHAT'S HOISTING IN JAVASCRIPT???
//! Hoisting is the process of moving function declarations to the top of the file, and this is done automatically by the javascript engine

walk();

function walk() {
  console.log('walking');
}

//* Anonymous Function Expression
const run = function() {
  console.log('running');
};

let move = run;

run();
move();
