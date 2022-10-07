"use strict"


  let getCompanyUser = async() => {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        let data = await response.json();
        let users = data.find((user => user.company.name === "Johns Group"));
        console.log(users)
    } catch (error) {
        console.log(error)
    }
  }