const urlInput = document.getElementById("urlInput");

const shortenBtn = document.getElementById("shortenBtn");

const resultBox = document.getElementById("resultBox");

const longUrl = document.getElementById("longUrl");

const shortUrl = document.getElementById("shortUrl");

const copyBtn = document.getElementById("copyBtn");

// SHORTEN BUTTON
shortenBtn.addEventListener("click", () => {

  const url = urlInput.value.trim();

  // VALIDATION
  if(url === ""){
    alert("Please enter a URL");
    return;
  }

  // RANDOM SHORT CODE
  const shortCode =
    Math.random().toString(36).substring(2,8);

  const generatedUrl =
    `https://short.ly/${shortCode}`;

  // SHOW RESULT
  resultBox.classList.remove("hidden");

  longUrl.innerText = url;

  shortUrl.innerText = generatedUrl;

  shortUrl.href = url;

});

// COPY BUTTON
copyBtn.addEventListener("click", () => {

  navigator.clipboard.writeText(shortUrl.innerText);

  copyBtn.innerText = "Copied!";

  setTimeout(() => {
    copyBtn.innerText = "Copy";
  }, 2000);

});