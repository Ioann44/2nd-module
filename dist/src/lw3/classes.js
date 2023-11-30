"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehicle = exports.Owner = exports.Doc = void 0;
var Doc;
(function (Doc) {
    Doc[Doc["passport"] = 0] = "passport";
    Doc[Doc["birhSert"] = 1] = "birhSert";
    Doc[Doc["studentCard"] = 2] = "studentCard";
    Doc[Doc["drivingLicense"] = 3] = "drivingLicense";
})(Doc || (exports.Doc = Doc = {}));
class Owner {
    print() {
        console.log(`${this.lastName} ${this.firstName} ${this.surname}
Дата рождения: ${this.birthdate.toISOString().slice(0, 10)}
Документ: ${this.document}
Серия: ${this.docSerial}
Номер: ${this.docNumber}\n`);
    }
    constructor(lastName, firstName, surname, birthdate, document, docSerial, docNumber) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.surname = surname;
        this.birthdate = birthdate;
        this.document = document;
        this.docSerial = docSerial;
        this.docNumber = docNumber;
    }
}
exports.Owner = Owner;
class Vehicle {
    print() {
        console.log(`Автомобиль ${this.company} ${this.model}, ${this.year} года
Имеет VIN-номер ${this.vin} и регистрационный номер ${this.regNum}
Владелец: ${this.owner.lastName} ${this.owner.firstName}\n`);
    }
    constructor(company, model, year, vin, regNum, owner) {
        this.company = company;
        this.model = model;
        this.year = year;
        this.vin = vin;
        this.regNum = regNum;
        this.owner = owner;
    }
}
exports.Vehicle = Vehicle;
