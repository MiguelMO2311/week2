"use strict";
// Reto 4 TS.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(title, nPages, isbn, author, editorial) {
        this.title = title;
        this.nPages = nPages;
        this.isbn = isbn;
        this.author = author;
        this.editorial = editorial;
    }
    Book.prototype.getTitle = function () {
        return this.title;
    };
    Book.prototype.getIsbn = function () {
        return this.isbn;
    };
    Book.prototype.getAuthor = function () {
        return this.author;
    };
    Book.prototype.getEditorial = function () {
        return this.editorial;
    };
    Book.prototype.getNPages = function (nPages) {
        return this.nPages;
    };
    Book.prototype.setTitle = function (title) {
        this.title = title;
    };
    Book.prototype.setIsbn = function (isbn) {
        this.isbn = isbn;
    };
    Book.prototype.setAuthor = function (author) {
        this.author = author;
    };
    Book.prototype.setEditorial = function (editorial) {
        this.editorial = editorial;
    };
    Book.prototype.setNPages = function (nPages) {
        this.nPages = nPages;
    };
    Book.prototype.toString = function () {
        return ("Title - ".concat(this.title, " \nNumbers of Pages - ").concat(this.nPages, "\nISBN - ").concat(this.isbn, "\nAuthor - ").concat(this.author, "\nEditorial - ").concat(this.editorial));
    };
    return Book;
}());
exports.Book = Book;
// let myBook = new Book('Relato de un Naufrago', 176, '9788490323762', 'Gabriel García Márquez', 'Debolsillo')
// console.log(myBook.toString());
// myBook.setTitle('Coco');
// console.log(myBook.getAuthor());
// console.log(myBook.toString());
