/* JavaScript code goes here */

const myLibrary = [
    {
        title: "Kafka on the Shore",
        author: "Haruki Murakami",
        pages: "480",
        read: "Yes",
        hotOrNot: "Hot",
        id: crypto.randomUUID(),
        readChange: function() {
            if (this.read === "Yes") {
                this.read = "No";
            } else {
                this.read = "Yes";
            }
        }
    },
    {
        title: "Red Rising",
        author: "Pierce Brown",
        pages: "382",
        read: "No",
        hotOrNot: "Hot",
        id: crypto.randomUUID(),
        readChange: function() {
            if (this.read === "Yes") {
                this.read = "No";
            } else {
                this.read = "Yes";
            }
        }
    }
];

// Function for adding book objects to the myLibrary array

class Book {
    id = crypto.randomUUID();

    constructor(title, author, pages, read, hotOrNot) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.hotOrNot = hotOrNot;
    }

    readChange() {
        if (this.read === "Yes") {
            this.read = "No";
        } else {
            this.read = "Yes";
        }
    };
}

function addToLibrary(title, author, pages, read, hotOrNot) {
    const book = new Book(title, author, pages, read, hotOrNot);
    return myLibrary.push(book);
}

const table = document.getElementById("table");

/* Function for updating the table in the html */

function addToTable() {
    document.querySelectorAll("#table tr")
    .forEach(row => {
        row.remove();
    });

    document.querySelectorAll("#delete-column button")
    .forEach(btn => {
        btn.remove();
    });

    myLibrary.forEach(book => {
        const row = document.createElement("tr");
        row.class = "row";
        row.setAttribute("data-id", book.id);
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

        const readCell = document.createElement("td");
        row.appendChild(readCell);
        const readSpan = document.createElement("span");
        readSpan.className = "read-span";
        readCell.appendChild(readSpan);
        readSpan.textContent = book.read;

        const readButton = document.createElement("button");
        readButton.className = "read-button";
        readButton.setAttribute("data-id", book.id);
        readCell.appendChild(readButton);
        readButton.innerText = "Edit";

        const hotOrNotCell = document.createElement("td");
        row.appendChild(hotOrNotCell)
        .textContent = book.hotOrNot;

        const idCell = document.createElement("td");
        row.appendChild(idCell)
        .textContent = book.id;

        const deleteCol = document.getElementById("delete-column");
        const deleteBtn = document.createElement("button");
        deleteBtn.className = "delete-button";
        deleteBtn.setAttribute("data-id", book.id);
        deleteCol.appendChild(deleteBtn);
        deleteBtn.innerText = "Blow it up";


    });
}

addToTable();

table.addEventListener("click", (event) => {
    myLibrary.forEach(book => {
        if (event.target.dataset.id === book.id) {
            book.readChange();
        }
    })

    addToTable();
});

const deleteCol = document.getElementById("delete-column");

deleteCol.addEventListener("click", (event) => {
    let rows = document.querySelectorAll("tr");
    let id = event.target.dataset.id;
    rows.forEach(row => {
        if (row.dataset.id === id) {
            row.remove();
        }
    });

    for (let i = myLibrary.length - 1; i >= 0; i--) {
        if (myLibrary[i].id === id) {
            myLibrary.splice(i, 1);
        }
    }

    event.target.remove();
});

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

    let read = document.getElementById("read");
    let readVal = "";
    if (read.checked) {
        readVal = "Yes";
    } else {
        readVal = "No";
}

    let hot = document.getElementById("hot");
    let hotVal = "";
    if (hot.checked) {
        hotVal = "Hot";
    } else {
        hotVal = "Not";
}

    addToLibrary(titleVal, authorVal, pagesVal, readVal, hotVal);
    addToTable();
    bookForm.close();
});