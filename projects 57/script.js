const passwordInput = document.getElementById("password");
const strengthBar = document.getElementById("strength");
const message = document.getElementById("message");

passwordInput.addEventListener("input", () => {
  const value = passwordInput.value;
  let strength = 0;

  if (value.length >= 6) strength++;
  if (value.match(/[A-Z]/)) strength++;
  if (value.match(/[0-9]/)) strength++;
  if (value.match(/[^A-Za-z0-9]/)) strength++;

  updateUI(strength);
});

function updateUI(strength) {
  let width = 0;
  let text = "";
  let color = "";

  switch (strength) {
    case 0:
      width = 0;
      text = "";
      break;
    case 1:
      width = 25;
      text = "Weak";
      color = "red";
      break;
    case 2:
      width = 50;
      text = "Medium";
      color = "orange";
      break;
    case 3:
      width = 75;
      text = "Strong";
      color = "yellowgreen";
      break;
    case 4:
      width = 100;
      text = "Very Strong";
      color = "green";
      break;
  }

  strengthBar.style.width = width + "%";
  strengthBar.style.background = color;
  message.innerText = "Strength: " + text;
}
