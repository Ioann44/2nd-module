import { Transport } from "./classes";
import { CarBody, CarClass } from "./enums";

let car = new Transport.Car("Audi", "C4", 1994, "AAAAA", "А111АА 63", CarBody.SEDAN, CarClass.C);
try {
	delete car.carBody;
	delete Transport.Car.prototype.toString;
	console.log("Prototype change is fine");
} catch (error) {
	console.log("Seal decorator works");
}
console.log(car);
console.log(car.toString());