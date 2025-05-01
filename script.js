/* JavaScript code goes here */

const myLibrary = [
    {
        title: "Kafka on the Shore",
        author: "Haruki Murakami",
        pages: "480",
        hotOrNot: "Hot",
        id: crypto.randomUUID()
    },
    {
        title: "Red Rising",
        author: "Pierce Brown",
        pages: "382",
        hotOrNot: "Hot",
        id: crypto.randomUUID()
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
    this.id = crypto.randomUUID();
}

function addToLibrary(title, author, pages, hotOrNot) {
    const book = new Book(title, author, pages, hotOrNot);
    return myLibrary.push(book);
}

const table = document.getElementById("table");

/* Function for updating the table in the html */

function addToTable() {
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

addToTable();

const bookForm = document.getElementById("bookForm");
const addButton = document.getElementById("add");
const cancelButton = document.getElementById("cancel");
const confirmButton = document.getElementById("confirm");

addButton.addEventListener("click", () => {
    bookForm.showModal();
})

cancelButton.addEventListener("click", () => {
    bookForm.close();
});

confirmButton.addEventListener("click", (event) => {
    event.preventDefault();

    let title = document.getElementById("title");
    let titleVal = title.value;
    let author = document.getElementById("author");
    let authorVal = author.value;
    let pages = document.getElementById("pages");
    let pagesVal = pages.value;
    let hot = document.getElementById("hot");
    let hotVal = "";
    if (hot.checked) {
        hotVal = "Hot";
    } else {
        hotVal = "Not";
}

    addToLibrary(titleVal, authorVal, pagesVal, hotVal);
    addToTable();
    bookForm.close();
});

