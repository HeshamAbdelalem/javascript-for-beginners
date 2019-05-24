//* String Primitive
const msg = 'hey';
//console.log('TCL: typeof msg', typeof msg); //! string
//NOTE: once we use dot notation and start to use String method, javascript automatically wrap our string with: new String() , and turns it to object
//console.log(msg.length;

//* String Object
const msg2 = new String('hey');
//console.log('TCL: typeof msg2', typeof msg2); //! object

//? The length property
console.log(msg.length);
