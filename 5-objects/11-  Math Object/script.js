/* console.log(Math.abs(-95));

for (let i = 0; i <= 10; i++) {
  console.log(Math.floor(Math.random() * 10) + 1);
} */

//* To get a random number between 2 known numbers

function getRandomNum(min, max) {
  let result = Math.random() * (max - min) + min;
  let finalResult = Math.floor(result);
  console.log(finalResult);
}

//* I'm using this function only to test and iterate getRandomNum function
function repeat(key) {
  for (let i = 1; key >= i; i++) {
    getRandomNum(1, 5);
  }
}

repeat(5);
