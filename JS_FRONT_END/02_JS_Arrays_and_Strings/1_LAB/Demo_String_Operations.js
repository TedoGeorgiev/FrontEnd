// Basic syntax


// Concatenation - operator / method concat
const firstString = 'Hi! ';
const secondString = 'My name is Tedo.';
const greet = firstString + secondString;
console.log(greet);
console.log(firstString.concat(secondString));

// Find index of substring
const text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aperiam deleniti, distinctio ea eius explicabo facilis incidunt iste laboriosam nam non optio perspiciatis porro quaerat quis tempora tempore veniam voluptatum?';
const firstDolorIndex = text.indexOf('dolor'); // findFirst
console.log(firstDolorIndex);

const lastDolorIndex = text.lastIndexOf('dolor'); // findLast
console.log(lastDolorIndex);

//Substring
const subText = text.substring(0, firstDolorIndex);
console.log(subText);

//Replace
const replacedDolorText = text.replace('dolor', 'dolar');
console.log(replacedDolorText);

const replacedAllDolorText = text.replaceAll('dolor', '****');
console.log(replacedAllDolorText);


// Split string into array
const loremArray = text.split(' ');
console.log(loremArray);


//Includes - check for substring
const hasDolor = text.includes('dolor');
const hasDolor2 = text.includes('dolor2');
console.log(hasDolor);
console.log(hasDolor2);


// Repeat string
console.log('aa'.repeat(5));

// TRIM
const stringWithSpaces = '  some  text  ';
console.log(stringWithSpaces.trimEnd());
console.log(stringWithSpaces.trimStart());
console.log(stringWithSpaces.trim());
console.log(stringWithSpaces.trim().replaceAll('  ', ' '));


// StartsWith / EndsWith
console.log(text.startsWith('Lorem'));
console.log(text.endsWith('Ipsum'));

// Pad String
let number = 10;
let binaryString = number.toString(2); // Binary string 1010

// Pad Start
console.log(binaryString);
console.log(binaryString.padStart(8, '0'));

//Pad End
let decimalNumber = 0.111;
console.log(decimalNumber.toString().padEnd(6, '0'));