// var storeManager={}  empty object

var storeManager={
    Name:"Sachin",
    Age:30,

}

storeManager["Name"]="Sameer"  // this will update the value
storeManager["Income"]=30000  // it will add a new key value pair if it is already not present.
storeManager.Income=40000     // this will update the value.
storeManager.Age=40           // this will update the value.
storeManager.addStore=function(){
    console.log("Adding Store")
}

console.log(storeManager.addStore())

var keys=["speed","altitude","color"]

var drone={
    speed:200,
    altitude:100,
    color:"red"
}

for(var i=0;i<keys.length;i++){
    console.log(drone[keys[i]])
}