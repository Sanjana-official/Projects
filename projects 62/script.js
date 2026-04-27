const input = document.getElementById("text");
const btn = document.getElementById("generate");
const qrImg = document.getElementById("qr-img");

btn.addEventListener("click", () => {
  const value = input.value.trim();

  if (!value) return;

  // using free API
  const url = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(value)}`;

  qrImg.src = url;
  qrImg.style.display = "block";
});
