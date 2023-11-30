import { Doc } from "./classes";

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
	
}