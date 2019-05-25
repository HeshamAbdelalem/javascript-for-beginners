const numbers = [5, 6];

//* Adds elements to the end
numbers.push(7, 8);

//* Adds elements to the start
numbers.unshift(1, 2, 3, 4);

//* Adds elements to the middle
//? numbers.splice(StartIndex, howManyElmentsWeWanaDelete, itemsWeWanaAdd)
numbers.splice(2, 0, 'a', 'b', true);

console.log(numbers);
