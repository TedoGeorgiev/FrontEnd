function solve(stringArr = [], number) {

    let result = [];
    for (let i = 0; i < stringArr.length; i += number) {
        result.push(stringArr[i]);
    }
    return result;

}

function proSolve(stringArr = [], number) {

    let result = [];
    stringArr.forEach((element, index) => {
        if (index % number === 0) {
            result.push(element);
        }
    });
    return result;
}


function filterSolve (stringArr = [], number) {
    return stringArr.filter((_, i) => i % number === 0);
}

solve(['5', '20', '31', '4', '20'], 2);
proSolve(['5', '20', '31', '4', '20'], 2);
filterSolve(['5', '20', '31', '4', '20'], 2);