/* const numbers = [4, 2, 3, 1];

numbers.sort();
console.log(numbers);

numbers.reverse();
console.log(numbers);
  */

const courses = [{
    id: 1,
    name: 'Node.js'
  },
  {
    id: 2,
    name: 'JavaScript'
  }
];

courses.sort((a, b) => {

  let nameA = a.name.toUpperCase();
  let nameB = b.name.toUpperCase();

  if (nameA < nameB) return -1; //* which means escape
  if (nameA > nameB) return 1; //* which means rearrange them
  return 0;
});

console.log(courses);