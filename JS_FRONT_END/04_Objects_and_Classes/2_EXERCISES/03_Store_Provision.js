function solve (firstArr = [], secondArr = []) {

    let stocks = {};

    for (let i = 0; i < firstArr.length; i+=2) {
        const productName = firstArr[i];
        const productQuantity = Number(firstArr[i + 1]);

        stocks[productName] = productQuantity;
    }

    for (let i = 0; i < secondArr.length; i+=2) {
        const productName = secondArr[i];
        const productQuantity = Number(secondArr[i + 1]);

        if (stocks.hasOwnProperty(productName)) {
            stocks[productName] += productQuantity;
        } else {
            stocks[productName] = productQuantity;
        }
    }

    for (const stocksKey in stocks) {
        console.log(`${stocksKey} -> ${stocks[stocksKey]}`);
    }
}

fancySolve(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']
);

solve(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']
);