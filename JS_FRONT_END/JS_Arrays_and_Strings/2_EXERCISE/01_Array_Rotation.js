function solve (numbers = [], rotations) {

    for (let i = 0; i < rotations; i++) {
        const firstElement = numbers.shift();
        numbers.push(firstElement);
    }
    console.log(numbers.join(' '));
}

function proSolve (numbers = [], rotations) {
    const sliceNumber = rotations % numbers.length;

    const leftArr = numbers.slice(0, sliceNumber);
    const rightArr = numbers.slice(sliceNumber);
    const result = rightArr.concat(leftArr);
    console.log(result.join(' '));

}

solve([51, 47, 32, 61, 21], 2);
proSolve([51, 47, 32, 61, 21], 2);