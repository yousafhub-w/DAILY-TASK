function Book(title, author, pages){
        this.title = title,
        this.author = author,
        this.pages = pages
}

Book.prototype.getSummary = function(){
    console.log(`The book ${this.title} by ${this.author} has ${this.pages} pages`);
}

let a = new Book("Habits","Mark z",185)
console.log(a.title);
console.log(a.author);
console.log(a.pages);

