const numbers = [0, 1, 2, -9, 3, 4, 5, -6, -7];
console.log('numbers: ', numbers);

const filtered = numbers.filter(value => {
  return value >= 0;
});

console.log('filtered: ', filtered)