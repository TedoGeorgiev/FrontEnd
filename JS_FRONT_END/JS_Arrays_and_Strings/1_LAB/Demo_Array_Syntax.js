
let names = ['Pesho', 'Gosho', 'Stamat'];

// Empty Array
let empty = [];

// Mixed Array // Do not do it
let mixed = ['Gosho', true, 5];

console.log(empty);
empty.length = 10;
console.log(empty);


// Dense array
let denseArr = [undefined, undefined, undefined];
let sparseArr = [];
sparseArr.length = 3;

console.log(denseArr.length === sparseArr.length);

// Number array

let numbers = [1, 2, 3 ,4];
console.log(names[0]); // first element
console.log(names[names.length - 1]); // last element

// Access non existent element
console.log(names[20]); // undefined

// Set element
names[0] = 'Tedi'; // update element
names[3] = 'Mimi'; // add new element
console.log(names[0]);
console.log(names[3]);
console.log(names);


// DESTRUCTURING first ARRAY is untouched...!!!
// Array destructuring assignment
let [firstName, secondName, thirdName, forthName] = names;
console.log(firstName); // vzima promenlivata firstName = 'Tedi'

// Partial destructuring
const [fName, sName] = names;
console.log(sName); // vzima promenlivata sName = 'gosho'


// Take the rest elements with partial destructuring USING REST OPERATOR ...!!!
const [first, second, ...restNames] = names;
console.log(first); // Tedi
console.log(second); // Gosho
console.log(restNames); // Stamat Mimi