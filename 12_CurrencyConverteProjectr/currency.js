const BASE_URL ="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdowns=document.querySelectorAll(".dropdown select");

const btn=document.querySelectorAll


for(let select of dropdowns){
    for (curcode in countryList){
        let newOption=document.createElement("option");
        newOption.innerText = curcode;
        newOption.value = curcode;
        if(select.name=="from" && curcode==="USD"){
            newOption.selected="selected";
        }
        if(select.name=="to" && curcode==="INR"){
            newOption.selected="selected";
        }
        select.append(newOption);
    }
    select.addEventListener("change",(evt)=>{
        updateFlag(evt.target);
    })
}

const updateFlag=(element)=>{
    let curcode=element.value;
    let countryCode=countryList[curcode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
};


