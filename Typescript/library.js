"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
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
        for (var i = 0; i < this.books.length; i++)
            console.log(this.books[i]);
    };
    Library.prototype.getNumberOfBooks = function () {
        return this.books.length;
    };
    Library.prototype.findByAuthor = function (author) {
        var result = this.books.filter(function (book) { return book.getAuthor() == author; });
        return result;
    };
    return Library;
}());
exports.Library = Library;
// let book1 = new Book('Relato de un Naufrago', 176, '9788490323762', 'Gabriel García Márquez', 'Debolsillo');
// let book2 = new Book('Cien años de soledad', 496, '9788497592208', 'Pepe García Márquez', 'Debolsillo')
// let library1 = new Library([book1, book2], 'calle Pez 7 Madrid', 'Pepito Grillo')
// console.log(library1.toString());
// console.log(library1.getNumberOfBooks());
// console.log (library1.findByAuthor('Gabriel García Márquez'));
