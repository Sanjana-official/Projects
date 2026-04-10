const passwordEl = document.getElementById("password");
const lengthEl = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");

const uppercaseEl = document.getElementById("uppercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");

const generateBtn = document.getElementById("generate");
const copyBtn = document.getElementById("copy");

/* CHARACTER SETS */

const lower = "abcdefghijklmnopqrstuvwxyz";
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=";


/* UPDATE LENGTH DISPLAY */

lengthEl.addEventListener("input", () => {
    lengthValue.textContent = lengthEl.value;
});


/* GENERATE PASSWORD */

generateBtn.addEventListener("click", () => {

    let chars = lower;

    if(uppercaseEl.checked) chars += upper;
    if(numbersEl.checked) chars += numbers;
    if(symbolsEl.checked) chars += symbols;

    let password = "";

    for(let i = 0; i < lengthEl.value; i++){
        password += chars[Math.floor(Math.random() * chars.length)];
    }

    passwordEl.value = password;
});


/* COPY TO CLIPBOARD */

copyBtn.addEventListener("click", () => {

    navigator.clipboard.writeText(passwordEl.value);

    copyBtn.textContent = "Copied!";
    setTimeout(() => copyBtn.textContent = "Copy", 1000);
});
