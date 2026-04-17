const palette = document.getElementById("palette");
const generateBtn = document.getElementById("generate");

// generate random color
function randomColor() {
  return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, "0");
}

// create palette
function generatePalette() {
  palette.innerHTML = "";

  for (let i = 0; i < 5; i++) {
    const color = randomColor();

    const box = document.createElement("div");
    box.classList.add("color-box");
    box.style.background = color;

    const code = document.createElement("div");
    code.classList.add("color-code");
    code.innerText = color;

    // copy on click
    box.addEventListener("click", () => {
      navigator.clipboard.writeText(color);
      code.innerText = "Copied!";
      setTimeout(() => code.innerText = color, 1000);
    });

    box.appendChild(code);
    palette.appendChild(box);
  }
}

// button click
generateBtn.addEventListener("click", generatePalette);

// generate on load
generatePalette();
