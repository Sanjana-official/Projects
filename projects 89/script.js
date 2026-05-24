const itemInput =
  document.getElementById("itemInput");

const addBtn =
  document.getElementById("addBtn");

const groceryList =
  document.getElementById("groceryList");

const clearBtn =
  document.getElementById("clearBtn");

const totalItems =
  document.getElementById("totalItems");

// LOAD SAVED ITEMS
document.addEventListener(
  "DOMContentLoaded",
  loadItems
);

// ADD ITEM
addBtn.addEventListener("click", () => {

  const itemText =
    itemInput.value.trim();

  if(itemText === "") return;

  const item = {
    id: Date.now(),
    text: itemText,
    completed: false
  };

  createItem(item);

  saveItem(item);

  itemInput.value = "";

});

// CREATE ITEM
function createItem(item){

  const li =
    document.createElement("li");

  li.classList.add("item");

  if(item.completed){
    li.classList.add("completed");
  }

  li.dataset.id = item.id;

  li.innerHTML = `
  
    <div class="item-left">

      <input
        type="checkbox"
        class="checkbox"
        ${item.completed ? "checked" : ""}
      >

      <span>${item.text}</span>

    </div>

    <button class="delete-btn">
      Delete
    </button>

  `;

  // CHECK ITEM
  li.querySelector(".checkbox")
  .addEventListener("change", () => {

    li.classList.toggle("completed");

    updateStorage();

  });

  // DELETE ITEM
  li.querySelector(".delete-btn")
  .addEventListener("click", () => {

    li.remove();

    updateStorage();

  });

  groceryList.appendChild(li);

  updateCount();

}

// SAVE ITEM
function saveItem(item){

  const items =
    JSON.parse(
      localStorage.getItem("groceryItems")
    ) || [];

  items.push(item);

  localStorage.setItem(
    "groceryItems",
    JSON.stringify(items)
  );

}

// UPDATE STORAGE
function updateStorage(){

  const items = [];

  document.querySelectorAll(".item")
  .forEach(itemEl => {

    items.push({

      id: itemEl.dataset.id,

      text:
        itemEl.querySelector("span")
        .innerText,

      completed:
        itemEl.querySelector(".checkbox")
        .checked

    });

  });

  localStorage.setItem(
    "groceryItems",
    JSON.stringify(items)
  );

  updateCount();

}

// LOAD ITEMS
function loadItems(){

  const items =
    JSON.parse(
      localStorage.getItem("groceryItems")
    ) || [];

  items.forEach(item => {
    createItem(item);
  });

}

// CLEAR ALL
clearBtn.addEventListener("click", () => {

  groceryList.innerHTML = "";

  localStorage.removeItem("groceryItems");

  updateCount();

});

// UPDATE COUNT
function updateCount(){

  const count =
    document.querySelectorAll(".item").length;

  totalItems.innerText =
    `Total Items: ${count}`;

}