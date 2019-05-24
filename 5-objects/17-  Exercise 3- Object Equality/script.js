function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

let address1 = new Address('a', 'b', 'c');
let address2 = new Address('a', 'b', 'c');

function areEqual(obj1, obj2) {
  for (let key in obj1) {
    for (let i in obj2) {
      if (obj1[key] === obj2[i]) {
        console.log('Yes They are Equal', key, i);
      }
    }
  }
}

areEqual(address1, address2);

//! Mosh used another approach for this exercise but i prefer mein
