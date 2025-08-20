1. Явная и неявная типизация

Создайте две переменные:

a — с явной типизацией number

b — с неявной типизацией числа
Присвойте им значения и выведите в консоль.

2. Типизация переменной строкой

Создайте переменную greeting с типом string и значением "Hello, TypeScript!".
Выведите её в консоль.

3. Union Type

Создайте переменную status с типом "success" | "error".
Сначала присвойте "success", потом измените на "error". Выведите оба значения в консоль.

4. Расширенный Union Type

Создайте тип Role = "admin" | "user".
Создайте расширенный тип ExtendedRole, добавив "moderator".
Создайте переменную myRole типа ExtendedRole и присвойте ей "moderator".

5. Типизация массива

Создайте массив cities с типом string[] и добавьте в него 3 города. Выведите в консоль длину массива.

6. Типизация пустого массива

Создайте пустой массив numbers типа number[].
Добавьте в него 3 числа и выведите сумму этих чисел в консоль.

7. Типизация объекта (type)

Создайте тип Book с полями:

title — string

pages — number
Создайте переменную myBook типа Book и выведите её.

8. Типизация объекта (interface)

Создайте интерфейс Car с полями:

brand — string

year — number
Создайте переменную myCar и присвойте ей значения.

9. Опциональные поля в интерфейсе

Создайте интерфейс Movie с полями:

title — string

rating — number

director — string (опционально)
Создайте два объекта: один с директором, другой без.

10. Расширение интерфейсов

Создайте интерфейс Animal с полями name (string) и isWild (boolean).
Создайте интерфейс Bird, который расширяет Animal и добавляет поле canFly (boolean).
Создайте переменную eagle типа Bird.

11. Интерфейс города

Создайте интерфейс City с полями:

name — string

population — number

isCapital — boolean (опционально)
Создайте переменную Paris и присвойте ей значения.

12. Функция с типами параметров

Создайте функцию multiply(a: number, b: number): number, которая возвращает произведение двух чисел.
Проверьте её на примере.

13. Функция с типом возвращаемого значения

Создайте функцию greet(name: string): string, которая возвращает "Hello, {name}!".
Вызовите её с вашим именем.

14. Функция, принимающая union type

Создайте функцию printPet(pet: "cat" | "dog"), которая выводит сообщение "You have a {pet}".
Проверьте на обоих вариантах.

15. Тип для функции

Создайте тип MathOperation = (a: number, b: number) => number.
Создайте переменные add и subtract этого типа, реализовав сложение и вычитание.

16. Интерфейс самолёта

Создайте интерфейс Airplane с полями:

numberOfEngines — number

isJet — boolean

maxHeight — number

capacity — number (опционально)
Создайте переменные boeing747 и cessna172 типа Airplane.

17. Типизация и массив объектов

Создайте тип Product с полями:

name — string

price — number
Создайте массив products: Product[] и добавьте 3 объекта. Выведите их в консоль.

18. Интерфейс с датой

Создайте интерфейс Event с полями:

title — string

date — Date
Создайте переменную concert и выведите дату в консоль в формате YYYY-MM-DD.

19. Преобразование типов

Создайте переменную numStr типа string со значением "42".
Преобразуйте её в число и выведите сумму с числом 8.

20. Функция с необязательным параметром

Создайте функцию introduce(name: string, age?: number), которая выводит:

"My name is {name} and I am {age} years old" — если возраст указан

"My name is {name}" — если возраст не указан.


====================================================================================================

ОТВЕТЫ


1. Явная и неявная типизация

Задание:
Создайте две переменные:

a — с явной типизацией number

b — с неявной типизацией числа

Решение:

let a: number = 5; // явная типизация
let b = 10; // неявная типизация
console.log(a, b);


Объяснение:
В первом случае мы явно указываем тип, во втором TypeScript сам определяет, что это number.

2. Типизация переменной строкой
let greeting: string = "Hello, TypeScript!";
console.log(greeting);


Объяснение:
Тип string гарантирует, что переменной можно присвоить только строку.

3. Union Type
let status: "success" | "error" = "success";
status = "error";
console.log(status);


Объяснение:
Union Type позволяет переменной иметь несколько допустимых значений из фиксированного набора.

4. Расширенный Union Type
type Role = "admin" | "user";
type ExtendedRole = Role | "moderator";

let myRole: ExtendedRole = "moderator";
console.log(myRole);


