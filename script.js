/* JavaScript code goes here */

const myLibrary = [
    {
        title: "Kafka on the Shore",
        author: "Haruki Murakami",
        pages: "480",
        hotOrNot: "Hot",
        id: crypto.randomUUID
    }
];

// Function for adding book objects to the myLibrary array

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

const table = document.getElementById("table");
const cell = document.createElement("td");

/*
Every time the function runs, we need to replace the table on the screen with a new one that uses data from mLibrary array. So... Step:
1. remove the old table content
2. For every book object in myLibrary:
    - Append a new row to the tbody with an id
    - Append a td for each data from the object to the row

*/

function addToTable(myLibrary) {
    
    const row = document.createElement("tr");
    row.id = "row"

    myLibrary.forEach(book => {
        row.appendChild(cell)
        .textContent = book;
    });
}

