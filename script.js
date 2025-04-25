/* JavaScript code goes here */

const myLibrary = [];

function Book(title, author, pages, read) {
    if (!new.target) {
        throw Error("You must include 'new' to call the constuctor!");
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID;
}

function addToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    return myLibrary.push(book);
}