function solve (number, numberArray = []) {
    const reversedArray = numberArray
        .slice(0, number)
        .reverse()
        .join(' ');
    console.log(reversedArray);
}

solve(3, [10, 20, 30, 40, 50]);