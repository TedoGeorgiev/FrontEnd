function loadingBar(number) {
    // Calculate the number of '%' and '.' characters
    let percentSigns = number / 10;
    let dots = 10 - percentSigns;

    // Construct the loading bar string
    let bar = '[' + '%'.repeat(percentSigns) + '.'.repeat(dots) + ']';

    // Print the loading bar with percentage
    if (number === 100) {
        console.log(`${number}% Complete!`);
        console.log(bar);
    } else {
        console.log(`${number}% ${bar}`);
        console.log("Still loading...");
    }
}

loadingBar(50);
loadingBar(100);
loadingBar();
