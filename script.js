let container = document.getElementById("father");

let squareSize = 16;

function createDiv() {
  for (i = 0; i < squareSize * squareSize; i++) {
    const content = document.createElement("div");
    content.classList.add("content");
    content.style.width = 320 / squareSize + "px";
    content.style.height = 320 / squareSize + "px";
    container.appendChild(content);
  }
}
createDiv();

let color = "blue";

container.addEventListener("mouseover", (event) => {
  const element = event.target;
  element.style.backgroundColor = color;
});
