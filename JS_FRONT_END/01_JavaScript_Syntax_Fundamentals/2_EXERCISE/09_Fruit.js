function solve (fruitType, grams, pricePerKilo) {
    let pricePerGram = pricePerKilo / 1000;
    let totalPrice = grams * pricePerGram;

    console.log(`I need $${totalPrice.toFixed(2)} to buy ${(grams / 1000).toFixed(2)} kilograms ${fruitType}.`)

}


solve('apple', 1563, 2.35);