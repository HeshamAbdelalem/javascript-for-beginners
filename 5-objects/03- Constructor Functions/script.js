// * object literal syntax
/* 
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 2
  },
  isVisible: true,
  draw: function() {
    console.log('Drawed');
  }
};

circle.draw(); // ? method not function!
 */
// * Factory function
/* 
function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log(`Drawing.. , your radius: ${radius}`);
    }
  };
}

const circle1 = createCircle(5);
console.log(circle1);
console.log(circle1.draw());

const circle2 = createCircle(10);
console.log(circle2);
console.log(circle2.draw());
 */

// * Construstor functions

// ? use pascal notation not camelCase when naming your constructor function

function CreateCircle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log(`drawing... , your radius is: ${radius}`);
  };
}

const circle1 = new CreateCircle(5);
console.log(circle1);
console.log(circle1.draw());
