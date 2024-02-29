import { CarBody, CarClass } from "./enums";
import { VehicleI, CarI } from "./interfaces";
import { sealed, uppered } from "./decorators";

export namespace Transport {
	@sealed
	export class Car implements CarI {
		carBody: CarBody;
		carClass: CarClass;
		company: string;
		model: string;
		year: number;
		vin: string;
		regNum: string;

		@uppered
		toString(): string {
			return `Автомобиль ${this.company} ${this.model}, ${this.year} года
Имеет VIN-номер ${this.vin} и регистрационный номер ${this.regNum}
Кузов: ${this.carBody}, Класс: ${this.carClass}\n`;
		}

		constructor(
			company: string,
			model: string,
			year: number,
			vin: string,
			regNum: string,
			carBody: CarBody,
			carClass: CarClass
		) {
			this.company = company;
			this.model = model;
			this.year = year;
			this.vin = vin;
			this.regNum = regNum;
			this.carBody = carBody;
			this.carClass = carClass;
		}
	}
}