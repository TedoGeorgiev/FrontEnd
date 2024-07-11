function solve(numbers = []) {

    const sortArr = numbers.sort((a, b) => a - b);

    const outputArr = new Array(sortArr.length)
        .fill(0)
        .map((_, index) => {

            const isEven = index % 2 === 0;
            const smallNumberIndex = index / 2;
            const bigNumberIndex = sortArr.length - Math.ceil(index / 2);
            return isEven ? sortArr[smallNumberIndex] : sortArr[bigNumberIndex];
        });

    return (outputArr);
}

function noobSolve(array) {
    array.sort((a, b) => a -b);
    let output = [];
    let index = 0;
    for (let i = 0; i < array.length; i++) {
        output[index++] = array[i]
        if (index === array.length) {
            break;
        }
        output[index++] = array[array.length - i - 1]
        if (index === array.length) {
            break;
        }
    }
    return output;
}

const sortResult = solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
console.log(sortResult);

const noobResult = noobSolve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
console.log(noobResult);