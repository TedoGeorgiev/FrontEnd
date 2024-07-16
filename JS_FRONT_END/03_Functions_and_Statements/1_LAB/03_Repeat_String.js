function solve (text, number) {
    console.log(text.repeat(number));
}

function repeatRecursive (text, number) {
    if (number === 1) {
        return text;
    }
    return text + repeatRecursive(text, number - 1);
}

solve("abc", 3);
solve("String", 2);

console.log('---------');

console.log(repeatRecursive("abc", 3));
console.log(repeatRecursive("String", 2));