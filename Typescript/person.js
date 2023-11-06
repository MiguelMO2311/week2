"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    Person.prototype.setAddress = function (address) {
        this.address = address;
    };
    Person.prototype.getAdrress = function () {
        return this.address;
    };
    Person.prototype.printName = function () {
        return this.name;
    };
    Person.prototype.yearOfBirth = function () {
        var currentYear = new Date().getFullYear();
        var yBirth = (currentYear - this.age);
        return yBirth;
    };
    return Person;
}());
exports.Person = Person;
var Person1 = new Person('Maria', 30, 'Pza. España 20 Madrid');
console.log(Person1);
console.log(Person1.printName());
console.log(Person1.yearOfBirth());
