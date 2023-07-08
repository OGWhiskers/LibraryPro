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

let authorForm = "";
let titleForm = "";
let pagesForm = 0;
let readForm = true;

// DESIGN:

const toggleHidden = () => {
  let arr = [addBookBtn, footer, exitBtn, formCore, overlay, formModal];

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

const displayLibrary = (myLibrary) => {
  for (let i = 0; i < myLibrary.length; i++) {
    showAuthor = myLibrary[i].author;
    showTitle = myLibrary[i].title;
    showPages = Number(myLibrary[i].numPages);
    showRead = Boolean(myLibrary[i].haveRead);
  }

  displayAuthor.innerHTML = `${displayAuthor.textContent} ${showAuthor}`;

  displayTitle.innerHTML = `${displayTitle.innerHTML} ${showTitle}`;

  displayPages.innerHTML = `${displayPages.innerHTML} ${showTitle}`;

  displayRead.innerHTML =
    showRead == true ? `I have read this book` : `I have not read this book`;
};
