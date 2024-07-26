// Activity 1

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age}`)
    }
    // Task 2
    updateAge(newAge) {
        this.age = newAge;
        console.log(`New Age: ${this.age}`)
    }
    // Task 5
    static generalGreeting(){
        console.log("Hello, I am a person")
    }
    // Task 7
    getName(){
        return this.name
    }

    // Task 8
    setName(newName){
        this.name = newName;
    }
}

// Task 1
const person1 = new Person('Sachin', 23);
person1.greet();
// Task 2

person1.updateAge(25);
console.log(person1.age)

// Activity 2

class Students extends Person {
    // Task 6
    static numsOfStudent=0;
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
        Students.numsOfStudent++;
    }

    displayID() {
        console.log(`Student ID: ${this.studentId}`)
    }
    // Task 4 overriding
    greet(){
        super.greet();
        console.log(`and my Student ID is ${this.studentId}`);
    }

}
// Task 3
const student1 = new Students('Rahul', 20, 101);
student1.displayID();
// Task 4
student1.greet();

// Activity 3

// Task 5
Person.generalGreeting();

// Task 6
console.log(Students.numsOfStudent);

// Activity 4
// Task 7
console.log(person1.getName());

// Task 8
person1.setName('Sameer');
console.log('New Name: '+person1.name);

// Acttvity 5
// Task 9
class Account{
    #balance=0;
    deposit(amount){
        if(amount>0){
            this.#balance+=amount;
        }
        else{
            console.log('Invalid amount');
        }
    }

    withdraw(amount){
        if(amount>0 && amount<=this.#balance){
            this.#balance-=amount;
        }
        else{
            console.log('Enter less amount');
        }
    }
}

// Task 10
const account1 = new Account();
account1.deposit(1000);
account1.withdraw(500);
account1.withdraw(600);


