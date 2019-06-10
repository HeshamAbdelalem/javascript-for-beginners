//* Function Declaration
function walk() {
  console.log('walking');
}

//* Anonymous Function Expression
const run = function() {
  console.log('running');
};

let move = run;

walk();
run();
move();
