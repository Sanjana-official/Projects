const amountInput = document.getElementById("amount");
const fromSelect = document.getElementById("from");
const toSelect = document.getElementById("to");
const resultEl = document.getElementById("result");
const btn = document.getElementById("convert");

// API (free, no key needed)
const API_URL = "https://api.exchangerate-api.com/v4/latest/USD";

// load currencies
async function loadCurrencies() {
  const res = await fetch(API_URL);
  const data = await res.json();

  const currencies = Object.keys(data.rates);

  currencies.forEach(currency => {
    fromSelect.innerHTML += `<option value="${currency}">${currency}</option>`;
    toSelect.innerHTML += `<option value="${currency}">${currency}</option>`;
  });

  fromSelect.value = "USD";
  toSelect.value = "INR";
}

loadCurrencies();

// convert
btn.addEventListener("click", async () => {
  const amount = amountInput.value;
  const from = fromSelect.value;
  const to = toSelect.value;

  if (!amount) return;

  const res = await fetch(`https://api.exchangerate-api.com/v4/latest/${from}`);
  const data = await res.json();

  const rate = data.rates[to];
  const result = amount * rate;

  resultEl.innerText = `Result: ${result.toFixed(2)} ${to}`;
});
