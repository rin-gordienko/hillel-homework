// Создать класс Person, который будет иметь следующие поля:

// firstName
// lastName
// age
// birthDayDate (в формате ‘YYYY-MM-DD’, например ‘1989-02-03’)
// метод celebrate - который будет выводить возвращать текст “Happy Birthday, let’s celebrate’"

// Класс Employee должен наследовать от Person и иметь следующие поля:

// приватное свойство salary
// jobPosition
// метод getYearSalary (как в прошлой домашке)
// метод celebrate - который будет проверять - если день вашего дня рождения в текущем году выпадает на выходной день - то вернет текст “Happy Birthday, let’s celebrate’".
// Если же дата рождения выпадает на выходной - то вернет текст “Happy Birthday, but I need to work"

// Создать 1 экземпляр класса Person и 1 экземпляр класса Employee. Сделать вызов метод celebrate у обоих объектов.

function isWeekend(date) {
  const userDay = new Date(date).getDay();
  return userDay === 0 || userDay === 6;
}

class Person {
  constructor(firstName, lastName, age, birthdayDate) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.birthdayDate = new Date(birthdayDate);
  }
  celebrate() {
    console.log("Happy Birthday, let's celebrate");
  }
}

class Employee extends Person {
  _salary;
  constructor(firstName, lastName, age, birthdayDate, salary, jobPosition) {
    super(firstName, lastName, age, birthdayDate);
    this._salary = salary;
    this.jobPosition = jobPosition;
  }
  getYearSalary() {
    return this._salary * 12;
  }
  celebrate() {
    let currentYear = new Date(this.birthdayDate).getFullYear();
    let currentBirthday = this.birthdayDate.setFullYear(currentYear);

    if (isWeekend(currentBirthday)) {
      return super.celebrate;
    }
    return "Happy Birthday, but I need to work";
  }
}

let person = new Person("Mary", "Jane", 35, "1987-04-09");
console.log(person);
console.log(person.celebrate());
console.log(person.birthdayDate);

let employee = new Employee(
  "Kate",
  "Dawson",
  33,
  "1989-03-03",
  "Painter",
  1000
);
console.log(employee);
console.log(employee.celebrate());
console.log(employee.birthdayDate);
