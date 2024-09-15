const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", onInput);

function onInput(event) {
  const value = event.currentTarget.value.trim();
  nameOutput.textContent = value;
  if (value === "") {
    nameOutput.textContent = "Anonymous";
  }
}
