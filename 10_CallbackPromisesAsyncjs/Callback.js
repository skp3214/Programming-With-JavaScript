

// Callbacks: when a  funtion is passed to another funtion.

console.log("one")
console.log("two")
console.log("three")

function hello(){
    console.log("hello");
}

setTimeout(hello,2000)
