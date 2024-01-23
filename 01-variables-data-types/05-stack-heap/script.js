const name = 'Ton';
const age = 20;

// Reference is stored in the heap
const person = {
  name: 'we are',
  age: 50,
};

let newName = name;
newName = 'Jonathan';

let newPerson = person;
newPerson.name = 'Bradley';

console.log(name, newName); // John, Jonathan
console.log(person, newPerson); // { name: 'Bradley', age: 40 }, { name: 'Bradley', age: 40 }