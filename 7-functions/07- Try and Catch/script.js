const person = {
  firstName: 'Hisham',
  lastName: 'Abdelalem',
  set fullName(value) {
    // if (typeof value !== 'string') return;
    //* To make sure the value is string not boolean or null etc..
    if (typeof value !== 'string') throw new Error("It's not a string");

    const parts = value.split(' ');
    if (parts.length !== 2) throw new Error('Enter first and last name');
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

try {
  person.fullName = ' ';
} catch (e) {
  console.log(e);
}

console.log('TCL: getfullName -> fullName:', person.fullName);
console.log('TCL: person', person);
