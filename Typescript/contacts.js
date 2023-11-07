"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contacts = void 0;
var Contacts = /** @class */ (function () {
    function Contacts() {
        this.people = [];
    }
    Contacts.prototype.printCalendar = function () {
        for (var i = 0; i < this.people.length; i++)
            console.log(this.people[i]);
    };
    return Contacts;
}());
exports.Contacts = Contacts;
// let people1 = new Person ('Maria', 30, 'Pza. España 20 Madrid');
// let people2 = new Person ('Santiago', 22, 'Pza. Mayor 74 Leganes');
// let agenda = new Contacts ()
// agenda.people=[people1, people2];
// console.log (people1.getAdrress())
// console.log (people2.yearOfBirth())
