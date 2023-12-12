/**
 * In this example, Vehicle is a base class that provides common properties and methods for all vehicles. 
 * The Car class extends Vehicle, providing more specific behavior. The getName() and getType() methods are abstractions provided by the Vehicle class. 
 * The Car class overrides the getName() method to provide its own implementation, but it still uses the getType() method from the Vehicle class. 
 * This is a simple example of how abstraction can be used in JavaScript to hide complexity and provide a simpler interface.
 */

class Vehicle {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    getName() {
        return this.name;
    }

    getType() {
        return this.type;
    }
}

class Car extends Vehicle {
    constructor(name) {
        super(name, 'car');
    }

    getName() {
        return 'It is a car: ' + super.getName();
    }
}

let car = new Car('Tesla');
console.log(car.getName()); // It is a car: Tesla
console.log(car.getType()); // car

