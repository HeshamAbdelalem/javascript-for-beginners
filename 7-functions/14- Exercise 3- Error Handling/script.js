const numbers = [1, 2, 3, 1, 4, 5, 6, 6, 1, 1];

function countOccurrences(array, searchElement) {
  if (!Array.isArray(array)) {
    throw new Error("It's not an array");
  } else {
    return array.reduce((accumulator, current) => {
      let occurrence = current === searchElement ? 1 : 0;
      console.log(accumulator, current, searchElement);
      return occurrence + accumulator;
    }, 0);
  }
}

try {
  const test = 0;
  const count = countOccurrences(test, 1);
  console.log('TCL: count', count);
} catch (e) {
  console.log(e);
}
