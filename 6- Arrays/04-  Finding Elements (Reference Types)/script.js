const courses = [
  { title: 'a', author: 'b', views: 50 },
  { title: 'c', author: 'd', views: 100 }
];

/* const course = courses.find(function(course) {
  return course.title === 'a';
}); */

const course = courses.findIndex(function(course) {
  return course.title === 'a';
});

console.log(course);
