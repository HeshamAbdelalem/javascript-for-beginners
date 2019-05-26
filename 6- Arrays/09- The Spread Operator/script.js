let first = [1, 2, 3];
let second = [4, 5, 6];

//let combined = first.concat(second);

let combined = [...first, ...second];
console.log('combined:', combined);

//let copy = combined.slice() //? when we leave it empty without any given index it will copy the whole array

let copy = [...combined];
console.log('copy:', copy);
