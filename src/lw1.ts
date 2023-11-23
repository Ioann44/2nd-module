const concat3 = (s1: string, s2: string, s3: string): string => s1 + s2 + s3;
console.log(concat3("con", "cate", "nation"));

const num: number = 1;
const str: string = "string";
let bool: boolean = false;
enum EnumExample {
	Zero, One, Two, Three
}
let list: Array<string | number> = [1, 2, 3, "4", "5"];

// Stringify
interface Entity {
	id: number;
}
interface ToJsonStringify extends
	Entity {
	e1: string;
	e2: string;
}
const data: ToJsonStringify = {
	id: 2,
	e1: "Поле 1",
	e2: "Поле 2",
}

const jsonString: string = JSON.stringify(data);
console.log(jsonString);