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

function getBirthday(date) {
  let birthday = new Date(date);
  let birthdayDay = birthday.getDate();
  let birthdayMonth = birthday.getMonth() + 1;
  let birthdayYear = birthday.getFullYear();
  if (birthdayDay <= 9) {
    birthdayDay = `0${birthdayDay}`;
  }
  if (birthdayMonth <= 9) {
    birthdayMonth = `0${birthdayMonth}`;
  }
  return `${birthdayYear}-${birthdayMonth}-${birthdayDay}`;
}

class Person {
  constructor(firstName, lastName, age, birthdayDate) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.birthdayDate = getBirthday(birthdayDate);
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
  } // не возвращает результат

  celebrate() {
    let currentYear = new Date().getFullYear();
    let currentBirthday = new Date(this.birthdayDate).setFullYear(currentYear);

    // let currentBirthday = new Date(this.birthdayDate);
    // currentBirthday.setFullYear(new Date().getFullYear());

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
  "1989-10-14",
  1000,
  "Painter"
);
console.log(employee);
console.log(employee.celebrate());
console.log(employee.birthdayDate);
