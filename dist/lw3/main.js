"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const classes_1 = require("./classes");
const classes_2 = require("./classes");
let person = new classes_1.Owner("Korotkevich", "Gennady", "Vladimirovich", new Date(1994, 9, 25), classes_2.Doc.passport, 1234, 123456);
console.log(person);
