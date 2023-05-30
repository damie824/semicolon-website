
const images = ["img1.jpg", "img2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

let main = document.querySelector("body");

main.style.backgroundImage = `url("./img/${chosenImage}")`