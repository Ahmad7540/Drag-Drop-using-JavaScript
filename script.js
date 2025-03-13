const lists = document.querySelectorAll(".list");
const left = document.querySelector(".left");
const right = document.querySelector(".right");

for (const list of lists) {
  let selected;
  // Left to right
  list.addEventListener("dragstart", (e) => {
    selected = e.target;
    console.log(selected);
  });
  right.addEventListener("dragover", (e) => {
    e.preventDefault();
  });
  right.addEventListener("drop", (e) => {
    right.appendChild(selected);
    selected = null;
  });
  // right to left
  right.addEventListener("dragstart", (e) => {
    selected = e.target;
  });
  left.addEventListener("dragover", (e) => {
    e.preventDefault();
  });
  left.addEventListener("drop", () => {
    left.appendChild(selected);
    selected = null;
  });
}
