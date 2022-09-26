// 1. Переписать функцию sumTwoSmallestNumbers (из практического занятия).
// Данная функция должна принимать неограниченное кол-во аргументов и
// возвращать сумму двух наименьших чисел для заданного массива.
// Если передано меньше 2х аргументов - то должна вывестись ошибка
// (в консоль) и функция не должна продолжать выполнение.

function sumTwoSmallestNumbers(...numbers) {
  if (numbers.length < 2) {
    return console.error("Enter 2 or more numbers");
  } const sortedNumbers = numbers.sort((a, b) => a - b);
    return sortedNumbers[0] + sortedNumbers[1];
}

// ternary operator
function sumTwoSmallestNumbers(...numbers) {
  if (numbers.length < 2) {
    return console.error("Enter 2 or more numbers");
  } const sortedNumbers = numbers.sort((a, b) => a - b);
  return sortedNumbers[0] + sortedNumbers[1];
}

console.log(sumTwoSmallestNumbers(19, 5, 42, 2, 77)); // 7
console.log(sumTwoSmallestNumbers(1, 3, 2)); // 3
console.log(sumTwoSmallestNumbers(1)); // undefined и отдельный console.error("...")

// 2. Написать функцию createCalculator

function createCalculator(value) {
  let initialValue = value;
  return {
    sum: (defaultValue) => (initialValue += defaultValue),
    sub: (defaultValue) => (initialValue -= defaultValue),
    mult: (defaultValue) => (initialValue *= defaultValue),
    div: (defaultValue) => (initialValue /= defaultValue),
  };
}

const calc = createCalculator(10);

console.log(calc.sum(5)); /// 15
console.log(calc.mult(10)); // 150
console.log(calc.sub(40)); // 110
console.log(calc.div(10)); // 11
