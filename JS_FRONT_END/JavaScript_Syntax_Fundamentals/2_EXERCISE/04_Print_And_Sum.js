function solve (num1, num2) {

    let sum= 0;
    let numbers = '';
    for (let i = num1; i <= num2 ; i++) {
        numbers += i + ' ';
        sum += i;
    }
    console.log(numbers.trim());
    console.log(`Sum: ${sum}`);
}

solve(0,26);