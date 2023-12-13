const num = [12, 3, 4, 5, 6, 7]

const newNum=[...num]

console.log(newNum)

const printArray=function(...a){
   console.log(a)
}

printArray(...num)

// join array 
let arr1 = ['A', 'B', 'C']
let arr2 = ['E', 'F', 'G']

let joinedArray=[...arr1,...arr2]
console.log(joinedArray)

// add new member to array

joinedArray=[...joinedArray,'H','I','J']
console.log(joinedArray)

// converting string to array.

let greeting="Hello"
const ArrayOfChar=[...greeting]
console.log(ArrayOfChar)

// copy either an object.

const car1={
   brand:"Toyota",
   model:"Camry",
   year:2020
}

const car2={...car1}
console.log(car2)
console.log(car2['brand'])


