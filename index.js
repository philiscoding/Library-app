// HELPER FUNCTIONS
function preventDefault(event) {
    event.preventDefault();
}

function toggleBtn(x, y) {
    if (x === true) {
        y.disabled = true;
    } else {
        y.disabled = false;
    }
}


class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}



let myLibrary = [];

function addBookToLibrary(title, author, pages, read) {
    // do stuff here

    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

function displayBooks() {

    for (let i = 0; i < myLibrary.length; i++) {

        let booksContainer = document.querySelector(".books-container");

        let bookCard = document.createElement("div");
        let bookTitle = document.createElement("h2");
        let author = document.createElement("p");
        let pages = document.createElement("p");
        let read = document.createElement("button");
        let removeBtn = document.createElement("button");

        bookCard.classList.add("book-card");

        bookTitle.textContent = myLibrary[i].title ? myLibrary[i].title : "-";
        author.textContent = myLibrary[i].author ? myLibrary[i].author : "-";
        pages.textContent = myLibrary[i].pages ? myLibrary[i].pages : "-";
        read.textContent = myLibrary[i].read ? "read" : "not read";
        removeBtn.textContent = "Remove Book";

        booksContainer.appendChild(bookCard);
        bookCard.appendChild(bookTitle);
        bookCard.appendChild(pages);
        bookCard.appendChild(author);
        bookCard.appendChild(read);
        bookCard.appendChild(removeBtn);

        removeBtn.addEventListener("click", function () {
            bookCard.remove();
        });

        read.addEventListener("click", function () {
            switch (read.textContent) {
                case "read":
                    read.textContent = "not read";
                    break;
                case "not read":
                    read.textContent = "read";
                    break;
            }
        });
    }

    myLibrary.pop();

}


let formContainer = document.querySelector(".form-container");
let bookBtn = document.querySelector(".book-btn");
bookBtn.addEventListener("click", makeForm);

function makeForm() {

    let bookForm = document.createElement("form");
    let headingContainer = document.createElement("div");
    let heading = document.createElement("h2");
    let close = document.createElement("span");
    let title = document.createElement("input");
    let author = document.createElement("input");
    let pages = document.createElement("input");
    let radioContainer = document.createElement("div");
    let readLabel = document.createElement("label");
    let read = document.createElement("input");
    let add = document.createElement("button");




    heading.textContent = "New Book";
    close.innerHTML = "&times";
    title.placeholder = "Title";
    author.placeholder = "Author";
    pages.placeholder = "Pages";
    readLabel.textContent = "Did you read it?";
    add.textContent = "Add";


    heading.setAttribute("type", "text");
    title.setAttribute("type", "text");
    author.setAttribute("type", "text");
    pages.setAttribute("type", "text");
    read.setAttribute("type", "radio");
    read.setAttribute("name", name);
    title.setAttribute("required", "");
    author.setAttribute("required", "");
    pages.setAttribute("required", "");
    read.setAttribute("required", "");
    bookForm.classList.add("book-form");
    headingContainer.classList.add("heading-container");
    close.classList.add("close");
    radioContainer.classList.add("radio-container");
    formContainer.classList.add("modal");



    formContainer.appendChild(bookForm);
    bookForm.appendChild(headingContainer);
    headingContainer.appendChild(heading);
    headingContainer.appendChild(close);
    bookForm.appendChild(title);
    bookForm.appendChild(author);
    bookForm.appendChild(pages);
    bookForm.appendChild(radioContainer);
    radioContainer.appendChild(readLabel);
    radioContainer.appendChild(read);
    bookForm.appendChild(add);

    toggleBtn(true, bookBtn);

    add.addEventListener("click", function () {

        addBookToLibrary(title.value, author.value, pages.value, read.checked);
        preventDefault(event);
        bookForm.remove();
        formContainer.classList.remove("modal");
        toggleBtn(false, bookBtn);
        displayBooks();

    });

    close.addEventListener("click", function () {
        bookForm.remove();
        formContainer.classList.remove("modal");
        toggleBtn(false, bookBtn);
    });

    window.onclick = function (event) {
        if (event.target == formContainer) {
            bookForm.remove();
            formContainer.classList.remove("modal");
            toggleBtn(false, bookBtn);
        }
    }

}