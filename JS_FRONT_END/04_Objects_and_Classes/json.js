const person = {
    name: 'Pesho',
    age: 20,
}

// CONVERT JS OBJECT TO JSON STRING
const data = JSON.stringify(person, null, 2);
console.log(typeof data);
console.log(data);

// CONVERT FROM JSON TO JS OBJECT
const originalObject = JSON.parse(data);
console.log(typeof originalObject);
console.log(originalObject);