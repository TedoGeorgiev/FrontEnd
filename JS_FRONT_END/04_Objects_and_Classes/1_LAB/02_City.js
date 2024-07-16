function solve (city) {
    Object.keys(city)
        .forEach(propertyName =>
            console.log(`${propertyName} -> ${city[propertyName]}`));
}

solve({
        name: "Sofia",
        area: 492,
        population: 1238438,
        country: "Bulgaria",
        postCode: "1000"
    }
);