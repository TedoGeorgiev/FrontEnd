import os from 'os'; // Core module
import sum from './calculator.js'; //Internal module
import calculator from 'calculator';

console.log(`Hello from Nodejs ${os.EOL} new line`);

console.log(os.EOL.charCodeAt(0));
console.log(os.EOL.charCodeAt(1));

console.log(sum (2, 5));

const f = calculator.func('f(x) = x*10 - 20')
console.log(f(3)); //returns 10