
class WithDefaultParam{
    constructor(num1=1,num2=4,bool1=true){
        this.num1 = num1;
        this.num2 = num2;
        this.bool = bool1;
    }

    calculate(){
        if(this.bool){
            return this.num1 + this.num2;
        }
        return "Nothing"
    }
}

var better=new WithDefaultParam();
console.log("better.calculate()="+better.calculate()); //Output: 5 (default values)

var better2=new WithDefaultParam(4,5,true);
console.log("better2.calculate()="+better2.calculate());// Output: 9 (custom values)</

