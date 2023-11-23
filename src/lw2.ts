// Реализовать метод, возвращающий минимальное число из массива вещественных чисел
function minElement(array: Array<number>): number {
	let minNum = Number.MAX_VALUE;
	for (const num of array) {
		minNum = Math.min(minNum, num);
	}
	return minNum;
}
console.log(minElement([1, 2, 3, 0, 5, 6, 7]));

// Реализовать метод, возвращающий количество нулевых значений в матрице целых чисел
function countZeros(matrix: number[][]): number {
	return matrix.map(row => row.filter(cell => cell == 0)).length;
}
console.log(countZeros(
	[
		[1, 2, 0, 4],
		[0, 0, 1, 4],
		[-1, 0, 2, 1],
		[1, 1, 1, 1]
	]
));

// Создайте кортеж, который может содержать только 3 строковых значения. Реализуйте метод, возвращающий конкатенацию этих строковых значений.
let tuple: [string, string, string] = ["con", "cate", "nation"];
{
	const concat3 = (s1: string, s2: string, s3: string): string => s1 + s2 + s3;
	console.log(concat3(...tuple));
}

// Создайте тип перечисление для типов принтеров (струйный, лазерный и т.д.). Выведите какой-либо тип принтера в консоль.
enum Printer {
	Jet = "Струйный",
	Laser = "Лазерный"
}
console.log(Printer.Laser);

// Вставьте следующий код в ваш проект...
class Pet {
	name: string = 'Some pet'
	age: number = -1
	speak() {
		return "No speak. I am fish!";
	}
}
class Dog extends Pet {
	label = "AngryHunter";
	age = 8;
	speak() {
		return "Yaw-Gaw!";
	}
}
class Cat extends Pet {
	name = 'Barsik';
	age = 2;
	speak() {
		return "Miyau!";
	}
}
function LogPet(pet: Pet) {
	console.log(`Это питомец ${pet.name}, ему ${pet.age} лет, он говорит ${pet.speak()}`);
}
LogPet(new Dog());
LogPet(new Cat());

// Мой тип
class MyPrinterClass {
	name = "HP Laser Jet P1102";
	worth = "Я не помню";
	type: Printer = Printer.Laser;
}
console.log(JSON.stringify(new MyPrinterClass()));