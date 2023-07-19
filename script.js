let container = document.getElementById("father");

let squareSize = 16;

function createDiv() {
  for (i = 0; i < squareSize * squareSize; i++) {
    const content = document.createElement("div");
    content.classList.add("content");
    content.setAttribute("id", "background");
    content.style.width = 320 / squareSize + "px";
    content.style.height = 320 / squareSize + "px";
    container.appendChild(content);
  }
}
createDiv();

const colors = document.getElementById("color");
const size = document.getAnimations("size");
const rainbow = document.getElementById("rainbow");
const clear = document.getElementById("clear");

let color = "blue";

container.addEventListener("mouseover", (event) => {
  const element = event.target;
  element.style.backgroundColor = color;
});

let idAllDiv = document.querySelectorAll("#background");
let arrIdAllDiv = Array.from(idAllDiv);

clear.addEventListener("click", () => {
  arrIdAllDiv.forEach((element) => {
    element.style.backgroundColor = "white";
  });
});
