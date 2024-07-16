function solve (input = []) {

    let addressBook = {};

    for (const person of input) {
        let [name, address] = person.split(':');
        addressBook[name] = address;
    }

    const sortedAddressBook = Object.entries(addressBook)
        .sort((name1, name2) => name1[0].localeCompare(name2[0]));

    for (const [name, address] of sortedAddressBook) {
        console.log(`${name} -> ${address}`);
    }
}

function fancySolve (input = []) {
    let addressBook = {};

    for (const element of input) {
        let[name, address] = element.split(':');
        addressBook[name] = address;
    }

    Object.entries(addressBook)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(([name, address]) => console.log(`${name} -> ${address}`));
}


fancySolve(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']
);
solve(['Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd']
);