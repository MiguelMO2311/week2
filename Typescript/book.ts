// Reto 4 TS.

export class Book {
private title:string;
private nPages:number;
private isbn:string;
private author:string;
private editorial:string;
        constructor(title:string, nPages:number, isbn:string, author:string, editorial:string){
                        this.title = title;
                        this.nPages = nPages;
                        this.isbn = isbn;
                        this.author = author;
                        this.editorial = editorial;
            }
public getTitle():string
{
    return this.title;
}
public getIsbn():string
{
    return this.isbn;
}
public getAuthor():string
{
    return this.author;
}
public getEditorial():string
{
    return this.editorial;
}
public getNPages (nPages:number)
{
    return this.nPages;
}
public setTitle(title:string)
{
    this.title = title;
}
public setIsbn (isbn:string)
{
    this.isbn = isbn;
}
public setAuthor (author:string)
{
    this.author = author;
}
public setEditorial (editorial:string)
{
    this.editorial = editorial;
}
public setNPages (nPages:number)
{
    this.nPages = nPages;
}
public toString()
{ for( let i=0; i<Book.length;i++){
return (`Title - ${this.title} 
Numbers of Pages - ${this.nPages}
ISBN - ${this.isbn}
Author - ${this.author}
Editorial - ${this.editorial}`)
}
}
}


// let myBook = new Book ('Relato de un Naufrago', 176, '9788490323762','Gabriel García Márquez', 'Debolsillo')
// // // myBook.setTitle ('Cien años de soledad');
// // // console.log(myBook.getAuthor);
// // // console.log(myBook.toString);

// // myBook.setTitle('Coco');
// // console.log(myBook.getAuthor());
// console.log(myBook.toString());


