const cat = {
    name: 'Lucky',
    age: 3,
    fishes: [5, 6, 5, 6],
    owner: { // Object inside object
        name: 'Tedi',
        age: 36,
    },
    makeSound: function () {
        console.log('Meao...')
    },
    catchFish: function (number) {
        cat.fishes.push(number);
    },
    sleep: () => console.log('zZzzzZZzz'),
};
console.log(cat);
cat.makeSound();

cat.catchFish(3);
console.log(cat.fishes);

cat.eat = function () {
    console.log('Ommomnmnomn');
}
cat.eat();

cat.sleep();

// GET ALL PROPERTIES
const propertyNames = Object.keys(cat); // String Arr
console.log(propertyNames.join(', '));

// GET ALL VALUES
const propertyValues = Object.values(cat);
console.log(propertyValues.join(', '));

// GET OBJECT KEY VALUE PAIRS
const people = {
    name: 'Pesho',
    age: 20,
}
const entries = Object.entries(people);
console.log(entries);

const objectCreateFromEntries = Object.fromEntries(entries);
console.log(objectCreateFromEntries);

// CHECK FOR METHOD AND CALL
cat.makeSound() && cat.makeSound();