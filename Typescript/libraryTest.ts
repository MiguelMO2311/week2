// Reto 7 toString.
import { Book } from "./book";
import { Library } from "./library";


let book1 = new Book('Relato de un Naufrago', 176, '9788490323762', 'Gabriel García Márquez', 'Debolsillo');
let book2 = new Book('Cien años de soledad', 496, '9788497592208', 'Gabriel García Márquez', 'Debolsillo')
let library1 = new Library([book1, book2], 'calle Pez 7 Madrid', 'Pepito Grillo')

console.log(library1.toString());
console.log(library1.getNumberOfBooks());
console.log (library1.findByAuthor('Gabriel García Márquez'));