
let names = ['Pesho', 'Gosho', 'Stamat', 'Tedi'];


// For-of-loop -> same as for each in JAVA, no INDEX
for (const name of names) {
    console.log(name);
}

// For-in-loop -> printing INDEX !!!
for (const namesKey in names) {
    console.log(namesKey);
}

function solve (numbers) {
    let output = '';
    for (const number of numbers) {
        output += number + ' ';
    }

    console.log(output.trim());

}
solve([1, 2, 3 ,4 ,5]);

