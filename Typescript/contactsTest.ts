import { Contacts } from "./contacts";
import { Person } from "./person";

let people1 = new Person ('Maria', 30, 'Pza. España 20 Madrid');
let people2 = new Person ('Santiago', 22, 'Pza. Mayor 74 Leganes');
let agenda = [people1,people2];

console.log (people1.getAdrress());
console.log(people2.yearOfBirth());
console.log (agenda);