function solve (number) {

    let sum = 0;
    let digits = number.toString();
    let isSame = true;

    for (let i = 1; i < digits.length; i++) {
        if (digits[0] === digits[i]) {
            isSame = true;
        } else {
            isSame = false;
            break;
        }
    }

    for (let i = 0; i < digits.length; i++) {
        sum += Number(digits[i]);
    }
    console.log((isSame) ? 'true' : 'false');
    console.log(sum);
}

solve(2);