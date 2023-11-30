"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Owner = exports.Doc = void 0;
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
			Дата рождения: ${this.birthdate}
			Документ: ${this.document}
			Серия: ${this.docSerial}
			Номер: ${this.docNumber}`);
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
