function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxes = [];
  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.style.backgroundColor = getRandomHexColor();
    div.style.width = `${30 + 10 * i}px`;
    div.style.height = `${30 + 10 * i}px`;
    boxes.push(div);
  }
  return boxes;
}

function destroyBoxes() {
  div.innerHTML = "";
}

const numberInput = document.querySelector(".number-input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const div = document.querySelector("#boxes");

createBtn.addEventListener("click", () => {
  const amount = numberInput.value;
  if (amount < 1 || amount > 100) {
    alert("Please enter a number from 1 to 100");
    return;
  }
  destroyBoxes();
  const boxes = createBoxes(amount);
  div.append(...boxes);
  numberInput.value = "";
});

destroyBtn.addEventListener("click", destroyBoxes);
