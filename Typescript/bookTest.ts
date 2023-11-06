// Reto 5 TS.
import { Book } from "./book";

let booking = new Book ('Cien años de soledad', 496, '9788497592208','Gabriel García Márquez', 'Debolsillo')

console.log (booking.toString());
booking.setTitle('Coco');
console.log(booking.getAuthor());
console.log(booking.toString());
