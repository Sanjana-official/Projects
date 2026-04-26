const inputs = document.querySelectorAll(".otp input");
const result = document.getElementById("result");
const verifyBtn = document.getElementById("verify");

// auto focus & move next
inputs.forEach((input, index) => {

  input.addEventListener("input", () => {
    if (input.value.length === 1 && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });

  // backspace to previous
  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace" && input.value === "" && index > 0) {
      inputs[index - 1].focus();
    }
  });

});

// paste full OTP
inputs[0].addEventListener("paste", (e) => {
  const pasteData = e.clipboardData.getData("text").trim();
  if (!/^\d+$/.test(pasteData)) return;

  e.preventDefault();

  pasteData.split("").forEach((char, i) => {
    if (inputs[i]) {
      inputs[i].value = char;
    }
  });

  inputs[Math.min(pasteData.length, inputs.length) - 1].focus();
});

// verify
verifyBtn.addEventListener("click", () => {
  const otp = Array.from(inputs).map(input => input.value).join("");

  if (otp.length < inputs.length) {
    result.innerText = "Enter complete OTP";
    return;
  }

  result.innerText = "Entered OTP: " + otp;
});
