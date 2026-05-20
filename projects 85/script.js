const titleInput =
  document.getElementById("titleInput");

const journalInput =
  document.getElementById("journalInput");

const saveBtn =
  document.getElementById("saveBtn");

const entriesList =
  document.getElementById("entriesList");

// LOAD SAVED ENTRIES
document.addEventListener(
  "DOMContentLoaded",
  loadEntries
);

// SAVE ENTRY
saveBtn.addEventListener("click", () => {

  const title = titleInput.value.trim();
  const text = journalInput.value.trim();

  if(title === "" || text === ""){
    alert("Please fill all fields.");
    return;
  }

  const entry = {
    id: Date.now(),
    title,
    text,
    date: new Date().toLocaleString()
  };

  createEntry(entry);

  saveEntry(entry);

  // CLEAR INPUTS
  titleInput.value = "";
  journalInput.value = "";

});

// CREATE ENTRY ELEMENT
function createEntry(entry){

  const div = document.createElement("div");

  div.classList.add("entry");

  div.dataset.id = entry.id;

  div.innerHTML = `
  
    <div class="entry-top">

      <div>
        <h3 class="entry-title">
          ${entry.title}
        </h3>

        <p class="entry-date">
          ${entry.date}
        </p>
      </div>

    </div>

    <p class="entry-text">
      ${entry.text}
    </p>

    <button class="delete-btn">
      Delete
    </button>

  `;

  // DELETE ENTRY
  div.querySelector(".delete-btn")
  .addEventListener("click", () => {

    div.remove();

    updateEntries();

  });

  entriesList.prepend(div);

}

// SAVE TO LOCAL STORAGE
function saveEntry(entry){

  const entries =
    JSON.parse(
      localStorage.getItem("journalEntries")
    ) || [];

  entries.unshift(entry);

  localStorage.setItem(
    "journalEntries",
    JSON.stringify(entries)
  );

}

// UPDATE STORAGE
function updateEntries(){

  const entries = [];

  document.querySelectorAll(".entry")
  .forEach(entryEl => {

    entries.push({

      id: entryEl.dataset.id,

      title:
        entryEl.querySelector(".entry-title")
        .innerText,

      text:
        entryEl.querySelector(".entry-text")
        .innerText,

      date:
        entryEl.querySelector(".entry-date")
        .innerText

    });

  });

  localStorage.setItem(
    "journalEntries",
    JSON.stringify(entries)
  );

}

// LOAD ENTRIES
function loadEntries(){

  const entries =
    JSON.parse(
      localStorage.getItem("journalEntries")
    ) || [];

  entries.forEach(entry => {
    createEntry(entry);
  });

}