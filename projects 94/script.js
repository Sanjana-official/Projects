const titleInput =
  document.getElementById("titleInput");

const amountInput =
  document.getElementById("amountInput");

const typeInput =
  document.getElementById("typeInput");

const addBtn =
  document.getElementById("addBtn");

const transactionList =
  document.getElementById("transactionList");

const balanceEl =
  document.getElementById("balance");

const incomeEl =
  document.getElementById("incomeAmount");

const expenseEl =
  document.getElementById("expenseAmount");

// LOAD DATA
document.addEventListener(
  "DOMContentLoaded",
  loadTransactions
);

// ADD TRANSACTION
addBtn.addEventListener("click", () => {

  const title =
    titleInput.value.trim();

  const amount =
    Number(amountInput.value);

  const type =
    typeInput.value;

  if(title === "" || amount <= 0){
    alert("Enter valid details.");
    return;
  }

  const transaction = {
    id: Date.now(),
    title,
    amount,
    type
  };

  createTransaction(transaction);

  saveTransaction(transaction);

  updateSummary();

  // CLEAR INPUTS
  titleInput.value = "";
  amountInput.value = "";

});

// CREATE ITEM
function createTransaction(item){

  const li =
    document.createElement("li");

  li.classList.add(
    "transaction",
    item.type === "income"
    ? "income-item"
    : "expense-item"
  );

  li.dataset.id = item.id;

  li.innerHTML = `
  
    <div class="transaction-info">

      <strong>${item.title}</strong>

      <span>
        ${item.type.toUpperCase()}
      </span>

    </div>

    <div>

      ₹${item.amount}

      <button class="delete-btn">
        Delete
      </button>

    </div>

  `;

  // DELETE
  li.querySelector(".delete-btn")
  .addEventListener("click", () => {

    li.remove();

    updateStorage();

    updateSummary();

  });

  transactionList.prepend(li);

}

// SAVE
function saveTransaction(transaction){

  const transactions =
    JSON.parse(
      localStorage.getItem("transactions")
    ) || [];

  transactions.push(transaction);

  localStorage.setItem(
    "transactions",
    JSON.stringify(transactions)
  );

}

// UPDATE STORAGE
function updateStorage(){

  const transactions = [];

  document.querySelectorAll(".transaction")
  .forEach(item => {

    transactions.push({

      id: item.dataset.id,

      title:
        item.querySelector("strong")
        .innerText,

      type:
        item.querySelector("span")
        .innerText.toLowerCase(),

      amount:
        Number(
          item.innerText.match(/\d+/)[0]
        )

    });

  });

  localStorage.setItem(
    "transactions",
    JSON.stringify(transactions)
  );

}

// LOAD
function loadTransactions(){

  const transactions =
    JSON.parse(
      localStorage.getItem("transactions")
    ) || [];

  transactions.forEach(transaction => {
    createTransaction(transaction);
  });

  updateSummary();

}

// UPDATE SUMMARY
function updateSummary(){

  const transactions =
    JSON.parse(
      localStorage.getItem("transactions")
    ) || [];

  let income = 0;
  let expense = 0;

  transactions.forEach(item => {

    if(item.type === "income"){
      income += item.amount;
    }

    else{
      expense += item.amount;
    }

  });

  incomeEl.innerText =
    `₹${income}`;

  expenseEl.innerText =
    `₹${expense}`;

  balanceEl.innerText =
    `₹${income - expense}`;

}