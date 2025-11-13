// ENUM - это специальный тип, который позволяет создавать и предоставлять разработчику
//        набор именованных констант.

//-------------------------------------------------------------------------------------

//1. ENUM/OBJECT

//Определение констант
enum StatusCode {
  SUCCESS = "s",
  IN_PROCESS = "p",
  FAILED = "f",
}

//Создание объекта с использованием члена enum StatusCode
const res = {
  message: "Платеж успешен",
  StatusCode: StatusCode.SUCCESS,
};

//-------------------------------------------------------------------------------------

// 2. ENUM/CONST

//Определение констант
const enum HttpStatus {
  OK = 200,
  Created = 201,
  NotFound = 404,
  ServerError = 500,
}

//Использование
const myHttpStatus = HttpStatus.Created;
console.log(myHttpStatus);
