/* const video = {
  title: 'a',
  tags: ['a', 'b', 'c'],
  showTags() {
    this.tags.forEach(tag => {
      console.log(this.title, tag);
    });
  }
};
 */
//? First Solution
/*
const video = {
  title: 'a',
  tags: ['a', 'b', 'c'],
  showTags() {
    const self = this;
    this.tags.forEach(tag => {
      console.log(self.title, tag);
    });
  }
};
*/
//video.showTags();
//* we can declare a value and make its value 'this' which will refer to the object itself inside global methods like 'forEach'
/* 
function playVideo() {
  console.log(this);
}

playVideo.call({ name: 'hisham' }); //! this method will return the parameter as 'this' of the function not the global window object

playVideo.apply({ name: 'Abdelalem' });

playVideo.bind({ name: 'Atta' })(); //! we have to call it by ourself in this method

playVideo(); //! will still return 'this' as the global object
 */

//? Second Solution

/* 
const video = {
  title: 'a',
  tags: ['a', 'b', 'c'],
  showTags() {
    this.tags.forEach(
      function(tag) {
        console.log(this.title, tag);
      }.bind(this) //* bind method will make this refer to this which is the object not the global object of for  Each method
    );
  }
};
video.showTags();
//* that was another solution but there is better and newer solution
 */

//? Third Solution

//! use arrow function , it inherit 'this' from the containing function

const video = {
  title: 'a',
  tags: ['a', 'b', 'c'],
  showTags() {
    this.tags.forEach(tag => {
      console.log(this.title, tag);
    });
  }
};

video.showTags();
