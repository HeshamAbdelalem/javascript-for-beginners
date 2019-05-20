// Write a function that takes two numbers and returns the maximum of the two

let maxNum = function(fir, sec) {
  if (fir < sec) {
    console.log(`${sec} is greater than: ${fir}`);
  } else if (sec < fir) {
    console.log(`${fir} is greater than: ${sec}`);
  } else if (fir === sec) {
    console.log('they are equal!!');
  }
};

maxNum(999.9, 999.9);
