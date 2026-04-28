const input = document.getElementById("card");
const typeText = document.getElementById("type");

input.addEventListener("input", () => {
  let value = input.value.replace(/\D/g, ""); // only digits

  // format: 1234 5678 9012 3456
  value = value.substring(0, 16); // limit
  let formatted = value.replace(/(.{4})/g, "$1 ").trim();

  input.value = formatted;

  detectType(value);
});

// detect card type
function detectType(num) {
  if (/^4/.test(num)) {
    typeText.innerText = "Visa";
  } else if (/^5[1-5]/.test(num)) {
    typeText.innerText = "MasterCard";
  } else if (/^3[47]/.test(num)) {
    typeText.innerText = "American Express";
  } else if (num.length === 0) {
    typeText.innerText = "";
  } else {
    typeText.innerText = "Unknown Card";
  }
}
