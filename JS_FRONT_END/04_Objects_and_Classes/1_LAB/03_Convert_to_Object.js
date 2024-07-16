function convertToObject (json) {
    const person = JSON.parse(json);
    Object.keys(JSON.parse(json))
        // .reverse()
        .forEach(property =>
            console.log(`${property}: ${person[property]}`));
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');