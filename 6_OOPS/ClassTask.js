// Step 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];

function logDairy() {
    for (const product of dairy) {
        console.log(product);
    }
}

logDairy();

// Step 2
const animal = {
    canJump: true
};

const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;

function birdCan() {
    for (const key of Object.keys(bird)) {
        console.log(`${key}: ${bird[key]}`);
    }
}

birdCan();

// Step 3
function animalCan() {
    for (const key in bird) {
        console.log(`${key}: ${bird[key]}`);
    }

    for (const key in animal) {
        console.log(`${key}: ${animal[key]}`);
    }
}

animalCan();

console.log(`
The behavior you observed above is correct, 
and it is due to the fact that Object.keys() only returns the object's own enumerable property names, 
and not the properties inherited from the prototype.
`)