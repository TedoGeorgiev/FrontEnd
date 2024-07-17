class Vehicle {

    constructor(type, model, parts, fuel) {

        this.type = type;
        this.model = model;
        this.parts = {
            ...parts,
            quality: parts.engine * parts.power,
        };
        this.fuel = fuel;
    }
    drive(consumption) {
        this.fuel -= consumption;
    }

}


let parts = {engine: 6, power: 100, year: 2007};
let vehicle = new Vehicle('Audi', 'A8', parts, 200);
vehicle.drive(100);
vehicle.drive(50);

console.log(parts);

console.log(vehicle.type);
console.log(vehicle.model);
console.log(vehicle.fuel);
console.log(vehicle.parts.quality);
console.log(vehicle.parts.year);


