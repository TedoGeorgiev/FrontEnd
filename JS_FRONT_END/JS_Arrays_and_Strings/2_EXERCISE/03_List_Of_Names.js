function sortArray (names = []) {
    names
        .sort((a, b) => a.localeCompare(b))

        // USE for comparing NUMBERS
        // .sort((a, b) => a - b)
        .forEach((name, index) => {
        console.log(`${index + 1}.${name}`);
    })
}


function sortArrayWithMap (names = []) {
    return names
        .slice() // copy original array, so we are sorting the copy
        .sort((a, b) => a.localeCompare(b))
        .map((name, index) => `${index + 1}.${name}`).join("\n");

}
sortArray(["John", "Bob", "Christina", "Ema"]);
// sortArray([1, 3, 11, 4, 33]);


const result = sortArrayWithMap(["John", "Bob", "Christina", "Ema"]);
console.log(result);
