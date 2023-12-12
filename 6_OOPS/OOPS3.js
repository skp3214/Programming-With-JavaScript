/**
 * OOP Principles: Polymorphism
Polymorphism is a word derived from the Greek language meaning "multiple forms". An alternative translation might be: "something that can take on many shapes".

So, to understand what polymorphism is about, let's consider some real-life objects.

A door has a bell. It could be said that the bell is a property of the door object. This bell can be rung. When would someone ring a bell on the door? Obviously, to get someone to show up at the door.

Now consider a bell on a bicycle. A bicycle has a bell. It could be said that the bell is a property of the bicycle object. This bell could also be rung. However, the reason, the intention, and the result of somebody ringing the bell on a bicycle is not the same as ringing the bell on a door.
 */
const bicycle={
    bell:function(){
        return "Ring ring! Watch out, Please"
    }
}

const door={
    bell:function(){
        return "Ring ring! Come here, Please"
    }
}

const ringTheBell=(thing)=>{
    console.log(thing.bell())
}

ringTheBell(bicycle)
ringTheBell(door)
