function signCheck (first, second, third) {
    function multiply (a, b) {
        return a * b;
    }
    const product = multiply(first, multiply(second, third));

    console.log(product >= 0 ? 'Positive' : 'Negative')

}

signCheck( 5,
    12,
    15
);