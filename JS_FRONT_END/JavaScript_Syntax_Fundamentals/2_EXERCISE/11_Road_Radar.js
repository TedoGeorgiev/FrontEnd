function solve (speed, drivingPlace) {
    const motorwayLimit = 130;
    const interstateLimit = 90;
    const cityLimit = 50;
    const residentialLimit = 20;

    let isSpeeding = false;
    let overSpeed = 0;
    let speedLimit = 0;

    switch (drivingPlace) {
        case 'motorway':
            if (speed > motorwayLimit) {
                isSpeeding = true;
                overSpeed = speed - motorwayLimit;
            }
            speedLimit = motorwayLimit;
            break;

        case 'interstate':
            if (speed > interstateLimit) {
                isSpeeding = true;
                overSpeed = speed - interstateLimit;
            }
            speedLimit = interstateLimit;
            break;

        case 'city':
            if (speed > cityLimit) {
                isSpeeding = true;
                overSpeed = speed - cityLimit;
            }
            speedLimit = cityLimit;
            break;

        case 'residential':
            if (speed > residentialLimit) {
                isSpeeding = true;
                overSpeed = speed - residentialLimit;
            }
            speedLimit = residentialLimit;
            break;
    }

    let drivingType;
    if (overSpeed > 0 && overSpeed <= 20) {
        drivingType = 'speeding';
    } else if (overSpeed <= 40) {
        drivingType = 'excessive speeding';
    } else if (overSpeed > 40) {
        drivingType = 'reckless driving';
    }

    if (isSpeeding) {
        console.log(`The speed is ${overSpeed} km/h faster than the allowed speed of ${speedLimit} - ${drivingType}`)
    } else {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`)
    }

}

solve(200, 'motorway');