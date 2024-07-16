let person = {
    name: 'Tedi',
    age: 36,
};

console.log(person["age"] + ' --> ' + person["name"]);
console.log(typeof person);

console.log(person.name); // по-правилния

person.car = 'Audi';
console.log(person.car);
person['carModel'] = 'A8';
console.log(person.carModel);

let engineModel = 'engine';
person[engineModel] = '4.2 TDI';
console.log(person.engine);

dynamicPropName = 'fullName';

const person2 = {
    [dynamicPropName]: 'Tedi Gogov',
};

console.log(person2.fullName);


// DELETE ENTRY
delete person.name;
console.log(person);

