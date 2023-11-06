import { Person } from "./person";
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

// console.log (people1.name)
// console.log (people1.getAdrress())
// console.log (people2.name)
// console.log (people2.yearOfBirth())

