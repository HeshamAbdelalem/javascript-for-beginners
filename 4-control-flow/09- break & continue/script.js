//break
/* 
let i = 1;
while (i <= 10) {
  if (i === 3) {
    console.log(i);
    break;
  }
  console.log(i);
  i++;
}
 */

let i = 1;
while (i <= 10) {
  if (i === 3) {
    console.log('I reached i and i will be continue');
    i++;
    continue;
  }
  console.log(i);
  i++;
}
