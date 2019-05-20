const array = [null, 0, '', 'asd', undefined, 5, 6, 6, null, 0, 6];

console.log(countTruthy(array));

function countTruthy(arr) {
  let count = 0;
  let repeat = 0;

  for (let value of arr) {
    if (value) {
      count++;
    }
    repeat++;
  }
  console.log('the for loop repeated:', repeat, 'times');
  console.log('You array have', Boolean(count), 'values');
  console.log('Your array have', count, 'truthy values');
  return count;
}
