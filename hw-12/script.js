
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
