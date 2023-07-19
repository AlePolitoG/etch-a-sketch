let container = document.getElementById("father");
const colors = document.getElementById("input-color");
const size = document.getElementById("size");
const apply = document.getElementById("apply");
const clear = document.getElementById("clear");

function createDiv() {
  let squareSize = size.value;
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

container.addEventListener("mouseover", (event) => {
  const element = event.target;
  let color = colors.value;
  element.style.backgroundColor = color;
});

clear.addEventListener("click", () => {
  let idAllDiv = document.querySelectorAll("#background");
  let arrIdAllDiv = Array.from(idAllDiv);

  arrIdAllDiv.forEach((element) => {
    container.removeChild(container.lastChild);
  });
  createDiv();
});

// function apply_changes() {
//   arrIdAllDiv.forEach((element) => {
//     container.removeChild(container.lastChild);
//   });
// }

apply.addEventListener("click", () => {
  let idAllDiv = document.querySelectorAll("#background");
  let arrIdAllDiv = Array.from(idAllDiv);
  arrIdAllDiv.forEach((element) => {
    container.removeChild(container.lastChild);
  });
  createDiv();
});
