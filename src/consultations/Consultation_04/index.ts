
// 📌 Основные особенности TypeScript
// Статическая типизация
// В TS типы переменных, функций, аргументов и возвращаемых значений можно задавать явно.
// Ошибки в типах выявляются ещё на этапе компиляции, а не во время выполнения кода.
// Это повышает надежность и снижает количество багов.
// Совместимость с JavaScript
// Любой корректный JS-код — это уже корректный TS-код.
// Можно добавлять типы постепенно.
// Поддержка современных возможностей JS
// Поддержка ES6+ и будущих стандартов.
// TS компилирует их в более старый JS для совместимости с браузерами.
// Поддержка ООП (объектно-ориентированного программирования)
// Классы, интерфейсы, модификаторы доступа (public, private, protected), абстрактные классы.
// Интерфейсы и собственные типы
// Возможность описывать форму объектов, сигнатуры функций, структуры данных.
// Поддержка type и interface для создания собственных типов.
// Автодополнение и рефакторинг
// Благодаря типам редакторы (например, VS Code) лучше понимают ваш код, подсказывают методы, предупреждают об ошибках.


console.log("Welcome to Typescript");

let x = 10;
// x = "Hello";
console.log(x);

// Как типизировать?
// Явно vs Неявно
// При объявлении переменной мы указываем тип данных:

let y: number = 100; // Пример явной типизации
let p: string;
p = "Hello";

//=======================================================================
// Джненерики - это способ писать универсальный код.
//который работает с разными типами, но при этом сохраняет строгую типизацию.
//Они позволяют не привязываться к конкретному типу (string, number и т.п),
//а вместо этого использовать параметр типа (обычно Т).

// Главная  идея:
//Ты пишешь функцию /тип/класс один раз,
// а используешь с разными типами данных без потери подсказок и проверок TypeScript.

// function identity(value: any): any{
// return value;
// }

// let num = identity(42); // num: any - TS не знает, что это number
// let str = identity("Hello"); // str: any - подсказок нет
// // Проблема: теряется информация о типе.

//===============================================

// Пример 2 с Дженериком

// function identity <T>(value: T): T {
// return value;
// }

// let num = identity<number>(42); // num: number
// let str = identity<string>("Hello"); // str: string

//=================================================================

// Пример 3 с Джененриком

//function getFirstElement<T>(arr: T[]): T{
// return arr[0];
// }

// let firstNum = getFirstElement([1,2,3]); // T = number
// let firstStr = getFirstElement(["a", "b", "c"]); // T = string

// TS автоматически выводит тип (не всегда нужно явно писать <number>).

//=====================================================

let isDrunk: boolean = true;

// Ключевое слово type
// мы можем объявлять типы отдельно

type Age = number; // Типы всегда пишутся с большой буквы
let myAge: Age = 29;

let k:number| string = 10;
k = "Hello";
console.log(k);

let qwerty:any  //почти не используется

// Пример Union type
type Pet = "cat"| "dog"; // кроме строки cat или dog не пройдет
let petOfAlex: Pet ="cat"
petOfAlex = "dog"

// Можно расширить Union type
type ExtendedPet = Pet | "bird"; // кроме строки cat,dog или bird не будет
let petOfAlex2: ExtendedPet = "cat"

type Gender = "male" | "female"; // здесть используется два type
type ExtendedGender = Gender | "non binary person";

// Как типизировать массив стринговых значений
let fruits:string[]= ["aplle", "orange", "mango"];
// особенно важно указывать тип при создании пустого массива
let vegetables:string[] = [];
vegetables.push("potato");
console.log(vegetables);

// Как типизировать объекты?

type User ={
    firstName: string,
    isAdmin: boolean
}

const user1: User={
    firstName: "Vladimir",
    isAdmin:false
}

interface Monster{
    name:string,
    height:number,
    isAlive:boolean,
    isEvil:boolean
}
// Создали объект указанного типа
const frankestein: Monster ={
    name: "Frankestein",
    height: 10,
    isAlive: true,
    isEvil: false
}

