// Reto 6 toString.

import { Book } from "./book";

export class Library {
    private books: Book[];
    private address: string;
    private manager: string;

    constructor(books: Book[], address: string, manager: string) {
        this.books = books;
        this.address = address;
        this.manager = manager;
    }
    public getBooks(): Book[] {
        return this.books;
    }
    public getAddress(): string {
        return this.address;
    }
    public getManager(): string {
        return this.manager;
    }
    public toString(): string{
        let aux= ""
        for (let i = 0; i < this.books.length; i++)
        aux =this.books[i].toString()
        return(aux);
                }
            
    public getNumberOfBooks(): number {
        return this.books.length
    }
    public findByAuthor(author: string):Book[] {
        const result = this.books.filter((book) => book.getAuthor() == author);    
        return result;
}

}
// let book1 = new Book('Relato de un Naufrago', 176, '9788490323762', 'Gabriel García Márquez', 'Debolsillo');
// let book2 = new Book('Cien años de soledad', 496, '9788497592208', 'Pepe García Márquez', 'Debolsillo')
// let library1 = new Library([book1, book2], 'calle Pez 7 Madrid', 'Pepito Grillo')

// console.log(library1.toString());
// console.log(library1.getNumberOfBooks());
// console.log (library1.findByAuthor('Gabriel García Márquez'));


