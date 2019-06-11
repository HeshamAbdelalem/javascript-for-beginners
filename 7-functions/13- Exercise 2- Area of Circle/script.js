const circle = {
  radius: 1,
  get area() {
    return Math.PI * this.radius * this.radius;
  }
};
circle.radius = 2;
circle.area = 15; //! we can't change the circle.area!
console.log(circle.area);
