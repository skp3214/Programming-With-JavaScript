function Icecream(flavor){
    	this.flavor = flavor;
        this.meltIt=function(){
            console.log("Melting "+this.flavor +" ice cream.") ;
        }
}

let kiwiIcecream=new Icecream("kiwi");
console.log(kiwiIcecream);  // Output: Icecream { flavor: 'kiwi' }
kiwiIcecream.meltIt(); // Output: Melting kiwi ice cream.