//retrieve data from GIPHY API
let image = document.querySelector("#img");

fetch(
  "https://api.giphy.com/v1/gifs/random?api_key=FBRudNFwSpiLbHJDhhXO1rPbRqpltIEV&tag=cute-dogs&rating=g"
)
  .then((res) => {
    res.json().then((data) => {
      image.src = data.data.embed_url;
    });
  })
  .catch();

//EVENT LISTENERS

//Button click causes fetch//
document.getElementById("gifChanger").addEventListener("click", function () {
  fetch(
    "https://api.giphy.com/v1/gifs/random?api_key=FBRudNFwSpiLbHJDhhXO1rPbRqpltIEV&tag=cute-dogs&rating=g"
  )
    .then((res) => {
      res.json().then((data) => {
        image.src = data.data.embed_url;
      });
    })
    .catch();
});
