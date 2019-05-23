const circle = {
  radius: 2,
  draw() {
    console.log('drawing...');
  }
};

//NOTE: 1- First way to clone object
//const anotherCircle = {};
/* 
for (let key in circle) {
  anotherCircle[key] = circle[key];
  console.log(anotherCircle[key]);
}
 */

//NOTE: 2- Second way to clone object

//* We can clone objects by using Object.assign({}, theNameOfTheObjectWeWantClone)
/* 
const anotherCircle2 = Object.assign({}, circle);
//* we can clone one or more object by this method

console.log('TCL: anotherCircle2', anotherCircle2);
 */
//NOTE: 3- Third way to clone object

const anotherCircle3 = { ...circle };
console.log('TCL: anotherCircle3', anotherCircle3);
