// 1. Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

// Для решения задачи необходим использовать рекурсию.

function sumTo(x) {
    if (x === 1) {
        return 1
    }
 return x + sumTo(x - 1)
}

console.log(sumTo(4)); // 10 1+2+3+4
console.log(sumTo(3)); // 6


