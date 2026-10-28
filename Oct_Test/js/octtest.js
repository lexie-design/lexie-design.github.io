const modeButton = document.querySelector(".modeButton");
const body = document.body;

modeButton.addEventListener("click", function () {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    modeButton.textContent = "Switch to light mode";
  } else {
    modeButton.textContent = "Switch to dark mode";
  }
});