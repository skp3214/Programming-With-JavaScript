// Activity 1
// Task 1

for(let i=1;i<=10;i++){
    console.log(i);
}

// Task 2

for(let j=1;j<=10;j++){
    console.log("5 x "+j+" = "+5*j);
}

// Activity 2
// Task 3
let sum=0;
let n=10
while(n--){
    sum+=n;
}
console.log(sum);

// Task 4
let a=10;
while(a--){
    console.log(a);
}

// Activity 3
// Task 5
let b=5;
do{
    console.log(b);
}
while(b--);

// Task 6
let factNum=6;
let fact=1;
do{
    fact*=factNum;
    factNum--;
}
while(factNum>0);

// Task 7
for(let i=1;i<=5;i++){
    let stars=""
    for(let j=1;j<=i;j++){
        stars+="*"
    }
    console.log(stars);
}