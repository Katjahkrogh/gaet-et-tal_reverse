window.addEventListener("load", klikStart);

let rndNum;
let forsoeg = 0;

function klikStart() {
  document.querySelector("#start").addEventListener("click", start);
}

function start() {
  rndNum = Math.floor(Math.random() * 101);
  document.querySelector("#output").textContent = `Jeg gætter på ${rndNum}?`;
  klikButtons();
}

function klikButtons() {
  forsoeg++;
  document.querySelector("#lav").addEventListener("click", start);
  document.querySelector("#høj").addEventListener("click", start);
  document.querySelector("#korrekt").addEventListener("click", korrektGaet);
}

function korrektGaet() {
  document.querySelector(
    "#output"
  ).textContent = `Juhu! Jeg gættede tallet på ${forsoeg} forsøg!`;
}
