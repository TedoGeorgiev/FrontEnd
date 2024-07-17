function solve (input = []) {

    let employeesArr = [];

    for (const person of input) {
        const number = person.length;
        const employee = {
            name: person,
            personalNumber: number,
        };
        employeesArr.push(employee);
    }

    for (const employee of employeesArr) {
        console.log(`Name: ${employee.name} -- Personal Number: ${employee['personalNumber']}`);
    }
}

function fancySolve (input = []) {
    const employeesArr = input.reduce((acc, person) => {
        // For each person, create an object with name and personalNumber properties
        const employee = {
            name: person,
            personalNumber: person.length
        };
        // Add the employee object to the accumulator array
        acc.push(employee);
        // Return the accumulator for the next iteration
        return acc;
    }, []); // Initialize the accumulator with an empty array

    // Loop through the array of employee objects and print the required format
    for (const employee of employeesArr) {
        console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNumber}`);
    }

}

fancySolve([
        'Samuel Jackson',
        'Will Smith',
        'Bruce Willis',
        'Tom Holland'
    ]
);

solve([
        'Silas Butler',
        'Adnaan Buckley',
        'Juan Peterson',
        'Brendan Villarreal'
    ]);