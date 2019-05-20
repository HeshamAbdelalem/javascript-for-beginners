// ? for loop

for (let i = 0; i <= 20; i++) {
  if (i % 2 !== 0) {
    console.log('this is an odd number: ' + i);
  }
}

console.warn('NEW LOOP: While loop');
// ? while loop

/* 
let i = 0;
while (i <= 20) {
  if (i % 2 === 0) {
    console.log('this is an even number: ' + i);
  }
  i++;
}
 */
console.warn('do..while loop: ');
// ? do..while loop

let i = 21;
do {
  if (i % 2 !== 0) {
    console.log('this is an odd number: ' + i);
  }
  i++;
} while (i <= 10);
