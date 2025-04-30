/* JavaScript code goes here */

const myLibrary = [
    {
        title: "Kafka on the Shore",
        author: "Haruki Murakami",
        pages: "480",
        hotOrNot: "Hot",
        id: crypto.randomUUID
    },
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

/*
Every time the function runs, we need to replace the table on the screen with a new one that uses data from mLibrary array. So... Step:
1. remove the old table content
2. For every book object in myLibrary:
    - Append a new row to the tbody with an id
    - Append a td for each data from the object to the row

*/

function addToTable(myLibrary) {
    document.querySelectorAll("#table tr")
    .forEach(row => {
        row.remove();
    });

    myLibrary.forEach(book => {
        const row = document.createElement("tr");
        row.class = "row";
        table.appendChild(row);

        const titleCell = document.createElement("td");
        row.appendChild(titleCell)
        .textContent = book.title;

        const authorCell = document.createElement("td");
        row.appendChild(authorCell)
        .textContent = book.author;

        const pagesCell = document.createElement("td");
        row.appendChild(pagesCell)
        .textContent = book.pages;

        const hotOrNotCell = document.createElement("td");
        row.appendChild(hotOrNotCell)
        .textContent = book.hotOrNot;

        const idCell = document.createElement("td");
        row.appendChild(idCell)
        .textContent = book.id;
    });
}

const button = document.querySelector(".add");

button.addEventListener("click", () => {
    /* this will be for the prompt to add books */
})

