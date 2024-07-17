function solve (input = []) {
    let towns = [];

    for (const entry of input) {
        let [town, latitude, longitude] = entry.split(' | ');
        const newTown = {
            town,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2),
        }
        towns.push(newTown);
    }
    for (const town of towns) {
        console.log(town);
    }
}

function fancySolve (input = []) {

    input.reduce((towns, entry) => {
        let [town, latitude, longitude] = entry.split(' | ');
        let newTown = {
            town,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2),
        };
        towns.push(newTown);
        return towns;
    }, []).forEach((town) => console.log(town));

}

fancySolve(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
);

solve(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
);