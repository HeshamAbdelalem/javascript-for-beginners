//Note: 'this' => refering to the object that is executing the current function
//* if we in method 'this' will refer to => the obj
//* if we in regular function 'this' will refer to => global , window
/* 
const obj = {
  name: 'hisham',
  showMe() {
    console.log(this); //* will log the object
  }
};

function showMe() {
  console.log(this); //* will log the window object
}

showMe();
obj.showMe();
 */

const video = {
  title: 'a',
  tags: ['a', 'b', 'c'],
  showTags() {
    this.tags.forEach(tag => {
      console.log(this.title, tag);
    }, this);
  }
};

video.showTags();
