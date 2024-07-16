function formatGrade (grade) {
    let result = '';

    if (grade < 3) {
        result = 'Fail';
    } else if (grade < 3.50) {
        result = 'Poor';
    } else if (grade < 4.50) {
        result = 'Good';
    } else if (grade < 5.50) {
        result = 'Very good';
    } else if (grade <= 6) {
        result = 'Excellent';
    }

    printGrade(result, grade);
    function printGrade (result, grade) {
        console.log(grade < 3 ? `${result} (2)` : `${result} (${grade.toFixed(2)})`);
    }

}


formatGrade(3.33);
formatGrade(4.50);
formatGrade(2.99);