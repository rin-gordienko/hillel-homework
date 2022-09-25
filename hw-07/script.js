// 1. Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
// Для решения задачи необходим использовать рекурсию.

function sumTo(x) {
  if (x === 1) {
    return 1;
  }
  return x + sumTo(x - 1);
}

console.log(sumTo(4)); // 10 1+2+3+4
console.log(sumTo(3)); // 6

// 2. Написать функцию findShort , которая будет находит самое короткое слово в предложении.
// В случае если длина двух слов совпадает - вернуть первое найденое короткое слово.

function findShort(string) {
  let array = string.split(" ").sort((a, b) => a.length - b.length);
  return array[0];
}

function findShort(string) {
  return array = string.split(" ").reduce((a, b) => (b.length < a.length ? b : a));
}

let sentence = "Lorem ipsum dolor sit amet";

console.log(findShort(sentence)); // sit
console.log(findShort("Hello world")); // Hello
console.log(findShort("Hi")); // Hi
console.log(findShort("She is David's sister")); // is
