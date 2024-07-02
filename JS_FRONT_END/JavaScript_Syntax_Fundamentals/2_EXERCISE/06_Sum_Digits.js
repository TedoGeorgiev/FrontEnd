function solve (number) {

    let sum = 0;

    while (number !== 0) {
        let currentDigit = parseInt(number) % 10;
        sum += currentDigit;
        number = parseInt(number) / 10;
    }

    console.log(sum);
}

solve(543);