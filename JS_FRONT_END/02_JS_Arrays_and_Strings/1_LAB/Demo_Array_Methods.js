
let cars = ['BMW', 'Audi', 'Mercedes', 'Toyota', 'Mazda'];

// MUTATING Methods !!! //
// CHANGES the current ARRAY!!! //

// POP - remove last element
let lastCar = cars.pop();
console.log(cars);
console.log(lastCar);

// PUSH - add element at the END!!!
let newArrayLength = cars.push('Mitsubishi');
console.log(cars);
console.log(newArrayLength); // returns the length of the new array
cars.push('Lada', 'Trabant'); // can add multiple elements in same order
console.log(cars);

// SHIFT - remove first element
let firstCar = cars.shift();
console.log(cars);

// UNSHIFT - add element in the beginning of an array
let newLengthArr = cars.unshift('BMW'); // returns length
console.log(cars);
console.log(newLengthArr);

// SPLICE - remove element at position
let removedCars = cars.splice(2, 2); // delete elements from given position
console.log(cars); // returns another array with deleted elements
console.log(removedCars);

// SPLICE - add elementS on specific position
cars.splice(3, 0, 'Mercedes', 'Zaporojets');
console.log(cars);

// REVERSE elements
cars.reverse(); // changes original array
console.log(cars);



// NOT MUTATING Methods !!! //
// Do NOT Change current ARRAY!!! //


// JOIN -  array into a String
let result = cars.join(", ");
console.log(result);

// SLICE - takes SubArray (non mutating)
let middleCards = cars.slice(2, 5); // first Inclusive second Exclusive
console.log(middleCards);

let copyCars = cars.slice(); // Copy of the original Array
let reversedCopy = cars.slice().reverse(); // Reversed Copy of Array

// Check if element is in array
let carsBmw = cars.includes('BMW');
console.log(carsBmw); // Boolean
console.log(cars.includes('Chaika'));

// Check if element is in array after index
console.log(cars.includes('Toyota', 5));

// Find first index of element
const toyotaIndex = cars.indexOf('Toyota');
console.log(toyotaIndex); // -1 does not exist
const bmwIndex = cars.indexOf('BMW');
console.log(bmwIndex); // 6

// Find last index of element

console.log(cars.lastIndexOf('BMW'));

// FOREACH - execute code for every Element
cars.forEach(function (element) {
    console.log(element);
});
cars.forEach(element => {
    console.log(element.toUpperCase());
});

// MAP - create new array with values based on original
const lowerCaseCars = cars.map(function (car) {
    return car.toLowerCase();
});
console.log(lowerCaseCars);


//FIND - find the first element iterative
let carWithL = cars.find(function (car) {
   return car.startsWith('L');
});
console.log(carWithL);

//FIND - find all elements iterative
cars.push('Toyota');
const carsWithT = cars.filter(function (car) {
    return car.startsWith('T');
})
console.log(carsWithT);