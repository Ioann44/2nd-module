"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const classes_1 = require("./classes");
let person = new classes_1.Owner("Korotkevich", "Gennady", "Vladimirovich", new Date(1994, 8, 25), classes_1.Doc.passport, 1234, 123456);
let vehicle = new classes_1.Vehicle("Audi", "C4", 1994, "A".repeat(17), "А111АА 63", person);
person.print();
vehicle.print();
console.log(vehicle.company);
