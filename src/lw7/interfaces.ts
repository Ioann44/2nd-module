import { Doc, CarBody, CarClass } from "./enums";


export interface OwnerI {
	lastName: string;
	firstName: string;
	surname: string;
	birthdate: Date;
	document: Doc;
	docSerial: number;
	docNumber: number;

	print(): void;
}

export interface VehicleI {
	company: string;
	model: string;
	year: number;
	vin: string;
	regNum: string;
	owner: OwnerI;

	print(): void;
}

export interface CarI extends VehicleI {
	carBody: CarBody;
	carClass: CarClass;

	getBodyClassInfo(): { body: string, class: string };
}

export interface MotorbikeI extends VehicleI {
	frame: string;
	isSport: boolean;
}

export interface VehicleStorageI<T extends VehicleI> {
	date: Date;
	storage: Array<T>;

	getAll(): Array<T>;
	getSortedBackwardByModels(): Array<T>;
	getAllByCompany(company: string): Array<T>;
}