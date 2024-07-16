function solve (input = []) {

    let meetings = {};

    for (const entry of input) {
        let [weekday, personName] = entry.split(' ');

        if (weekday in meetings) {
            console.log(`Conflict on ${weekday}!`);
        } else {
            meetings[weekday] = personName;
            console.log(`Scheduled for ${weekday}`);
        }
    }

    for (const day in meetings) {
        console.log(`${day} -> ${meetings[day]}`);
    }

}


solve (['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']
);