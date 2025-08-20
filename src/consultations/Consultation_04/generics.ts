// Что такое дженерики (Generics) в TypeScript

// Дженерики — это способ писать универсальный код,
//  который работает с разными типами, но при этом сохраняет строгую типизацию.
// Они позволяют не привязываться к конкретному типу (string, number и т.д.),
//  а вместо этого использовать параметр типа (обычно T).

// 📌 Главная идея:
// Ты пишешь функцию/тип/класс один раз,
//  а используешь с разными типами данных без потери подсказок и проверок TypeScript.

// function identity(value: any): any {
//     return value;
// }

// let num = identity(42); // num: any — TS не знает, что это number
// let str = identity("Hello"); // str: any — подсказок нет
// // Проблема: теряется информация о типе.

// =========================================

// Пример 2: С дженериком
// function identity<T>(value: T): T {
//     return value;
// }

// let num = identity<number>(42); // num: number
// let str = identity<string>("Hello"); // str: string

//===============================================================

// Пример 3: Дженерик с массивом
// function getFirstElement<T>(arr: T[]): T {
//     return arr[0];
// }

// let firstNum = getFirstElement([1, 2, 3]); // T = number
// let firstStr = getFirstElement(["a", "b", "c"]); // T = string


// 📌 TS автоматически выводит тип (не всегда нужно явно писать <number>).
