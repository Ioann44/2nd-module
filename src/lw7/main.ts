// import { BikeStorage, Car, CarBody, CarClass, Doc, Motorbike, Owner, Vehicle } from "./classes";
import { Transport } from "./classes";
import { CarBody, CarClass, Doc } from "./enums";

const owner = new Transport.Owner('Doe', 'John', 'Smith', new Date(1990, 5, 15), Doc.passport, 1234, 567890);
const car = new Transport.Car(
	"Audi", "C4", 1994, "A".repeat(17), "А111АА 63", owner, CarBody.SEDAN, CarClass.C);
const bike1 = new Transport.Motorbike('Honda', 'CBR1000RR', 2022, 'VIN123456', 'REG001', owner, 'Tubular', true);
const bike2 = new Transport.Motorbike('Yamaha', 'YZF-R6', 2023, 'VIN654321', 'REG002', owner, 'Diamond', true);
const bike3 = new Transport.Motorbike('Kawasaki', 'Ninja 650', 2021, 'VIN789012', 'REG003', owner, 'Backbone', false);

let bikeStorage = new Transport.BikeStorage();
bikeStorage.storage.push(bike1, bike2, bike3);
// bikeStorage.getAll().forEach(bike => bike.print());

console.log("\nGet sorted backward by models:");
bikeStorage.getSortedBackwardByModels().forEach(bike => bike.print())

console.log("\nGet all of specified company:");
bikeStorage.getAllByCompany("Honda").forEach(bike => bike.print());

console.log("\nGet cars body and class info:");
console.log(car.getBodyClassInfo());