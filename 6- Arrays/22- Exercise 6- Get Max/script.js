const numbers = [1, 2, 2, 3, 5, 6, 4, 20, 30];

const max = getMax([-100, -99]);
console.log(max);
/*
function getMax(array) {
  let maxNumber = null;

  for (let ele of array) {
    if (ele > maxNumber) {
      maxNumber = ele;
    }
  }
  return maxNumber;
}
*/
//* this is was my solution
//* and this is how i done it with reduce method -i think i got it now- 

function getMax(array) {
  if (array.length === 0) return undefined;

  return array.reduce((value, current) => {
    let maxNumber = current > value ? current : value;
    console.log('getMax -> current:', current, 'value:', value);

    return maxNumber;
  } /*, 0 */ );
  //! when i tested my function on negative numbers it returns 0 all the time that's because i added 0 as a second parameter on reduce method which means value = 0 , and that's make a sense since my logic make maxNumber at line 24 = current or value (the greater number) and since 0 greater than all the negative numbers it will always return 0!!, so it will work with negative numbers if i remove the second parameter  
}