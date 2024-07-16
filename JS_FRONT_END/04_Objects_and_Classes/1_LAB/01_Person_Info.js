function personInfo (firstName, lastName, age) {
    // const person = {
    //     firstName: firstName,
    //     lastName: lastName,
    //     age: age,
    // }

    //SHORT SYNTAX

    const person = {
        firstName,
        lastName,
        age,
    }

    return person;
}

personInfo("Peter",
    "Pan",
    "20"
);
personInfo ("George",
    "Smith",
    "18"
);