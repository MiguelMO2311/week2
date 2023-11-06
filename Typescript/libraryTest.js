"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Reto 7 toString.
var book_1 = require("./book");
var library_1 = require("./library");
var book1 = new book_1.Book('Relato de un Naufrago', 176, '9788490323762', 'Gabriel García Márquez', 'Debolsillo');
var book2 = new book_1.Book('Cien años de soledad', 496, '9788497592208', 'Gabriel García Márquez', 'Debolsillo');
var library1 = new library_1.Library([book1, book2], 'calle Pez 7 Madrid', 'Pepito Grillo');
console.log(library1.toString());
console.log(library1.getNumberOfBooks());
console.log(library1.findByAuthor('Gabriel García Márquez'));
