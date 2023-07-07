"use strict";

// SELECT ELEMENTS

const addBookBtn = document.querySelector(".add-book");
const footer = document.querySelector(".signature");
const overlay = document.querySelector(".overlay");
const formModal = document.querySelector(".form");
const formCore = document.querySelector(".core-form");
const exitBtn = document.querySelector(".exit");

// DESIGN:

// MODAL :
addBookBtn.addEventListener("click", () => {
  // Add

  addBookBtn.classList.add("hidden");
  footer.classList.add("hidden");

  // Remove

  exitBtn.classList.remove("hidden");
  formCore.classList.remove("hidden");
  overlay.classList.remove("hidden");
  formModal.classList.remove("hidden");
});

console.log(exitBtn);

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

const al = new Book("Bayanda", "Alch", 234, true);

function storeBookObj(obj) {
  myLibrary.push(obj);
}

storeBookObj.call(Book, al);

const displayLibrary = (myLibrary) => {};
