const num=[1,2,3,4,5,6,7,8,9,10]

const evenNumber=num.filter((a)=>a%2==0)
console.log(evenNumber); //[2, 4, 6, 8, 10]

const greatfive=num.filter((a)=>a>5)
console.log(greatfive);// [6, 7, 8, 9, 10]

const elements = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];

// Positions to filter (0, 4, 8, 12)
const positionsToFilter = [0, 4, 8, 12];

const filteredElements=elements.filter((element,index)=>positionsToFilter.includes(index))
console.log(filteredElements); 