function solve(numbers = []) {
    let result = 0;

    numbers
        .filter(function (number) {
            return number % 2 === 0;
        })
        .forEach(function (number) {
            result += number;
        });

    numbers
        .filter(function (number) {
            return number % 2 !== 0;
        })
        .forEach(function (number) {
            result -= number;
        });

    console.log(result);
}

function noobSolve(numbers = []) {
    let result = 0;
    for (const number of numbers) {
        if (number % 2 === 0) {
            result += number;
        } else {
            result -= number;
        }
    }
    console.log(result);

}

solve([1, 2, 3, 4, 5, 6]);
noobSolve([1, 2, 3, 4, 5, 6]);