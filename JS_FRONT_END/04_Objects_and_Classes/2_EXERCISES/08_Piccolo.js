function solve(input = []) {

    const garage = input.reduce((acc, carInfo) => {
        let [status, carNumber] = carInfo.split(', ');
        acc[carNumber] = status;

        return acc;
    }, {});

    const carsInside = Object.keys(garage)
        .filter((carNumber) => garage[carNumber] === 'IN')
        .sort((a, b) => a.localeCompare(b));

    if (carsInside.length !== 0) {
        console.log(carsInside.join('\n'));
    } else {
        console.log('Parking Lot is Empty');
    }

}

function hackySolve (input = []) {
    const parkingLot = new Set();

    input.forEach(carInfo => {
        const [status, carNumber] = carInfo.split(', ');

        if (status === 'IN') {
            parkingLot.add(carNumber);
        } else if (status === 'OUT') {
            parkingLot.delete(carNumber);
        }
    });

    if (parkingLot.size === 0) {
        console.log("Parking Lot is Empty");
    } else {
        console.log(Array.from(parkingLot).sort().join('\n'));
    }
}

function myTryWithSet (input = []) {
    const parkingLot = new Set;

    input.forEach((carInfo) => {
        const [status, carNumber] = carInfo.split(', ');
        status === 'IN' ? parkingLot.add(carNumber) : parkingLot.delete(carNumber);
    });

    if (parkingLot.size === 0) {
        console.log("Parking Lot is Empty");
    } else {
        console.log(Array.from(parkingLot).sort().join('\n'));
    }

}

myTryWithSet(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']);

// hackySolve(['IN, CA2844AA',
//     'IN, CA1234TA',
//     'OUT, CA2844AA',
//     'IN, CA9999TT',
//     'IN, CA2866HI',
//     'OUT, CA1234TA',
//     'IN, CA2844AA',
//     'OUT, CA2866HI',
//     'IN, CA9876HH',
//     'IN, CA2822UU']);
//
// solve(['IN, CA2844AA',
//     'IN, CA1234TA',
//     'OUT, CA2844AA',
//     'IN, CA9999TT',
//     'IN, CA2866HI',
//     'OUT, CA1234TA',
//     'IN, CA2844AA',
//     'OUT, CA2866HI',
//     'IN, CA9876HH',
//     'IN, CA2822UU']
// );
//
// solve(['IN, CA2844AA',
//     'IN, CA1234TA',
//     'OUT, CA2844AA',
//     'OUT, CA1234TA']
// );