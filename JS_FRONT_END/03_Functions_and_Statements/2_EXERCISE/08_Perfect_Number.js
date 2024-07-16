function perfectNumber (number) {

    let divisors = [];

    for (let i = 1; i <= number / 2; i++) {
        if (number % i === 0) {
            divisors.push(i);
        }
    }

    function sumDigits (numbersArr) {
        let sum = 0;
        for (const number of numbersArr) {
            sum += number;
        }

        return sum;
    }

    console.log(number === sumDigits(divisors) ? 'We have a perfect number!' : "It's not so perfect.");
}

perfectNumber(6);
perfectNumber(28);
perfectNumber(1236498);




