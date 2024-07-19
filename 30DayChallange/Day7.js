// Activity 1
// Task 1
let book={
    title:"Godan",
    author:"Prem Chand",
    year:1900,
}
console.log(book);
// Task 2
console.log(book.title+" "+book.author);

// Activity 2
// Task 3
book.details=()=>{
    console.log(book.title+" "+book.author);
}
book.details();

// Task 4
book.updateYear=(newYear)=>{
    book.year=newYear;
}
book.updateYear(2022);
console.log(book.year)

// Activity 3
// Task 5
let library={
    name:"Lawgate Library",
    books:[
        {title:"Godan",author:"Prem Chand",year:1900},
        {title:"Gaban",author:"Prem Chand",year:1920},
        {title:"Jungle Book",author:"Rudyard Kipling",year:1905},
    ]
}
console.log(library);

// Task 6
console.log(library.name);
library.books.forEach((book)=>{
    console.log(book.title);
})

// Activity 4
// Task 7
// adding methods
library.books.forEach((book) => {
    book.bookDetails = function() {
        return `${this.title}, ${this.year}`;
    };
});
// logging value by calling methods.
library.books.forEach((book)=>{
    console.log(book.bookDetails())
})

// Acttivity 5
// Task 8
for(let key in book){
    console.log(key);
}

// Task 9
console.log("Keys: "+Object.keys(book));
console.log("Values: "+Object.values(book));