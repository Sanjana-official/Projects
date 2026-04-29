const x = document.getElementById("x");
const y = document.getElementById("y");
const blur = document.getElementById("blur");
const spread = document.getElementById("spread");
const color = document.getElementById("color");

const box = document.getElementById("box");
const output = document.getElementById("output");
const copyBtn = document.getElementById("copy");

function updateShadow() {
  const shadow = `${x.value}px ${y.value}px ${blur.value}px ${spread.value}px ${color.value}`;
  
  box.style.boxShadow = shadow;
  output.value = `box-shadow: ${shadow};`;
}

// update on change
[x, y, blur, spread, color].forEach(input => {
  input.addEventListener("input", updateShadow);
});

// copy
copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(output.value);
  copyBtn.innerText = "Copied!";
  setTimeout(() => copyBtn.innerText = "Copy CSS", 1000);
});

// init
updateShadow();
