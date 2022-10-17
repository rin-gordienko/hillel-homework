"use strict";

const albumsFolder = document.getElementById("albums");

albumsFolder.onclick = (event) => {
  if (event.target.className === "remove-btn") {
    event.target.closest(".album_title").remove();
  }
};

fetch("https://jsonplaceholder.typicode.com/albums")
  .then((response) => response.json())
  .then((albums) => {
    for (let album of albums) {
      let albumItem = document.createElement("li");
      albumItem.innerHTML = album.title;
      albumItem.classList.add("album_title");
      albumsFolder.append(albumItem);

      let removeBtn = document.createElement("button");
      removeBtn.innerHTML = "x";
      removeBtn.classList.add("remove-btn");
      albumItem.append(removeBtn);
    }
  })
  .catch((error) => console.log(error));
