"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var library_1 = require("./library");
var book2 = new library_1.Library([], 'calle Pez 7 Madrid', 'Pepito Grillo');
console.log(book2.findByAuthor('Gabriel'));
console.log(book2.toString());
