
function solve (num1, num2, operator) {

    let sum = 0;

    switch (operator) {
        case '+':
            sum = num1 + num2;
            break;
        case '-':
            sum = num1 - num2;
            break;
        case '*':
            sum = num1 * num2;
            break;
        case '/':
            sum = num1 / num2;
            break;
        case '%':
            sum = num1 % num2;
            break;
        case '**':
            sum = num1 ** num2;
            break;
    }

    console.log(sum);

}

// hacky solve :)
function hackySolve(firstNumber, secondNumber, operator) {
    let expression = `${firstNumber} ${operator} ${secondNumber}`;
    let result = eval(expression);
    console.log(result);
}
hackySolve(4, 3, '*');
solve (4, 3, '%');