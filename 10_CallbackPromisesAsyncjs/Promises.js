// Promises: is for "eventual" cmpletion of task. It is an onject in js.
// A promise has 3 states - Pending, Fulfilled and Rejected.
// When a Promise object is created it is in Pending state until the executor function is called.
// Once the executor function is executed the Promise object becomes either Fulfilled or Rejected based on the result of the execution.
// Once the executor function is called, if callback provided to resolve() is executed then the Promise object becomes Fulfilled with the returned value as its
// Once the executor function is called the Promise goes to either Fulfilled or Rejected state based on if error was thrown or not.
// it is a soltuion to callback hell.

// let prom=new Promise((resolve,reject)=>{
//     console.log("I am promise")
//     resolve(123)
// })
// console.log(prom)

function getData(dataid,getNextData) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataid);
            reject("success err")
            if(getNextData){
                getNextData();
            }
        },5000)
    })
}
let result=getData(1).then((res)=>{
    console.log(res)
}).catch(
    (err)=>console.error(err)
)
console.log(result)

