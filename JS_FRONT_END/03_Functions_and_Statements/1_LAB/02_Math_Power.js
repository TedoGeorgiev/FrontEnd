function iterativePower (base, radix) {
    let result = 1;
    for (let i = 0; i < radix; i++) {
        result *= base;
    }

    return result;
}

function recursivePower (base, radix) {
    if (radix === 1) {
        return base;
    }
    return base * recursivePower(base, radix - 1);
}

function mathPower (base, radix) {
    const result = iterativePower(base, radix);
    console.log(result);

    const resultRecursive = recursivePower(base, radix);
    console.log(resultRecursive);
}

mathPower(2,8);
recursivePower(2, 8);