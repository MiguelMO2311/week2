"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person_1 = require("./person");
var people1 = new person_1.Person('Maria', 30, 'Pza. España 20 Madrid');
var people2 = new person_1.Person('Santiago', 22, 'Pza. Mayor 74 Leganes');
var agenda = [people1, people2];
console.log(people1.getAdrress());
console.log(people2.yearOfBirth());
console.log(agenda);
