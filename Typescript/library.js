"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
// Reto 6 toString.
var book_1 = require("./book");
var Library = /** @class */ (function () {
    function Library(books, address, manager) {
        this.books = books;
        this.address = address;
        this.manager = manager;
    }
    Library.prototype.getBooks = function () {
        return this.books;
    };
    Library.prototype.getAddress = function () {
        return this.address;
    };
    Library.prototype.getManager = function () {
        return this.manager;
    };
    Library.prototype.toString = function () {
        for (var i = 0; i < book_1.Book.length; i++) {
            return ("\n\"Title - ".concat(book_1.Book[0], " \nNumbers of Pages - ").concat(book_1.Book[1], "\nISBN - ").concat(book_1.Book[2], " \nAuthor - ").concat(book_1.Book[3], "\nEditorial - ").concat(book_1.Book[4]));
        }
    };
    Library.prototype.getNumberOfBooks = function () {
        return book_1.Book.length;
    };
    Library.prototype.findByAuthor = function (getAuthor) {
        var result = this.books.filter(function (book) { return getAuthor = 'Gabriel'; });
        return result;
    };
    return Library;
}());
exports.Library = Library;
var book1 = new Library([], 'calle Pez 7 Madrid', 'Pepito Grillo');
// console.log(book1.toString());
// console.log (book1.getNumberOfBooks());
// console.log (book1.findByAuthor('John'));
