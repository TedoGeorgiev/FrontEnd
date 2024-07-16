function solve (radius) {

    let result;
    if (typeof radius === 'number') {
        result = Math.pow(radius, 2) * Math.PI;
        console.log(result.toFixed(2));
    } else {
        let type = typeof radius;
        result = `We can not calculate the circle area, because we receive a ${type}.`;
        console.log(result);
    }

}

solve(12);