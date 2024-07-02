
function solve (first, second, third) {
    let result;

    if (first > second && first > third) {
        result = first;
    } else if (second > first && second > third) {
        result = second;
    } else if (third > second && third > first) {
        result = third;
    }

    console.log(`The largest number is ${result}.`);
}

solve(-3, -5, -22.5);

function hackySolve (a, b, c) {
    let largestNumber = Math.max(a, b, c);
    console.log(`The largest number is ${largestNumber}.`);
}

hackySolve(-3, -5, -22.5);

