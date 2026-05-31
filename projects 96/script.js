const tableBody =
  document.getElementById("tableBody");

const saveBtn =
  document.getElementById("saveBtn");

const clearBtn =
  document.getElementById("clearBtn");

const status =
  document.getElementById("status");

const rows = 15;
const cols = 5;

// CREATE GRID
function createSheet(){

  for(let r = 1; r <= rows; r++){

    const tr =
      document.createElement("tr");

    const rowNumber =
      document.createElement("td");

    rowNumber.classList.add("row-number");
    rowNumber.textContent = r;

    tr.appendChild(rowNumber);

    for(let c = 0; c < cols; c++){

      const td =
        document.createElement("td");

      const input =
        document.createElement("input");

      input.dataset.cell =
        `${String.fromCharCode(65+c)}${r}`;

      td.appendChild(input);

      tr.appendChild(td);

    }

    tableBody.appendChild(tr);

  }

}

createSheet();

// SAVE
saveBtn.addEventListener("click", () => {

  const data = {};

  document
  .querySelectorAll("input")
  .forEach(input => {

    data[input.dataset.cell] =
      input.value;

  });

  localStorage.setItem(
    "spreadsheetData",
    JSON.stringify(data)
  );

  status.textContent =
    "✅ Saved";

});

// LOAD
window.addEventListener(
  "DOMContentLoaded",
  () => {

    const data =
      JSON.parse(
        localStorage.getItem("spreadsheetData")
      );

    if(!data) return;

    document
    .querySelectorAll("input")
    .forEach(input => {

      input.value =
        data[input.dataset.cell] || "";

    });

  }
);

// CLEAR
clearBtn.addEventListener("click", () => {

  document
  .querySelectorAll("input")
  .forEach(input => {

    input.value = "";

  });

  localStorage.removeItem(
    "spreadsheetData"
  );

  status.textContent =
    "🗑 Cleared";

});