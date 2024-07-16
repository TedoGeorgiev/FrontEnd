// DECLARATION
function printText (text) {
    console.log(text);
}

// ----------- //

// FUNCTION INVOCATION (Calling the function)
printText('Hello World!');

// ------------ //

// FUNCTION HOISTING
printSumResult (10, 20); // CALL BEFORE INITIALIZATION
function printSumResult (first, second) {
    console.log(first + second);
}

// ------------ //

// FUNCTION EXPRESSION
const subtractNumbers = function (a, b) {
    console.log(a - b);
}; // HAS ';' at the end
subtractNumbers(20, 10); // No Name function Invoke

// ------------ //

// RETURN STATEMENT
function calculateSum (a, b) {
    return a + b;
}
// SAVE RETURNED RESULT AS VARIABLE
const result = calculateSum(3, 5);
console.log(result);
// PRINT DIRECTLY
console.log(calculateSum(1, 2));
// EXECUTE METHOD ON RETURNED RESULT
const formattedSum = calculateSum(2, 3).toFixed(2);
console.log(formattedSum);
// USE IN EXPRESSION
const expressionResult = calculateSum(1, 3) * 10;
console.log(expressionResult);

// ------------ //

// EVERY FUNCTION RETURNS DEFAULT VALUE --> UNDEFINED
function printHeader () {
    console.log('Header');
}
const defaultReturn = printHeader();
console.log(defaultReturn); // UNDEFINED

