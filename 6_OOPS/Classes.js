/**
 * OOPS help developers to mimic the relationship between objects in the real world.
 * Classes are like template which is used to create objects.
 * From one class we create many objects.
 * 
 * Benefits Of OOPs: 
 * Allow you to write modular code.
 * Makes your code more flexible code,
 * makes your code reusable.
 */

class Car{
    constructor(color,speed){
        this.color=color;
        this.speed=speed;
    }

    turboOn(){
        console.log("Turbo is on!");
    }

    getSelf(){
        console.log(this)
    }

    getPrototype(){
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}

const car1=new Car("red",200);  // object 1
car1.turboOn() // Output: Turbo is on!

const car2=new Car("Blue",300);    // object 2
console.log(car2.color)  // Output: Blue

car2.getSelf()
car2.getPrototype()

