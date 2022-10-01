// Создать новый Promise, который будет длится 5 секунд (используем setTimeout) и
// выполнять следующие действия:

// при успешном завершение (fulfilled) - должен вывести фразу "done"
// при ошибке (rejected) - вывести текст ошибки в консоль
// при любом результате вывести текст - "Promise was finished!"

// Обработку промиса необходима написать 2-мя способами:

// .then / .catch
// async / await + try...catch

let promise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("done"), 5000);
});

// let promise = new Promise(function (resolve, reject) {
//   setTimeout(() => reject("fail"), 5000);
// });

// let promise = new Promise(function (resolve, reject) {
//   setTimeout(() => reject(new Error("Fail")), 5000);
// });

// ---------------------------------------

promise
  .then((result) => console.log(result))
  .catch((error) => console.error(error))
  .finally(() => console.log("The promise was finished"));

// ---------------------------------------

async function doOtherOption() {
  try {
    let result = await promise;
    console.log(result);
  } catch (error) {
    console.error("Sth is wrong");
    // throw new Error("You failed this task"); ----можно ли здесь throw ?
  } finally {
    console.log("The promise was finished");
  }
}

doOtherOption();
