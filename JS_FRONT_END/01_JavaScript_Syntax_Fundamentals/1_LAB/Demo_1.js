// let name = 'Pesho';
// debugger;
// console.log('Mr.' + name);

let age = 18;
let firstname = "Gosho";
let isMale = true;
let price = 2.0;

// if (age > price) {
//     console.log('Ti si golqm ' + age);
// }


function solve (num1, num2) {
    console.log(num1 * num2);
}

solve(1, 2);

console.log('My name is ' + firstname + '!');
console.log(`My name is ${firstname}!`);

let firstNumber = 3;
let secondNumber = 3.14259265359;

console.log(firstNumber.toFixed(2));
console.log(secondNumber.toFixed(2));

let minNumber = Number.MIN_VALUE;
let maxNumber = Number.MAX_VALUE;
let minSave = Number.MIN_SAFE_INTEGER;
let maxSave = Number.MAX_SAFE_INTEGER;

let singleQuote = 'Pesho';
let doubleQuote = "Gosho";
let template = `Stamat`;

console.log(`${singleQuote} ${doubleQuote} ${template}`);

const lastName = 'Georgiev';

let fixedNumber = secondNumber.toFixed(2);

console.log(fixedNumber);
let floatNumber = (parseFloat(fixedNumber));
let parsedNumber = Number(fixedNumber);
console.log(floatNumber);
console.log(parsedNumber);