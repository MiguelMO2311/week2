import { Person } from "./person";
import { Book } from "./book";

export class Contacts {

public people:Person[];

        constructor() {
        this.people = [];
    }
    printCalendar() {
        for (let i=0; i<this.people.length;i++)
    console.log (this.people[i]);
      }
}


// let people1 = new Person ('Maria', 30, 'Pza. España 20 Madrid');
// let people2 = new Person ('Santiago', 22, 'Pza. Mayor 74 Leganes');
// let agenda = new Contacts ()
// agenda.people=[people1, people2];

// console.log (people1.getAdrress())
// console.log (people2.yearOfBirth())
