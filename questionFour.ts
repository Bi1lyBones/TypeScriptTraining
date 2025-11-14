// UTILITY TYPES - это набор встроенных типов, которые можно использовать
//                 для манипулирования типами данных в коде.

//-------------------------------------------------------------------------------------

// 1.Awaited<T> - это специальный тип, который может быть использован для обозначения типа,
//   который будет возвращен из асинхронной функции.

async function getData(): Promise<string> {
  return "hello";
}

let awaitedData: Awaited<ReturnType<typeof getData>>;
// теперь awaitedData может быть 'hello'

//-------------------------------------------------------------------------------------

// 2. Partial<T> - делает все свойства объекта типа T необязательными.

interface Person {
  name: string;
  age: number;
}

let partialPerson: Partial<Person>;
// теперь partialPerson может быть { name?: string; age?: number; }

//-------------------------------------------------------------------------------------

// 3. Required<T> - делает все свойства объекта типа T обязательными.

interface Person {
  name?: string;
  age?: number;
}

let requiredPerson: Required<Person>;
// теперь requiredPerson может быть { name: string; age: number; }

//-------------------------------------------------------------------------------------

// 4. Readonly<T> - делает все свойства объекта типа T доступными только для чтения.

interface Point {
  x: number;
  y: number;
}

let readonlyPoint: Readonly<Point>;
// теперь readonlyPoint может быть { readonly x: number; readonly y: number; }

//-------------------------------------------------------------------------------------

// 5. Record<Keys, Type> - создает тип, который является записью с ключами, определенными
//                         в первом параметре, и значениями типа, определенного во втором параметре.

type Keys = "a" | "b" | "c";
type RecordType = Record<Keys, number>;

let record: RecordType;
// теперь record может быть { a: number, b: number, c: number }

//-------------------------------------------------------------------------------------

// 6. Pick<T, K extends keyof T> - выбирает свойства объекта типа T с ключами, указанными в K.

interface Person {
  name: string;
  age: number;
}

let pickedPerson: Pick<Person, "name">;
// теперь pickedPerson может быть { name: string; }

//-------------------------------------------------------------------------------------

// 7. Omit<T, K extends keyof T> - выбирает свойства объекта типа T, исключая те, которые указаны в K

interface Person {
  name: string;
  age: number;
}

let omittedPerson: Omit<Person, "age">;
// теперь omittedPerson может быть { name: string; }

//-------------------------------------------------------------------------------------

// 8. Exclude<UnionType, ExcludedMembers> - исключает определенные типы из объединенного типа.

type A = "a" | "b" | "c";
type B = Exclude<A, "a" | "b">;
// теперь B это 'c'

//-------------------------------------------------------------------------------------

// 9. Extract<Type, Union> - извлекает из типа Type только те типы, которые присутствуют в Union.

type A = "a" | "b" | "c";
type B = "a" | "b";
type C = Extract<A, B>;
// теперь C это 'a' | 'b'

//-------------------------------------------------------------------------------------

// 10. NonNullable<Type> - извлекает тип из Type, исключая null и undefined.

let value: string | null | undefined;
let nonNullableValue: NonNullable<typeof value>;
// теперь nonNullableValue это string

//-------------------------------------------------------------------------------------

// 11. Parameters<Type> - извлекает типы аргументов функции Type.

function foo(a: string, b: number) {}
type FooParameters = Parameters<typeof foo>;
// теперь FooParameters это [string, number]

//-------------------------------------------------------------------------------------

// 12. ConstructorParameters<Type> - извлекает типы аргументов конструктора Type.

class Foo {
  constructor(a: string, b: number) {}
}
type FooConstructorParameters = ConstructorParameters<typeof Foo>;
// теперь FooConstructorParameters это [string, number]

//-------------------------------------------------------------------------------------

// 13. ReturnType<Type> - извлекает тип возвращаемого значения функции Type.

function foo(): string {
  return "hello";
}
type FooReturnType = ReturnType<typeof foo>;
// теперь FooReturnType это string

//-------------------------------------------------------------------------------------

// 13. ReturnType<Type> - извлекает тип возвращаемого значения функции Type.

function foo(): string {
  return "hello";
}
type FooReturnType = ReturnType<typeof foo>;
// теперь FooReturnType это string

//-------------------------------------------------------------------------------------

// 14. InstanceType<Type> - извлекает тип экземпляра класса Type.

class Foo {
  x: number;
}
type FooInstance = InstanceType<typeof Foo>;
// теперь FooInstance это { x: number }

//-------------------------------------------------------------------------------------

// 15. ThisParameterType<Type> - извлекает тип this из функции Type.

class Foo {
  x: number;
  method(this: this): void {}
}
type ThisType = ThisParameterType<Foo["method"]>;
// теперь ThisType это Foo
