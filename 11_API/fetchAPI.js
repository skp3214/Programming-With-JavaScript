// The fetch API provides an interface for fetching (sending/receiving resources).
// It uses request ans response objects.
// the fetch() method is used to fetch a resource (data).

const app="https://cat-fact.herokuapp.com/facts"
const factpara=document.getElementById("fact");

const getfacts= async()=>{
    let promise= await fetch(app);
    let data= await promise.json();
    console.log(data[0].text)
    factpara.innerText=data[0].text
}

getfacts()