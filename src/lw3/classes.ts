import { OwnerI, VehicleI } from "./interfaces";

export enum Doc {
	passport,
	birhSert,
	studentCard,
	drivingLicense
}

export class Owner implements OwnerI {
	lastName: string;
	firstName: string;
	surname: string;
	birthdate: Date;
	document: Doc;
	docSerial: number;
	docNumber: number;
	print(): void {
		console.log(`${this.lastName} ${this.firstName} ${this.surname}
Дата рождения: ${this.birthdate.toISOString().slice(0, 10)}
Документ: ${this.document}
Серия: ${this.docSerial}
Номер: ${this.docNumber}\n`);
	}

	constructor(
		lastName: string,
		firstName: string,
		surname: string,
		birthdate: Date,
		document: Doc,
		docSerial: number,
		docNumber: number
	) {
		this.lastName = lastName;
		this.firstName = firstName;
		this.surname = surname;
		this.birthdate = birthdate;
		this.document = document;
		this.docSerial = docSerial;
		this.docNumber = docNumber;
	}
}

export class Vehicle implements VehicleI {
	company: string;
	model: string;
	year: number;
	vin: string;
	regNum: string;
	owner: OwnerI;
	print(): void {
		console.log(`Автомобиль ${this.company} ${this.model}, ${this.year} года
Имеет VIN-номер ${this.vin} и регистрационный номер ${this.regNum}
Владелец: ${this.owner.lastName} ${this.owner.firstName}\n`);
	}

	constructor(
		company: string,
		model: string,
		year: number,
		vin: string,
		regNum: string,
		owner: OwnerI
	) {
		this.company = company;
		this.model = model;
		this.year = year;
		this.vin = vin;
		this.regNum = regNum;
		this.owner = owner;
	}
}