Объяснение:
Расширенный тип добавляет новые допустимые значения к уже существующему типу.

5. Типизация массива
let cities: string[] = ["Berlin", "Paris", "Rome"];
console.log(cities.length);


Объяснение:
string[] означает массив, состоящий только из строк.

6. Типизация пустого массива
let numbers: number[] = [];
numbers.push(5, 10, 15);
console.log(numbers[0] + numbers[1] + numbers[2]);


Объяснение:
Важно сразу указать тип при создании пустого массива, иначе TS определит тип как never[].

7. Типизация объекта (type)
type Book = {
    title: string;
    pages: number;
};

let myBook: Book = { title: "1984", pages: 328 };
console.log(myBook);


Объяснение:
type удобно использовать для описания структуры объекта.

8. Типизация объекта (interface)
interface Car {
    brand: string;
    year: number;
}

let myCar: Car = { brand: "Toyota", year: 2020 };
console.log(myCar);


Объяснение:
interface также описывает объект, но может расширяться.

9. Опциональные поля
interface Movie {
    title: string;
    rating: number;
    director?: string;
}

let movie1: Movie = { title: "Inception", rating: 9, director: "Nolan" };
let movie2: Movie = { title: "Avatar", rating: 8 };

console.log(movie1, movie2);


Объяснение:
? делает свойство необязательным.

10. Расширение интерфейсов
interface Animal {
    name: string;
    isWild: boolean;
}

interface Bird extends Animal {
    canFly: boolean;
}

let eagle: Bird = { name: "Eagle", isWild: true, canFly: true };
console.log(eagle);


Объяснение:
extends позволяет добавлять новые поля к существующему интерфейсу.

11. Интерфейс города
interface City {
    name: string;
    population: number;
    isCapital?: boolean;
}

let Paris: City = { name: "Paris", population: 2_100_000, isCapital: true };
console.log(Paris);


Объяснение:
Опциональное поле isCapital можно не указывать.

12. Функция с типами параметров
function multiply(a: number, b: number): number {
    return a * b;
}
console.log(multiply(5, 3));


Объяснение:
Параметры и возвращаемое значение функции типизированы.

13. Функция с возвращаемым значением
function greet(name: string): string {
    return `Hello, ${name}!`;
}
console.log(greet("Mikhail"));


Объяснение:
Функция обязана вернуть string, иначе будет ошибка.

14. Функция с union type
function printPet(pet: "cat" | "dog") {
    console.log(`You have a ${pet}`);
}
printPet("cat");
printPet("dog");


Объяснение:
Функция принимает только два фиксированных значения.

15. Тип для функции
type MathOperation = (a: number, b: number) => number;

let add: MathOperation = (a, b) => a + b;
let subtract: MathOperation = (a, b) => a - b;

console.log(add(5, 3), subtract(5, 3));


Объяснение:
Тип функции описывает параметры и возвращаемое значение.

16. Интерфейс самолёта
interface Airplane {
    numberOfEngines: number;
    isJet: boolean;
    maxHeight: number;
    capacity?: number;
}

let boeing747: Airplane = { numberOfEngines: 4, isJet: true, maxHeight: 13000, capacity: 416 };
let cessna172: Airplane = { numberOfEngines: 1, isJet: false, maxHeight: 4000 };

console.log(boeing747, cessna172);


Объяснение:
Опциональное поле capacity можно не указывать.

17. Массив объектов
type Product = {
    name: string;
    price: number;
};

let products: Product[] = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 600 },
    { name: "Tablet", price: 400 }
];
console.log(products);


Объяснение:
Product[] означает массив объектов с типом Product.

18. Интерфейс с датой
interface Event {
    title: string;
    date: Date;
}

let concert: Event = { title: "Rock Show", date: new Date("2025-08-15") };
console.log(concert.date.toISOString().split("T")[0]);


Объяснение:
Тип Date используется для работы с датами.

19. Преобразование типов
let numStr: string = "42";
let num = Number(numStr);
console.log(num + 8);


Объяснение:
Number() преобразует строку в число.

20. Функция с необязательным параметром
function introduce(name: string, age?: number) {
    if (age !== undefined) {
        console.log(`My name is ${name} and I am ${age} years old`);
    } else {
        console.log(`My name is ${name}`);
    }
}

introduce("Mikhail", 35);
introduce("Mikhail");


Объяснение:
age? делает параметр необязательным. Проверка undefined нужна, чтобы определить, передан ли аргумент.


