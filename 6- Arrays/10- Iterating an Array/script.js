let numbers = [1, 2, 3, 4, 5, 6];

for (let el of numbers) {
  console.log('el:', el);
}
/* 
numbers.forEach(function(el) { //* We can use the arrow function syntax
  console.log('forEach:', el);
});
 */

numbers.forEach((el, index) => console.log('forEach', index, el));
//* we can enter second parameter which will be the index of this array
