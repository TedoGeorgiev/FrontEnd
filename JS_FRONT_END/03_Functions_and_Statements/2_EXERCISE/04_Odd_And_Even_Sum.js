function oddAndEvenSum (input) {

    const numbers = input
        .toString() // convert to String
        .split('') // split
        .map((a) => parseInt(a)); // parse to a Number

    function oddOrEven(a) {
        return a % 2 === 0;
    }

    let evenSum = 0;
    let oddSum = 0;
    for (const number of numbers) {
        if (oddOrEven(number)) {
            evenSum += number;
        } else {
            oddSum += number;
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}


oddAndEvenSum(3495892137259234);
oddAndEvenSum(1000435);