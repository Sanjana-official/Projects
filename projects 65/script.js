const tl = document.getElementById("tl");
const tr = document.getElementById("tr");
const br = document.getElementById("br");
const bl = document.getElementById("bl");

const box = document.getElementById("box");
const output = document.getElementById("output");
const copyBtn = document.getElementById("copy");

function updateRadius() {
  const radius = `${tl.value}px ${tr.value}px ${br.value}px ${bl.value}px`;

  box.style.borderRadius = radius;
  output.value = `border-radius: ${radius};`;
}

// listen changes
[tl, tr, br, bl].forEach(input => {
  input.addEventListener("input", updateRadius);
});

// copy
copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(output.value);
  copyBtn.innerText = "Copied!";
  setTimeout(() => copyBtn.innerText = "Copy CSS", 1000);
});

// init
updateRadius();
