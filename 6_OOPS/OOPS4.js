class Bird{
    useWings(){
        console.log("flying!");
    }
}

class Eagle extends Bird{
    useWings(){
        console.log("soaring through the skies");
    }
}

class Penguin extends Bird{
    useWings(){
        console.log("Diving")
    }
}

const baldEagle=new Eagle();
baldEagle.useWings(); // Output: soaring through the skies
const kingPenguin=new Penguin();
kingPenguin.useWings();