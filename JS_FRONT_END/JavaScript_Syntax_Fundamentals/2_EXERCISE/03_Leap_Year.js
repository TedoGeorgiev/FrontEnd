function solve (year) {

    let isLeapYear;

    isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

    console.log((isLeapYear === true) ? 'yes' : 'no');

}

solve(100);