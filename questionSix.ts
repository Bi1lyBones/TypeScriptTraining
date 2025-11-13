// 1. INTERFACES - используется для определения структуры объектов и классов,
//    обеспечивают типизацию и поддержку наследования

//создание интерфейса
interface User {
  name: string;
  age: number;
  skills: string[];
}

//создание экземпляра объекта
let user: User = {
  roleId:1,
  name: "asd",
  age: 33,
  skills: ["1", "2"],
};

//interface поддерживает наследование с помощью extends
interface UserWithRole extends User {
    roleId: number;
}

// 2. TYPE ALIASES - (псевдонимы типов), позволяют создавать новые имена  для
//    существующих типов

//определение типа объекта
type User {
  name: string;
  age: number;
  skills: string[];
}

//создание экземпляра объекта
let user: User = {
  name: "asd",
  age: 33,
  skills: ["1", "2"],
};

//Создание объединенных типов
type httpMethod = "post" | "get";
function myFn(url: string, method: httpMethod){
    //тело функции
}

