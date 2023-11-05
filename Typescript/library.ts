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
    public toString() {
        for (let i = 0; i < Book.length; i++) {
            return (`
"Title - ${Book[0]} 
Numbers of Pages - ${Book[1]}
ISBN - ${Book[2]} 
Author - ${Book[3]}
Editorial - ${Book[4]}`)
        }
    } ç
getNumberOfBooks(): number {
        return Book.length
    }
findByAuthor(getAuthor: string) {
    const result = this.books.filter((book) => getAuthor = 'Gabriel');    
    return result;
      
    }

}

let book1 = new Library([], 'calle Pez 7 Madrid', 'Pepito Grillo')
 
// console.log(book1.toString());
// console.log (book1.getNumberOfBooks());
// console.log (book1.findByAuthor('John'));


