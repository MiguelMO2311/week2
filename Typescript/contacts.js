"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contacts = void 0;
var person_1 = require("./person");
var Contacts = /** @class */ (function () {
    function Contacts() {
        this.people = [];
        this.people = [];
    }
    Contacts.prototype.printCalendar = function () {
        var agenda = this.people.push();
        console.log(agenda);
    };
    return Contacts;
}());
exports.Contacts = Contacts;
var people1 = new person_1.Person('Maria', 30, 'Pza. España 20 Madrid');
console.log(people1.name);
console.log(people1.getAdrress());
