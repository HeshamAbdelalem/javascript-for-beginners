//* object literal
/*
const blogPost = {
  title: 'Hello',
  body: 'ey my name is blabla blabla',
  author: 'hishamAbdelalem',
  views: 120,
  comments: [
    { author: 'Mosh Hamedani', body: 'i like how you write about yourself' }
  ],
  isLive: true
};
console.log('TCL: blogPost', blogPost);
*/

//* constructor function

function BlogPost(title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 0;
  this.comments = [];
  this.isLive = false;
}

let blogPost = new BlogPost('a', 'b', 'c');

console.log('TCL: blogPost', blogPost);
