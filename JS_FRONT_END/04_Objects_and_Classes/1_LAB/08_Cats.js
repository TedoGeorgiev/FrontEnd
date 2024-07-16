
function solve (input) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow () {
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
    }

    input.map((entry) => entry.split(' ')) // every entry in array split ' '
        .map(([name, age]) => new Cat(name, age)) // first element = name second element = age
        //Creates new Cat with these two elements
        .forEach(cat => cat.meow()); // Invoke method meow on all cats

}

function myTry (input = []) {
    class CatMyTry {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow () {
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
    }

    // for (const entry of input) {
    //     let[name, age] = entry.split(' ');
    //     const cat = new Cat(name, age);
    //     cat.meow();
    // }

    input.map((entry) => entry.split(' '))
        .map(([name, age]) => new CatMyTry(name, age))
        .forEach(cat => cat.meow());

}

myTry(['Candy 1', 'Poppy 3', 'Nyx 2']);

solve(['Mellow 2', 'Tom 5']);