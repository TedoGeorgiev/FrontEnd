function smallestOfThree (first, second, third) {

    function smaller (a, b) {
        if (a > b) {
            return b;
        } else {
            return a;
        }
    }

    const result = smaller(first, smaller(second, third));
    console.log(result);
}

((a, b, c) => console.log(Math.min(a, b, c)))(2, 4, 15)

smallestOfThree(2,
    5,
    3
);

smallestOfThree(600,
    342,
    123
);

smallestOfThree(25,
    21,
    4
);