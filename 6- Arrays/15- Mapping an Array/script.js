//* map() method return an array or anything we determined from our array

const numbers = [1, 2, 3, 4, 5, -5, -4, -3, 0];

const filtered = numbers.filter(element =>
  element >= 0 //* this will return array with element match this statement which 0 and any positive number
);
console.log('TCL: filtered', filtered)

const items = filtered.map(el =>
  el = '<li>' + el + '</li>' //* this gonna return an array
);
console.log('TCL: items', items);


const html = items.join(' ');
console.log('TCL: html', html)