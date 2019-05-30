const numbers = [1, 2, 3, 4, 5, -6, 0];
console.log('TCL: numbers', numbers);

const isPositive = numbers.every(value => { //* this method will check every element in the array
  return value >= 0;
});

console.log('isPositive: ', isPositive);


const atLeastOneIsPositive = numbers.some(value => { //* this method will check if this array have at least one matches our condition
  //! This method better than 'every()' method because if we had an array with million element on it, it will check it one by one
  return value >= 0; //* here it will check if only one element match!
});

console.log('atLeastOneIsPositive: ', atLeastOneIsPositive);