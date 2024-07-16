function addAndSubtract (first, second, third) {
    let sum = null;
    let subtract = null;

    sum = (a, b) => a + b;
    subtract = (a, b) => a - b;

    console.log(subtract(sum(first, second), third));

}


addAndSubtract(23,
    6,
    10
);

addAndSubtract(1,
    17,
    30
);

addAndSubtract(42,
    58,
    100
);