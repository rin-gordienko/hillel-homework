// let getAlbums = async () => {
//   try {
//     let response = await fetch("https://jsonplaceholder.typicode.com/albums");
//     let albums = await response.json();
//     for (let album of albums) {
//       let list = document.createElement("li");
//       list.innerHTML = album.title;
//       list.classList.add("album_title");
//       document.getElementById("albums").append(list);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };
// getAlbums();



fetch("https://jsonplaceholder.typicode.com/albums")
  .then((response) => response.json())
  .then((albums) => {
    for (let album of albums) {
      let list = document.createElement("li");
      list.innerHTML = album.title;
      list.classList.add("album_title");
      document.getElementById("albums").append(list);
    }
  })

  .catch((error) => console.log(error));
