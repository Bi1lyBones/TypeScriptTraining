// 1. GENERICS - это обобщенные типы, необходимые для описания похожих,
//    но отличающихся какими-то характеристиками типов.

//ПРИМЕР:

//Определение типов
type CurrencySign = "₽" | "€" | "£";

//Делаем массив неизменяемым,использование generics на примере ReadonlyArray<CurrencySign>.
//В массиве могут лежать только элементы типа CurrencySign, это параметр дженерика.
const currencySigns: ReadonlyArray<CurrencySign> = ["₽", "€", "£"];

//-------------------------------------------------------------------------------------

// 2. NARROWING - это процесс уточнения типов переменных. Это ключевой механизм для работы с типами в TypeScript,
//                позволяющий разработчикам более точно указывать, какие типы данных используются в их коде.
//                Сужение типа помогает избегать ошибок, связанных с неправильным использованием типов, и делает
//                код более читаемым и безопасным.

// 2.1 TYPE OF:
//Позволяет проверить простые типы:
function printText(text: string | number) {
  if (typeof text === "string") {
    console.log(text.toUpperCase()); // text теперь имеет тип string
  } else {
    console.log(text); // text теперь имеет тип number
  }
}

// 2.2 ПРОВЕРКА НА ИСТИННОСТЬ:
//Автоматическое уточнение переменной с помощью if:
function printText(text: string | null) {
  if (text) {
    console.log(text); // text здесь не null
  } else {
    console.log("Text is null"); // text здесь null
  }
}

// 2.3 ПРОВЕРКА НА РАВЕНСТВО:
// Сужения типа переменной на основе использования операторов сравнения === или !==:
function printLength(x: string | string[]) {
  if (typeof x === "string") {
    console.log(x.length); // x теперь имеет тип string
  } else {
    console.log(x.length); // x теперь имеет тип string[]
  }
}

//2.4 IN:
//Оператор in проверяет наличие свойства в объекте, что позволяет TypeScript сузить
//тип объекта до конкретного типа, имеющего это свойство.
function printArea(shape: Square | Circle) {
  if ("radius" in shape) {
    console.log(Math.PI * shape.radius ** 2); // shape теперь имеет тип Circle
  } else {
    console.log(shape.sideLength ** 2); // shape теперь имеет тип Square
  }
}

//2.5 INSTANCE OF:
//Оператор instanceof проверяет, создан ли объект с помощью определенной функции конструктора.
//Это позволяет уточнить тип переменной до типа этого конструктора.
function printDate(date: Date | string) {
  if (date instanceof Date) {
    console.log(date.toISOString()); // date теперь имеет тип Date
  } else {
    console.log(date); // date теперь имеет тип string
  }
}

//2.6 NEVER:
//Тип never используется для представления значений, которые никогда не должны произойти.
function throwError(message: string): never {
  throw new Error(message);
}

//-------------------------------------------------------------------------------------

// 3.DEFAULT VALUES - используются для задания стандартных значений параметров функции,
//                    если при вызове функции они не были переданы.

// ПРИМЕР:

function func(first: string, last: string = "snow") {
  return first + " " + last;
}
