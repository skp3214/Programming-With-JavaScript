/**
 * The Principles Of OOP
 * The four fundamental OOP Principles are inheritance, encapsulation, abstraction and polymorphism.
 * 
 */

class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }
    getArea() {
        return this.length * this.width;
    }
}

// Inheritance Example: Here Rectangle is Base Class( also Known as Super Class).
// Cuboid is sub-class that inherits the property of base class.



class Cuboid extends Rectangle {
    constructor(length, width, height) {
        super(length, width); // calling the parent class constructor using 'super' keyword
        this.height = height;
    }
    getVolume() {
        return this.getArea() * this.height;
    }

}

const cuboid1=new Cuboid(4,5,6);
console.log("Cuboid Volume: ",cuboid1.getVolume());
console.log("Cuboid Base Area: ",cuboid1.getArea());

// Encapsulation: 
// It is one of the four basic principles of object-oriented programming (OOP).
// Encapsulation involves combining data (variables) and functions that manipulate the data into a single unit called an object.
// Encapsulation has to do with making a code implementation "hidden" from other user
// in the sense that they don't have to know how my code works in order to "consume" the code.

// e.g getVolume() function can only be accessed by its object.





