// Реализовать метод, возвращающий минимальное число из массива вещественных чисел
function minElement(array) {
    let minNum = Number.MAX_VALUE;
    for (const num of array) {
        minNum = Math.min(minNum, num);
    }
    return minNum;
}
console.log(minElement([1, 2, 3, 0, 5, 6, 7]));
// Реализовать метод, возвращающий количество нулевых значений в матрице целых чисел
function countZeros(matrix) {
    return matrix.map(row => row.filter(cell => cell == 0)).reduce((sum, cur) => sum += cur.length, 0);
}
console.log(countZeros([
    [1, 2, 0, 4],
    [0, 0, 1, 4],
    [-1, 0, 0, 1],
    [1, 1, 1, 1]
]));
// Создайте кортеж, который может содержать только 3 строковых значения. Реализуйте метод, возвращающий конкатенацию этих строковых значений.
let tuple = ["con", "cate", "nation"];
{
    const concat3 = (s1, s2, s3) => s1 + s2 + s3;
    console.log(concat3(...tuple));
}
// Создайте тип перечисление для типов принтеров (струйный, лазерный и т.д.). Выведите какой-либо тип принтера в консоль.
var Printer;
(function (Printer) {
    Printer["Jet"] = "\u0421\u0442\u0440\u0443\u0439\u043D\u044B\u0439";
    Printer["Laser"] = "\u041B\u0430\u0437\u0435\u0440\u043D\u044B\u0439";
})(Printer || (Printer = {}));
console.log(Printer.Laser);
// Вставьте следующий код в ваш проект...
class Pet {
    constructor() {
        this.name = 'Some pet';
        this.age = -1;
    }
    speak() {
        return "No speak. I am fish!";
    }
}
class Dog extends Pet {
    constructor() {
        super(...arguments);
        this.label = "AngryHunter";
        this.age = 8;
    }
    speak() {
        return "Yaw-Gaw!";
    }
}
class Cat extends Pet {
    constructor() {
        super(...arguments);
        this.name = 'Barsik';
        this.age = 2;
    }
    speak() {
        return "Miyau!";
    }
}
function LogPet(pet) {
    console.log(`Это питомец ${pet.name}, ему ${pet.age} лет, он говорит ${pet.speak()}`);
}
LogPet(new Dog());
LogPet(new Cat());
// Мой тип
class MyPrinterClass {
    constructor() {
        this.name = "HP Laser Jet P1102";
        this.worth = "Я не помню";
        this.type = Printer.Laser;
    }
}
console.log(JSON.stringify(new MyPrinterClass()));
