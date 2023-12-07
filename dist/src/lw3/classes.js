"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BikeStorage = exports.Motorbike = exports.Car = exports.Vehicle = exports.Owner = exports.CarClass = exports.CarBody = exports.Doc = void 0;
var Doc;
(function (Doc) {
    Doc[Doc["passport"] = 0] = "passport";
    Doc[Doc["birhSert"] = 1] = "birhSert";
    Doc[Doc["studentCard"] = 2] = "studentCard";
    Doc[Doc["drivingLicense"] = 3] = "drivingLicense";
})(Doc || (exports.Doc = Doc = {}));
var CarBody;
(function (CarBody) {
    CarBody["SEDAN"] = "Sedan";
    CarBody["HATCHBACK"] = "Hatchback";
    CarBody["COUPE"] = "Coupe";
    CarBody["CONVERTIBLE"] = "Convertible";
    CarBody["SUV"] = "SUV";
    CarBody["MINIVAN"] = "Minivan";
    CarBody["PICKUP_TRUCK"] = "Pickup Truck";
})(CarBody || (exports.CarBody = CarBody = {}));
var CarClass;
(function (CarClass) {
    CarClass["A"] = "A";
    CarClass["B"] = "B";
    CarClass["C"] = "C";
    CarClass["D"] = "D";
    CarClass["E"] = "E";
    CarClass["F"] = "F";
    CarClass["S"] = "S";
})(CarClass || (exports.CarClass = CarClass = {}));
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
    get company() {
        return this._company;
    }
    set company(value) {
        this._company = value;
    }
    get model() {
        return this._model;
    }
    set model(value) {
        this._model = value;
    }
    get year() {
        return this._year;
    }
    set year(value) {
        this._year = value;
    }
    get vin() {
        return this._vin;
    }
    set vin(value) {
        this._vin = value;
    }
    get regNum() {
        return this._regNum;
    }
    set regNum(value) {
        this._regNum = value;
    }
    get owner() {
        return this._owner;
    }
    set owner(value) {
        this._owner = value;
    }
    print() {
        console.log(`Транспортное средство ${this.company} ${this.model}, ${this.year} года
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
class Car {
    print() {
        console.log(`Автомобиль ${this.company} ${this.model}, ${this.year} года
Имеет VIN-номер ${this.vin} и регистрационный номер ${this.regNum}
Владелец: ${this.owner.lastName} ${this.owner.firstName}
Кузов: ${this.carBody}, Класс: ${this.carClass}\n`);
    }
    constructor(company, model, year, vin, regNum, owner, carBody, carClass) {
        this.company = company;
        this.model = model;
        this.year = year;
        this.vin = vin;
        this.regNum = regNum;
        this.owner = owner;
        this.carBody = carBody;
        this.carClass = carClass;
    }
}
exports.Car = Car;
class Motorbike {
    print() {
        console.log(`Мотоцикл ${this.company} ${this.model}, ${this.year} года
Имеет VIN-номер ${this.vin} и регистрационный номер ${this.regNum}
Владелец: ${this.owner.lastName} ${this.owner.firstName}
Рама: ${this.frame}, Спортивный: ${this.isSport ? "Да" : "Нет"}\n`);
    }
    constructor(company, model, year, vin, regNum, owner, frame, isSport) {
        this.company = company;
        this.model = model;
        this.year = year;
        this.vin = vin;
        this.regNum = regNum;
        this.owner = owner;
        this.frame = frame;
        this.isSport = isSport;
    }
}
exports.Motorbike = Motorbike;
class BikeStorage {
    getAll() {
        return this.storage;
    }
    constructor() {
        this.date = new Date();
        this.storage = new Array;
    }
}
exports.BikeStorage = BikeStorage;
