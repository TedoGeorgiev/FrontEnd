let fullName = 'Stamat Petkov';

let phonebook = {
    'Tedi Gogov': '+3590000001',
    'Vaso Gogov': '+3590000005',
    [fullName]: '+3591111111',
}

phonebook['Pesho Kelesho'] = '+3595555555';
console.log(phonebook);

// USE FOR IN LOOP
for (const name in phonebook) {
    console.log(`${name} -> ${phonebook[name]}`);
}

// USE FOR OF LOOP
for (const name of Object.keys(phonebook)) {
    console.log(`${name} -> ${phonebook[name]}`);
}

// CHECK IF PERSON IS IN PHONEBOOK
if (phonebook['Tedi Gogov']) {
    console.log('Found');
    console.log(phonebook['Tedi Gogov']);
} else {
    console.log('not found!')
}

// CHECK IF PERSON IS IN PHONEBOOK
if (phonebook.hasOwnProperty('Tedi Gogov')) {
    console.log('Found');
    console.log('Tedi Gogov');
} else {
    console.log('not found!')
}

console.log('Tedi Gogov' in phonebook);

// SORT AN OBJECT
const sortedArray = Object
    .entries(phonebook)
    .sort((a, b) => a[0].localeCompare(b[0]));
    // .sort(([keyA, valueA], [keyB, valueB]) => keyA.localeCompare(keyB));

console.log(sortedArray);

console.log(Object.fromEntries(sortedArray));