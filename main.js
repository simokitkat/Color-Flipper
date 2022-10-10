let btn = document.getElementsByTagName("button")[0];
let span = document.getElementsByTagName("span")[0];
const colors = ["a", "b", "c", "d", "e", "f", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function randomNumber() {
  return Math.floor(Math.random() * colors.length);
}
btn.addEventListener("click", function () {
  let mainColor = "#";
  for (let i = 0; i < 6; i++) {
    mainColor += colors[randomNumber()];
  }
  span.textContent = mainColor;
  document.body.style.backgroundColor = mainColor;
});
