import { CarI, MotorbikeI, OwnerI, VehicleI, VehicleStorageI } from "./interfaces";

export enum Doc {
	passport,
	birhSert,
	studentCard,
	drivingLicense
}

export enum CarBody {
	SEDAN = 'Sedan',
	HATCHBACK = 'Hatchback',
	COUPE = 'Coupe',
	CONVERTIBLE = 'Convertible',
	SUV = 'SUV',
	MINIVAN = 'Minivan',
	PICKUP_TRUCK = 'Pickup Truck'
}

export enum CarClass {
	A = 'A',
	B = 'B',
	C = 'C',
	D = 'D',
	E = 'E',
	F = 'F',
	S = 'S'
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
	private _company: string;
	public get company(): string {
		return this._company;
	}
	public set company(value: string) {
		this._company = value;
	}
	private _model: string;
	public get model(): string {
		return this._model;
	}
	public set model(value: string) {
		this._model = value;
	}
	private _year: number;
	public get year(): number {
		return this._year;
	}
	public set year(value: number) {
		this._year = value;
	}
	private _vin: string;
	public get vin(): string {
		return this._vin;
	}
	public set vin(value: string) {
		this._vin = value;
	}
	private _regNum: string;
	public get regNum(): string {
		return this._regNum;
	}
	public set regNum(value: string) {
		this._regNum = value;
	}
	private _owner: OwnerI;
	public get owner(): OwnerI {
		return this._owner;
	}
	public set owner(value: OwnerI) {
		this._owner = value;
	}

	print(): void {
		console.log(`Транспортное средство ${this.company} ${this.model}, ${this.year} года
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

export class Car implements CarI {
	carBody: CarBody;
	carClass: CarClass;
	company: string;
	model: string;
	year: number;
	vin: string;
	regNum: string;
	owner: OwnerI;

	print(): void {
		console.log(`Автомобиль ${this.company} ${this.model}, ${this.year} года
Имеет VIN-номер ${this.vin} и регистрационный номер ${this.regNum}
Владелец: ${this.owner.lastName} ${this.owner.firstName}
Кузов: ${this.carBody}, Класс: ${this.carClass}\n`);
	}

	constructor(
		company: string,
		model: string,
		year: number,
		vin: string,
		regNum: string,
		owner: OwnerI,
		carBody: CarBody,
		carClass: CarClass
	) {
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

export class Motorbike implements MotorbikeI {
	frame: string;
	isSport: boolean;
	company: string;
	model: string;
	year: number;
	vin: string;
	regNum: string;
	owner: OwnerI;

	print(): void {
		console.log(`Мотоцикл ${this.company} ${this.model}, ${this.year} года
Имеет VIN-номер ${this.vin} и регистрационный номер ${this.regNum}
Владелец: ${this.owner.lastName} ${this.owner.firstName}
Рама: ${this.frame}, Спортивный: ${this.isSport ? "Да" : "Нет"}\n`);
	}

	constructor(
		company: string,
		model: string,
		year: number,
		vin: string,
		regNum: string,
		owner: OwnerI,
		frame: string,
		isSport: boolean
	) {
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

export class BikeStorage implements VehicleStorageI<MotorbikeI> {
	date: Date;
	storage: MotorbikeI[];

	getAll(): MotorbikeI[] {
		return this.storage;
	}

	constructor() {
		this.date = new Date();
		this.storage = new Array<MotorbikeI>
	}
}