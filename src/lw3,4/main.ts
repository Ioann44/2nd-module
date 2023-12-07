// import { BikeStorage, Car, CarBody, CarClass, Doc, Motorbike, Owner, Vehicle } from "./classes";
import { Transport } from "./classes";
import { Doc, CarBody, CarClass } from "./enums";

let person = new Transport.Owner(
	"Korotkevich",
	"Gennady",
	"Vladimirovich",
	new Date(1994, 8, 25),
	Doc.passport,
	1234,
	123456
);

let vehicle = new Transport.Vehicle("Audi", "C4", 1994, "A".repeat(17), "А111АА 63", person);

// person.print();
// vehicle.print();
// console.log(vehicle.company);

let car = new Transport.Car("Audi", "C4", 1994, "A".repeat(17), "А111АА 63", person, CarBody.SEDAN, CarClass.C);
let owner = new Transport.Owner('Doe', 'John', 'Smith', new Date(1990, 5, 15), Doc.passport, 1234, 567890);
let bike1 = new Transport.Motorbike('Honda', 'CBR1000RR', 2022, 'VIN123456', 'REG001', owner, 'Tubular', true);
let bike2 = new Transport.Motorbike('Yamaha', 'YZF-R6', 2023, 'VIN654321', 'REG002', owner, 'Diamond', true);
let bike3 = new Transport.Motorbike('Kawasaki', 'Ninja 650', 2021, 'VIN789012', 'REG003', owner, 'Backbone', false);

let bikeStorage = new Transport.BikeStorage();
bikeStorage.storage.push(bike1, bike2, bike3);
bikeStorage.getAll().forEach(bike => bike.print());