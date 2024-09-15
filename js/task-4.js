const form = document.querySelector(".login-form");
form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("All form fields must be filled in");
  } else {
    const formData = {
      email: email.value.trim(),
      // I don't trim password value, because password can contain spaces in purpose
      password: password.value,
    };
    console.log(formData);
    event.currentTarget.reset();
  }
}
