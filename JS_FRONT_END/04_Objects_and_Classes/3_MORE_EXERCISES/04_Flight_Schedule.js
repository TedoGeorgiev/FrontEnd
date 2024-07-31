function solve (input = []) {

    const allFlightsObj = input[0].reduce((acc, flight) => {
        const [flightNumber, flightCity] = flight.split(' ');
        const currentFlight = {
            flightCity,
            flightStatus: 'Ready to fly',
        };

        acc[flightNumber] = currentFlight;
        return acc;
    }, {})


    const flightsStatusChange = input[1];

    for (const flight of flightsStatusChange) {
        const [flightNumber, flightStatus] = flight.split(' ');

        if (allFlightsObj.hasOwnProperty(flightNumber)) {
            allFlightsObj[flightNumber].flightStatus = 'Cancelled';
        }
    }

    const [printByStatus] = input[2];

    Object.keys(allFlightsObj)
        .filter((key) => allFlightsObj[key].flightStatus === printByStatus)
        .forEach((flight) =>
            console.log(`{ Destination: '${allFlightsObj[flight].flightCity}', Status: '${allFlightsObj[flight].flightStatus}' }`));
}

solve([['WN269 Delaware',
        'FL2269 Oregon',
        'WN498 Las Vegas',
        'WN3145 Ohio',
        'WN612 Alabama',
        'WN4010 New York',
        'WN1173 California',
        'DL2120 Texas',
        'KL5744 Illinois',
        'WN678 Pennsylvania'],
        ['DL2120 Cancelled',
            'WN612 Cancelled',
            'WN1173 Cancelled',
            'SK430 Cancelled'],
        ['Cancelled']
    ]
);