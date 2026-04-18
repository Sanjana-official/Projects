const balance = document.getElementById("balance");
const incomeEl = document.getElementById("income");
const expenseEl = document.getElementById("expense");
const list = document.getElementById("list");
const form = document.getElementById("form");
const text = document.getElementById("text");
const amount = document.getElementById("amount");

let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

// add transaction
function addTransaction(e) {
  e.preventDefault();

  const transaction = {
    id: Date.now(),
    text: text.value,
    amount: +amount.value
  };

  transactions.push(transaction);
  updateLocalStorage();
  init();

  text.value = "";
  amount.value = "";
}

form.addEventListener("submit", addTransaction);

// render transactions
function init() {
  list.innerHTML = "";

  transactions.forEach(addToDOM);
  updateValues();
}

// add to DOM
function addToDOM(transaction) {
  const li = document.createElement("li");
  li.classList.add(transaction.amount > 0 ? "plus" : "minus");

  li.innerHTML = `
    ${transaction.text} 
    <span>₹${transaction.amount}</span>
    <button class="delete-btn" onclick="removeTransaction(${transaction.id})">x</button>
  `;

  list.appendChild(li);
}

// update balance
function updateValues() {
  const amounts = transactions.map(t => t.amount);

  const total = amounts.reduce((acc, val) => acc + val, 0);
  const income = amounts.filter(a => a > 0).reduce((acc, val) => acc + val, 0);
  const expense = amounts.filter(a => a < 0).reduce((acc, val) => acc + val, 0);

  balance.innerText = `₹${total}`;
  incomeEl.innerText = `₹${income}`;
  expenseEl.innerText = `₹${Math.abs(expense)}`;
}

// delete transaction
function removeTransaction(id) {
  transactions = transactions.filter(t => t.id !== id);
  updateLocalStorage();
  init();
}

// save to localStorage
function updateLocalStorage() {
  localStorage.setItem("transactions", JSON.stringify(transactions));
}

// init
init();
