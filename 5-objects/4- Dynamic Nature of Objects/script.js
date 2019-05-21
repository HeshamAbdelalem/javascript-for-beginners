const circle = {
  radius: 5
};

//* we can add new propreties and methods to our objects

circle.color = 'red';
circle.draw = function() {};

//* we can also delete those propreties and methods

delete circle.color;
delete circle.draw;

console.log(circle);
