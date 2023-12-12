

class Animal {
    constructor(color, name, leg, sound) {
        this.init(color, name, leg, sound);
    }
    init(color, name, leg, sound) {
        this.color = color;
        this.name = name;
        this.leg = leg;
        this.sound = sound;
    }
    makeSound() {
        console.log(`${this.name} makes ${this.sound}`);
    }
}

const animal1=new Animal("Blue","Harry",4,"bho bho");
animal1.makeSound(); // Harry makes bho bho

/**
 * If you want to create an object using Object.create() and then initialize it, 
 * you would need to define an init method or similar in your class, 
 * and then call that method. Here’s how you could do it:
 */
const animal2 = Object.create(Animal.prototype);
animal2.init("Brown","Kitty",4,"Meow Mewo");
animal2.makeSound(); // Kitty makes Meow Mewo



/**
 * The difference between the two ways of object creation (`animal1` and `animal2`) lies in how JavaScript sets up the object's prototype and calls the constructor function.

1. **Using `new` keyword (`animal1`)**: When you create an object using the `new` keyword followed by a constructor function (like `new Animal()`),
 JavaScript creates a new object, sets the prototype of this object to `Animal.prototype`,
  and then calls the `Animal` constructor function with the specified arguments and `this` set to the newly created object.

2. **Using `Object.create()` (`animal2`)**: When you create an object using `Object.create(proto)`, 
JavaScript creates a new object with its prototype set to the `proto` argument. 
It does not call any constructor function. If you want to call the constructor function, you have to do it manually as shown in the previous response.

The reason we have different ways to create objects in JavaScript is due to the language's flexibility
 and the evolution of the language over time. Different methods can be useful in different scenarios. 
 For example, `Object.create()` allows for more powerful prototype-based inheritance and property manipulation (like creating non-enumerable properties), 
 while constructor functions with the `new` keyword are often simpler and more intuitive for creating instances of a certain "class" (especially for people 
    coming from class-based languages like Java or C++).
 */