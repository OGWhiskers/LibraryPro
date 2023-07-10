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

  const currentBook = new Book(authorForm, titleForm, pagesForm, readForm);
  console.log(currentBook);

  storeBookObj.call(Book, currentBook);

  displayLibrary(myLibrary);
});

let showAuthor = "";
let showTitle = "";
let showPages = "";
let showRead = "";

const displayLibrary = (myLibrary) => {
  // RESET MY LIBRARY TO AVOID DUPLICATES:

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
    pRead.textContent = read.checked
      ? `You have read this book`
      : `You havn't read this book`;

    let bAdd = document.createElement("button");
    bAdd.setAttribute("class", "add");
    bAdd.textContent = `Add`;
    bAdd.addEventListener("click", () => {
      read.checked ? (read.checked = false) : (read.checked = true);

      pRead.textContent = read.checked
        ? `You have read this book`
        : `You havn't read this book`;
    });

    let bRemove = document.createElement("button");
    bRemove.setAttribute("class", "remove");
    bRemove.textContent = `Remove`;
    bRemove.addEventListener("click", () => {});

    Maindiv.appendChild(pAuthor);
    Maindiv.appendChild(pTitle);
    Maindiv.appendChild(pPages);
    Maindiv.appendChild(pRead);
    Maindiv.appendChild(bAdd);
    Maindiv.appendChild(bRemove);

    tree.appendChild(Maindiv);
    console.log(Maindiv);
    displayArea.appendChild(tree);
  };

  for (let i = 0; i < myLibrary.length; i++) {
    createElement(myLibrary[i]);
  }
};

displayLibrary(myLibrary);
