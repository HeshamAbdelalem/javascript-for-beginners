const address = {
  street: 'Hassan Matr',
  city: 'cairo',
  zipCode: '00202'
};

function showAddress(obj) {
  for (let key in obj) {
    console.log(key, ':', obj[key]);
  }
}
showAddress(address);
