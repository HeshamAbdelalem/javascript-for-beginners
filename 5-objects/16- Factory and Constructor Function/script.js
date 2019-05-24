/*

//* Object Literal Notation
const address = {
  street: 'Hassan Matr',
  city: 'cairo',
  zipCode: '00202'
};
*/
//showAddress(address);

function showAddress(obj) {
  for (let key in obj) {
    console.log(key, ':', obj[key]);
  }
}

//* Factory Function
/*
function creatAddress(street, city, zipCode) {
  return {
    street,
    city,
    zipCode
  };
}
let address = creatAddress('HasanMatar', 'Cairo', '00202');
console.log(address);

*/

//* Constructor Function

function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

let address = new Address('HassanMatar', 'Cairo', 'zipCode');
console.log(address);
