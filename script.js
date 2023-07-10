"use strict";

// SELECT ELEMENTS

// OTHERS:

const addBookBtn = document.querySelector(".add-book");
const footer = document.querySelector(".signature");
const overlay = document.querySelector(".overlay");

// FORM ELEMENTS

const formModal = document.querySelector(".form");
const formCore = document.querySelector(".core-form");
const exitBtn = document.querySelector(".exit");
const addForm = document.querySelector(".sub-form");

// FORM DATA:

const author = document.getElementById("author");
const title = document.getElementById("title");
const pages = document.getElementById("pages");
const read = document.getElementById("read");

// DISPLAY CARD ELEMENTS :

const displayAuthor = document.querySelector(".displayAuthor");
const displayTitle = document.querySelector(".displayTitle");
const displayPages = document.querySelector(".displayPages");
const displayRead = document.querySelector(".displayRead");
const displayAdd = document.querySelector(".add");
const displayRemove = document.querySelector(".remove");
const displayArea = document.querySelector(".display");

let authorForm = "";
let titleForm = "";
let pagesForm = 0;
let readForm = true;

// DESIGN:

const toggleHidden = () => {
  let arr = [
    addBookBtn,
    footer,
    exitBtn,
    formCore,
    overlay,
    formModal,
    displayArea,
  ];

  for (let i = 0; i < arr.length; i++) {
    arr[i].classList.contains("hidden")
      ? arr[i].classList.remove("hidden")
      : arr[i].classList.add("hidden");
  }
};

const escapeModal = (e) =>
  e.key === "Escape" && addBookBtn.classList.contains("hidden")
    ? toggleHidden()
    : false;

// MODAL :

addBookBtn.addEventListener("click", toggleHidden);
exitBtn.addEventListener("click", toggleHidden);
addForm.addEventListener("click", toggleHidden);
overlay.addEventListener("click", toggleHidden);
document.addEventListener("keyup", escapeModal);

// Functionality:

let myLibrary = [];

function Book(author, title, numPages, haveRead) {
  this.author = author;
  this.title = title;
  this.numPages = numPages;
  this.haveRead = Boolean(haveRead);
}

function storeBookObj(obj) {
  myLibrary.push(obj);
}

// FORM SUBMITION:

formCore.addEventListener("submit", (e) => {
  e.preventDefault();

  authorForm = author.value;
  titleForm = title.value;
  pagesForm = Number(pages.value);
  readForm = read.checked;

  author.value = "";
  title.value = "";
  pages.value = "";
  read.checked = false;

  const currentBook = new Book(authorForm, titleForm, pagesForm, readForm);
  console.log(currentBook);

  storeBookObj.call(Book, currentBook);

  displayLibrary(myLibrary);
});

let showAuthor = "";
let showTitle = "";
let showPages = "";
let showRead = "";

/* <div class="displayCard">
        <p class="displayAuthor">Author : </p>
        <p class="displayTitle">Title : </p>
        <p class="displayPages">Pages : </p>
        <p class="displayRead">I have read this book</p>

        <button class="add">Read</button>
        <button class="remove">Remove</button>
    </div>
</div> */

// const displayLibrary = (myLibrary) => {
//   const createElements = (myLibrary) => {
//     for (let i = 0; i < myLibrary.length; i++) {
//       let div = document.createElement("div");
//       div.classList.add(`displayCard${i}`);

//       console.log(div);
//       let pAuthor = document.createElement("p");
//       pAuthor.classList.add("displayAuthor");

//       let pTitle = document.createElement("p");
//       pTitle.classList.add("displayTitle");

//       let pPages = document.createElement("p");
//       pPages.classList.add("displayPages");

//       let pRead = document.createElement("p");
//       pRead.classList.add("displayRead");

//       let badd = document.createElement("button");
//       badd.classList.add("add");

//       let bRemove = document.createElement("button");
//       bRemove.classList.add("remove");

//       div.appendChild(pAuthor);
//       div.appendChild(pTitle);
//       div.appendChild(pPages);
//       div.appendChild(pRead);
//       div.appendChild(badd);
//       div.appendChild(bRemove);
//       console.log(div);
//     }
//   };

//   console.log(pAuthor);

//   for (let i = 0; i < myLibrary.length; i++) {
//     showAuthor = myLibrary[i].author;
//     showTitle = myLibrary[i].title;
//     showPages = Number(myLibrary[i].numPages);
//     showRead = Boolean(myLibrary[i].haveRead);
//   }

//   console.log(showAuthor);

//   // RESET DEFAULT VALUES:

//   // displayAuthor.textContent = "Author : ";
//   // displayTitle.textContent = "Title : ";
//   // displayPages.textContent = "Pages : ";

//   // // ADD CONTENT TO SCREEN:

//   // displayAuthor.textContent = `${displayAuthor.textContent} ${showAuthor}`;
//   // displayTitle.textContent = `${displayTitle.textContent} ${showTitle}`;
//   // displayPages.textContent = `${displayPages.textContent} ${showPages}`;
//   // displayRead.textContent =
//   //   showRead == true ? `I have read this book` : `I have not read this book`;

//   // console.log(myLibrary);

//   // // Should add all library objects :
//   // mainContentArea.appendChild();
// };

// <!-- <div class="displayCard">
//         <p class="displayAuthor">Author : </p>
//         <p class="displayTitle">Title : </p>
//         <p class="displayPages">Pages : </p>
//         <p class="displayRead">I have read this book</p>

//         <button class="add">Read</button>
//         <button class="remove">Remove</button>
//       </div>
//       </div> -->
const displayLibrary = (myLibrary) => {
  // MAKE FUNC THAT TAKES OBJ AND CREATES ELEMENTS WITH THAT INFO
  while (displayArea.firstChild) {
    displayArea.removeChild(displayArea.lastChild);
  }

  const createElement = (obj) => {
    let tree = document.createDocumentFragment();

    // MAIN DIV :
    let Maindiv = document.createElement("div");
    Maindiv.setAttribute("class", "displayCard");

    // P ELEMENTS:

    let pAuthor = document.createElement("p");
    pAuthor.setAttribute("class", "displayAuthor");
    pAuthor.textContent = `Author : ${obj.author}`;

    let pTitle = document.createElement("p");
    pTitle.setAttribute("class", "displayTitle");
    pTitle.textContent = `Title : ${obj.title}`;

    let pPages = document.createElement("p");
    pPages.setAttribute("class", "displayPages");
    pPages.textContent = `Pages : ${obj.numPages}`;

    let pRead = document.createElement("p");
    pRead.setAttribute("class", "displayRead");

    let bAdd = document.createElement("button");
    bAdd.setAttribute("class", "add");
    bAdd.textContent = `Add`;

    let bRemove = document.createElement("button");
    bRemove.setAttribute("class", "remove");
    bRemove.textContent = `Remove`;

    Maindiv.appendChild(pAuthor);
    Maindiv.appendChild(pTitle);
    Maindiv.appendChild(pPages);
    Maindiv.appendChild(pRead);
    Maindiv.appendChild(bAdd);
    Maindiv.appendChild(bRemove);

    tree.appendChild(Maindiv);
    console.log(Maindiv);
    displayArea.appendChild(tree);
    // console.log(obj.author);
    // console.log(obj.title);
    // console.log(obj.numPages);
    // console.log(obj.haveRead);
  };
  // Loop through myLibrary
  for (let i = 0; i < myLibrary.length; i++) {
    createElement(myLibrary[i]);
  }
};

displayLibrary(myLibrary);
