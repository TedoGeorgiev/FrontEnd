function solve (input = []) {

    let allGroupProducts = {};

    for (const product of input) {
        const [name, price] = product.split(' : ');
        const currentProduct = {
            name,
            price,
        }

        const property = name[0].toUpperCase();
        if (!allGroupProducts.hasOwnProperty(property)) {
            allGroupProducts[property] = [];
        }
        allGroupProducts[property].push(currentProduct);
    }

    const sortedGroupKeys = Object.keys(allGroupProducts)
        .sort((a, b) => a.localeCompare(b));

    for (const key of sortedGroupKeys) {
        console.log(key);
        allGroupProducts[key].sort((a, b) => a.name.localeCompare(b.name))
            .forEach((product) => console.log(`  ${product.name}: ${product.price}`));
    }
}

function myTry (input = []){

    const allProductsObj = input.reduce((acc, product) => {
        const [name, price] = product.split(' : ');
        const property = name[0].toUpperCase();
        if (!acc.hasOwnProperty(property)) {
            acc[property] = [];
        }

        const currentObj = {
            name,
            price,
        };
        acc[property].push(currentObj);

        return acc;
    }, {});

    const sortedKeyProducts = Object.keys(allProductsObj)
        .sort((a, b) => a.localeCompare(b));

    for (const key of sortedKeyProducts) {
        console.log(key);
        allProductsObj[key].sort((a, b) => a.name.localeCompare(b.name))
            .forEach((product) => console.log(`  ${product.name}: ${product.price}`));
    }

}

myTry([
        'Omlet : 5.4',
        'Shirt : 15',
        'Cake : 59'
    ]
);

solve ([
        'Appricot : 20.4',
        'Fridge : 1500',
        'TV : 1499',
        'Deodorant : 10',
        'Boiler : 300',
        'Apple : 1.25',
        'Anti-Bug Spray : 15',
        'T-Shirt : 10'
    ]
);