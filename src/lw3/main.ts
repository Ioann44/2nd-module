import { Doc, Owner, Vehicle } from "./classes";

let person = new Owner(
	"Korotkevich",
	"Gennady",
	"Vladimirovich",
	new Date(1994, 8, 25),
	Doc.passport,
	1234,
	123456
);

let vehicle = new Vehicle("Audi", "C4", 1994, "A".repeat(17), "А111АА 63", person);

person.print();
vehicle.print();