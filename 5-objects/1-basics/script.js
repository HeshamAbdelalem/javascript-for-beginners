// * object literal syntax
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 2
  },
  isVisible: true,
  draw: function() {
    console.log("Drawed");
  }
};

circle.draw(); // ? method not function!
