"use strict";

// SELECT ELEMENTS

const addBookBtn = document.querySelector(".add-book");
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
