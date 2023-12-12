// there is three way of creating object. One can be created without using classes but other two ways need classess.
// e.g 


class Animal {
    constructor(color, name, leg, sound) {
        this.color = color;
        this.name = name;
        this.leg = leg;
        this.sound = sound;
    }
    makeSound() {
        console.log(`${this.name} makes ${this.sound}`);
    }

}

// 1st way of creating object.

const animal1=new Animal("White","Rocky",4,"bho bho");
console.log(animal1.leg)
animal1.makeSound();

// 2nd way of creating object. In this way you can create object but you cannot intitialize it.

const animal2=Object.create(Animal) 
// const animal2=Object.create(Animal("Black","Tom",2,"vaa vaa")) neither this way you can initialize.
// animal2.constructor("Black","Tom",2,"vaa vaa")  cannot initialize
console.log(animal2.leg)  // obviously this will give you undefined. because you havenot given any parameter.

