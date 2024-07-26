function sumTable() {
    const resultElement =
        document.getElementById('sum');

    // solution 1
    const tdElements =
        document.querySelectorAll('table tbody tr td:nth-of-type(2):not(#sum)');

    // let sum = 0;
    // for (const tdElement of tdElements) {
    //     sum += Number(tdElement.textContent);
    // }

    // FANCY SOLUTION 2
    const sum = Array.from(tdElements) // Creates an Array from NodeList
        .reduce((sum, td) => { // sum = 0, tdElement Iterate
            const price = Number(td.textContent); // take price of every element
            sum += price; // for each iteration we sum the price
            return sum; // return price
        }, 0); // start from 0 => sum = 0

    resultElement.textContent = sum.toString();
}