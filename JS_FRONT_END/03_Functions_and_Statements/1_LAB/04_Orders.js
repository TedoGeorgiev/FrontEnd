function calculateOrder(product, quantity) {

    const coffeePrice = 1.50;
    const waterPrice = 1.00;
    const cokePrice = 1.40;
    const snacksPrice = 2.00;

    let result = 0;
    switch (product) {
        case 'coffee':
            result = coffeePrice * quantity;
            break;
        case 'water':
            result = waterPrice * quantity;
            break;
        case 'coke':
            result = cokePrice * quantity;
            break;
        case 'snacks':
            result = snacksPrice * quantity;
            break;
    }

    console.log(result.toFixed(2));

}

calculateOrder("water", 5);
calculateOrder("coffee", 2);



