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

const moon = document.getElementsByClassName("moon")[0];
const behindCloud = document.getElementsByClassName("behindCloud");
const darkCloud = document.getElementsByClassName("darkCloud");
const fda = document.getElementsByClassName("fda")[0];
const innerCircle = document.getElementsByClassName("innerCircle")[0];
const quote = document.getElementsByClassName("quote")[0];
const button = document.querySelector("button");
const buttonSlit = document.getElementsByClassName("buttonSlit")[0];
const divImg = document.getElementsByClassName("divImg")[0];
const header = document.querySelector("header");
const body = document.querySelector("body");
const toggle = document.getElementById("toggle");
toggle.onclick = function () {
  toggle.classList.toggle("active");
  body.classList.toggle("active");
  header.classList.toggle("active");
  divImg.classList.toggle("active");
  button.classList.toggle("active");
  buttonSlit.classList.toggle("active");
  quote.classList.toggle("active");
  innerCircle.classList.toggle("active");
  fda.classList.toggle("active");
  moon.classList.toggle("active");

  for (var i = 0; i < darkCloud.length; i++) {
    darkCloud[i].classList.toggle("active");
  }
  for (var i = 0; i < behindCloud.length; i++) {
    behindCloud[i].classList.toggle("active");
  }
};
