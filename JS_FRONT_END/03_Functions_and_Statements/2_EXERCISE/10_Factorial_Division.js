function factorialDivision (num1, num2) {
    function factorial (number) {
        let result = 1;
        for (let i = 1; i <= number ; i++) {
            result = result * i;
        }
        return result;
    }

    function divisionByTwo (a, b) {
        return a / b;
    }

    console.log(divisionByTwo(factorial(num1), factorial(num2)).toFixed(2));
}

factorialDivision(5, 2);
factorialDivision(6, 2);