"use strict";
// На странице находится форма: инпут для ввода текста и кнопка.

// Пользователь может ввести что-то в инпут и нажать на кнопку,
// после этого в списке ниже должна отобразится строка, с тем что было введено в инпуте.
// После этого инпут в форме должен очистится

// Добавить в каждую строку кнопку “Delete”, при клике на которую элемент удаляется из списка

// Если пользователь нажимает на кнопку “Add” - а инпут пустой, то выводить ошибку.
// Ошибка должна исчезать - если пользователь снова начал вводить текст в инпут.

const form = document.forms["task-form"];
const { input } = form;
const button = document.querySelector("button");
const list = document.getElementById("list");
const errorInfo = document.createElement("div");

function isEmptyField(field) {
  return field.value.trim().length === 0;
}

function addTask() {
  const task = document.createElement("li");
  task.classList.add("task");
  task.innerHTML = input.value;
  list.append(task);
  input.value = "";

  const btnDelete = document.createElement("button");
  btnDelete.innerHTML = "X";
  task.prepend(btnDelete);
  btnDelete.classList.add("btn-delete");
}

form.onsubmit = (event) => {
  event.preventDefault();
  if (isEmptyField(input)) {
    input.classList.add("error");
    errorInfo.classList.add("error-text");
    errorInfo.innerHTML = "Please enter valid info";
    form.append(errorInfo);
    return;
  }
  addTask();
};

input.oninput = () => {
  const isErrorField = input.classList.contains("error");
  if (isErrorField) {
    input.classList.remove("error");
    errorInfo.classList.remove("error-text");
    errorInfo.innerHTML = "";
  }
};

list.onclick = (event) => {
  if (event.target.className === "btn-delete") {
    event.target.parentNode.remove();
  }
};
