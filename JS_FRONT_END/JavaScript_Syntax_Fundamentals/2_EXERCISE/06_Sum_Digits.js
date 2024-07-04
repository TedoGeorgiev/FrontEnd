function solve (number) {

    let sum = 0;

    while (number > 0) {
        let currentDigit = number % 10;
        sum += currentDigit;
        number = Math.trunc(number / 10);
        // number = parseInt(number / 10);
    }
    console.log(sum);
}


function hacky (number) {
    const numberAsString = number.toString();
    let sum = 0;

    for (let index = 0; index < numberAsString.length; index++) {
        sum += Number(numberAsString[index]);
    }
    console.log(sum);
}

function moreHacky (number) {
    console.log(number.toString()
        .split("")
        .map(Number)
        .reduce((a, b) => a + b, 0));
}

solve(543);
hacky(543);
moreHacky(543);