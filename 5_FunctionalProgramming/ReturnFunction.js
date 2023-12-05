console.log("Hello")   // it will return hello and undifined because console.log() is a function and
                       // by default every funtion return 'undefined'.

function print(){
    console.log("Hello");  // here we are not returning anything so it will return undefined
}

print()

function addTwoNumber(a,b){
    let sum = a+b;
    return sum;
}

var sum=addTwoNumber(3,4)
console.log(sum);     // it will return the value of sum which is 7. this it will not return undefined.

var virtualPet={
    sleepy:false,
    nap: function(){
        this.sleepy=true
    }
}
console.log(virtualPet.sleepy)   //false
virtualPet.nap();                // this function run will change the sleep value.
console.log(virtualPet.sleepy)    // true