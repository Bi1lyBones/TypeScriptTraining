// ACCESS MODIFIERS - модификаторы доступа, позволяют сокрыть состояние объекта от внешнего доступа
//                    и управлять доступом к этому состоянию.

//-----------------------------------------------------------------------------------------------------------

// 1. PRIVATE - при применении данного модификатора к свойствам и методам, к ним нельзя будет обратиться
//              извне при создании объекта данного класса.

class Person {
  private _name: string;
  private _year: number;

  constructor(name: string, age: number) {
    this._name = name;
    this._year = this.setYear(age);
  }
  public print(): void {
    console.log(`Имя: ${this._name}  Год рождения: ${this._year}`);
  }

  private setYear(age: number): number {
    return new Date().getFullYear() - age;
  }
}

let tom = new Person("Tom", 24);
tom.print();
// console.log(tom._name); // нельзя обратиться, так как _name - private
// tom.setYear(45); // нельзя обратиться, так как функция - private

//-----------------------------------------------------------------------------------------------------------

// 2. PROTECTED - определяет поля и методы, которые из вне класса видны только в классах-наследниках.

class Person {
  protected name: string;
  private year: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.year = this.setYear(age);
  }
  protected printPerson(): void {
    console.log(`Имя: ${this.name}  Год рождения: ${this.year}`);
  }
  private setYear(age: number): number {
    return new Date().getFullYear() - age;
  }
}
class Employee extends Person {
  protected company: string;
  constructor(name: string, age: number, company: string) {
    super(name, age);
    this.company = company;
  }
  public printEmployee(): void {
    //console.log("Year: " + this.year);    // поле year недоступно, так как private
    // setYear(25);                         // метод setYear недоступен, так как private
    this.printPerson(); // метод printPerson доступен, так как protected
    console.log(`Компания: ${this.company}`);
  }
}

let sam = new Employee("Sam", 31, "Microsoft");
sam.printEmployee();

//-----------------------------------------------------------------------------------------------------------

// 3. PUBLIC - если к свойствам и функциям классов не применяется модификатор,
//             то такие свойства и функции расцениваются как будто они определены
//             с модификатором public

class Person {
  name: string;
  year: number;
}

// БУДЕТ ЭКВИВАЛЕНТНО

class Person {
  public name: string;
  public year: number;
}
