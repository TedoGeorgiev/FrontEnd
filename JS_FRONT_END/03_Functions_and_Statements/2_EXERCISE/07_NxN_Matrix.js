function printMatrixFromN (number) {

    let col = [];
    for (let i = 0; i < number; i++) {
        col.push(number);
    }

    for (let i = 0; i < number; i++) {
        console.log(col.join(' '));
    }
}

printMatrixFromN(3);