// Создать класс Employee у которого будут следующие поля
// (задаются через конструктор):

// К данному классу, также необходимо добавить:

// “геттер” fullName - который будет выводить полное имя
// (комбинация firstName и lastName)
// добавить статический свойство - "кол-во дней отпуска в году" = 18
// добавить метод, который будет считать годовую зарплату сотрудника
// (salary умножить на кол-во месяцев в году)

// Создать 2 экземпляра этого класса
"use strict";

class Employee {
  static annualVacationDays = 18;

  constructor(firstName, lastName, age, jobPosition, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.jobPosition = jobPosition;
    this.salary = salary;
  }

  get fullName() {
    return `Full name is ${this.firstName} ${this.lastName}`;
  }
  countAnnualSalary() {
    return this.salary * 12;
  }
}

let royalEmployee = new Employee(
  "Mary",
  "Stuart",
  28,
  "Queen of Scotland",
  50000
);
console.log(royalEmployee);
console.log(royalEmployee.fullName);
console.log(royalEmployee.countAnnualSalary());

let detectiveEmployee = new Employee(
  "Spencer",
  "Reed",
  24,
  "Special Agent with the BAU",
  7000
);
console.log(detectiveEmployee);
console.log(detectiveEmployee.fullName);
console.log(detectiveEmployee.countAnnualSalary());
