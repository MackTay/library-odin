/* JavaScript code goes here */

const myLibrary = [
    {
        title: "Kafka on the Shore",
        author: "Haruki Murakami",
        pages: "480",
        hotOrNot: "hot",
        id: crypto.randomUUID
    }
];

function Book(title, author, pages, hotOrNot) {
    if (!new.target) {
        throw Error("You must include 'new' to call the constuctor!");
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hotOrNot = hotOrNot;
    this.id = crypto.randomUUID;
}

function addToLibrary(title, author, pages, hotOrNot) {
    const book = new Book(title, author, pages, hotOrNot);
    return myLibrary.push(book);
}