interface ExtendedMonster extends Monster{ //расшириние через extends
    isFlying:boolean
}

const dracula: ExtendedMonster ={
    name: "Dracula",
    height: 10,
    isAlive: true,
    isEvil: false,
    isFlying: true
    
}

// Опциональные поля ..?..(если есть такое поле -- отдай мне значение)

interface Food{
    title: string;
    isSweet?: boolean;
}
const pancake: Food ={ title:"Pancakes", isSweet: true};
const carrot: Food ={ title:"Carrot"}; // не  ругается, что не указали поле
// isSweet, поскольку оно является опциональным

console.log(pancake);
console.log(carrot);


// Типизация функций
// Нужно типизировать параметры и возвращаемое значение

function sum(a:number, b:number):number{
    return a+b;
}
const dev = (a: number, b:number) =>a/b; //стрелочная функция отличается отсутствием слова function и return(нет this, ссылки на объект)

console.log(sum(10,12));
console.log(dev(20,2));

function toUpper(str: ExtendedPet):string{
    return str.toUpperCase()//str - имя параметра(может быть любым)
}
console.log(toUpper("cat"))

//явная конвертация 
// ("b" + "a" + + "a" + "a" .toLowerCase() "banana" - - - (символы + "a" преобразуются в nan)
const nine = Number("9"); 
const nineStr = String(9);

console.log(nine);
console.log(nineStr);

// | Ситуация                          | Рекомендация            |          |
// | --------------------------------- | ----------------------- | -------- |
// | Описание формы объекта            | `interface` ✅           |          |
// | Объединения (\`                   | `, `&\`, условные типы) | `type` ✅ |
// | Расширение нескольких интерфейсов | `interface` ✅           |          |
// | Комбинирование разных типов       | `type` ✅                |          |


// Создать интерфейс город City
//  со следующими свойствами:
//  name
//  population
// riversName - опциональное поле названия реки
// isCapital - опциональное поле является ли город столицей
// isTouristic - опциональное поле является ли город туристическим


// Создайте  объктов для этого интерфейса


// Дополнительно сделайте интерфейс расширяющий город
//  со следующими свойствами: добавить дату основания

interface City{
    name: string;
    population: number;
    riversName?: string;
    isTouristic?: boolean;
    isCapital?: boolean;
}

const Berlin: City={
    name: "Berlin",
    population: 3_000_000,
    isCapital: true,
    riversName:"ELBE",
    isTouristic: true
}

console.log(Berlin);


// interface чаще используется для описания структур классов, API-ответов и объектов,
//  потому что они могут автоматически расширяться при объединении объявлений:


// interface User {
//   name: string;
// }

// interface User {
//   age: number;
// }

// // Результат:
// const user: User = {
//   name: 'John',
//   age: 30,
// };



// В отдельном файле ts создайте interface Airplane - самолет с полями:

// numberOfEngines - количество двигателей
// isJet - реактивный
// maxHeight - максимальная высота полета
// capacity - опциональное поле вместимость
// Создайте несколько переменных типа Airplane.

// interface Airplane {
//   numberOfEngines: number;
//   isJet: boolean;
//   maxHeight: number;
//   capacity?: number;
// }

// const airbus310: Airplane = {
//   numberOfEngines: 4,
//   isJet: false,
//   maxHeight: 11_000,
//   capacity: 100
// }



// В отдельном файле ts создайте interface Airplane - самолет с полями:

// numberOfEngines - количество двигателей
// isJet - реактивный
// maxHeight - максимальная высота полета
// capacity - опциональное поле вместимость
// Создайте несколько переменных типа Airplane.

interface Airplane {
  numberOfEngines: number;
  isJet: boolean;
  maxHeight: number;
  capacity?: number;
}

const airbus310: Airplane = {
  numberOfEngines: 4,
  isJet: false,
  maxHeight: 11_000,
  capacity: 100
}

// npm install -g typescript
// npm install -g ts-node
// tsc -v




