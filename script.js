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
overlay.addEventListener("click", toggleHidden);
document.addEventListener("keyup", escapeModal);

// FORM SUBMITION:

formCore.addEventListener("submit", (e) => {
  e.preventDefault();

  authorForm = author.value;
  titleForm = title.value;
  pagesForm = pages.value;
  readForm = read.value;

  const al = new Book(authorForm, titleForm, pagesForm, readForm);

  console.log(al);

  storeBookObj.call(Book, al);

  console.log(myLibrary);
});
// Functionality:

let myLibrary = [];

function Book(author, title, numPages, haveRead) {
  this.author = author;
  this.title = title;
  this.numPages = numPages;
  this.haveRead = function () {
    return true;
  };
}

const al = new Book(authorForm, titleForm, pagesForm, readForm);

console.log(al);

function storeBookObj(obj) {
  myLibrary.push(obj);
}

storeBookObj.call(Book, al);

console.log(myLibrary);

const displayLibrary = (myLibrary) => {};
