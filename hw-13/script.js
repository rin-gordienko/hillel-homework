"use strict";

let getCompanyUser = async () => {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    let user = data.find(({company: {name}}) => name === "Johns Group");
    console.log(user);
  } catch (error) {
    console.log(error);
  }
};


// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((data) => {
//     let user = data.find(({company: {name}}) => name === "Johns Group");
//     console.log(user);
//   })

//   .catch((error) => console.log(error)); 