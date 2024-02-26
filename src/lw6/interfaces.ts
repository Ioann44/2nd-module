import { CarBody, CarClass } from "./enums";

export interface VehicleI {
	company: string;
	model: string;
	year: number;
	vin: string;
	regNum: string;

	toString(): string;
}

export interface CarI extends VehicleI {
	carBody: CarBody;
	carClass: CarClass;
}