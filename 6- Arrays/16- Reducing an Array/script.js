const numbers = [1, 2, 3, 4, 5, -1];



//let sum = null;
/* for (let el of numbers) {
  if (el >= 0) { //* this gonna exclude the negative numbers
    sum += el;
  }
  // console.log(el);
} */ //! we can do the same with cleaner way with reduce method


let sum = numbers.reduce((total, el) => {

  if (el >= 0) {
    total += el;
  }

  return total;
}); //* 0 refer to total argument


console.log(sum);