//NOTE: getters => access properties
//NOTE: setters => change (mutate) them

const person = {
  firstName: 'Hisham',
  lastName: 'Abdelalem',
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
  set fullName(value) {
    const parts = value.split(' ');
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

person.fullName = 'Ahmed Ali';

console.log('TCL: getfullName -> fullName:', person.fullName);
console.log('TCL: person', person);
