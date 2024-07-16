console.log(5 + 10); // addition operator 15
console.log(5 + '10'); // concatenation operator 510
console.log(1 + 2 + '3'); // 33
console.log('1' + 2 + 3); // 123


console.log(9 / 2); // 4.5
console.log(9 % 2); // 1

console.log(10 ** 2); // 100 ili 10 na kvadrat
console.log(Math.sqrt(9)); // 3 Koren ot 3

console.log(1 == '1'); // equality with coercion // (preobrazuva tipa za da go sravni)
console.log(1 === 1); // equality numbers without coercion
console.log('a' === 'a'); // equality strings with coercion
console.log('a' == 'b');
console.log('a' != 'b');

// Ternaren operator
console.log((5 > 7) ? 4 : 10); // 10 (ako 5 > 7 varni 4 inache 10)
console.log(((5 * 10) === 50) ? 'Equal' : 'Not Equal');

// if else

let number = 30;
if (number < 20) {
    console.log('Number is less than 20');
} else if (number < 30) {
    console.log('Number is less than 30');
} else {
    console.log('Number is equal or more than 30');
}

