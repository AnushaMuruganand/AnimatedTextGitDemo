const h1 = document.querySelector("h1");
const spans = document.querySelectorAll(".letter");

function randomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

setInterval(function () {
  for (let span of spans) {
    span.style.color = randomRGB();
  }
}, 1000);