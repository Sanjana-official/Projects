const taskInput =
  document.getElementById("taskInput");

const daySelect =
  document.getElementById("daySelect");

const timeInput =
  document.getElementById("timeInput");

const addBtn =
  document.getElementById("addBtn");

const tableBody =
  document.getElementById("tableBody");

// LOAD SAVED TASKS
document.addEventListener(
  "DOMContentLoaded",
  loadTasks
);

// ADD TASK
addBtn.addEventListener("click", () => {

  const task = taskInput.value.trim();
  const day = daySelect.value;
  const time = timeInput.value;

  if(task === "" || time === ""){
    alert("Please fill all fields.");
    return;
  }

  const timetableTask = {
    id: Date.now(),
    task,
    day,
    time
  };

  createTaskRow(timetableTask);

  saveTask(timetableTask);

  // CLEAR INPUTS
  taskInput.value = "";
  timeInput.value = "";

});

// CREATE TABLE ROW
function createTaskRow(item){

  const row =
    document.createElement("tr");

  row.dataset.id = item.id;

  row.innerHTML = `
  
    <td>${item.day}</td>

    <td>${item.time}</td>

    <td>${item.task}</td>

    <td>
      <button class="delete-btn">
        Delete
      </button>
    </td>

  `;

  // DELETE TASK
  row.querySelector(".delete-btn")
  .addEventListener("click", () => {

    row.remove();

    updateTasks();

  });

  tableBody.appendChild(row);

}

// SAVE TASK
function saveTask(task){

  const tasks =
    JSON.parse(
      localStorage.getItem("weeklyTasks")
    ) || [];

  tasks.push(task);

  localStorage.setItem(
    "weeklyTasks",
    JSON.stringify(tasks)
  );

}

// UPDATE STORAGE
function updateTasks(){

  const tasks = [];

  document.querySelectorAll("tbody tr")
  .forEach(row => {

    tasks.push({

      id: row.dataset.id,

      day: row.children[0].innerText,
      time: row.children[1].innerText,
      task: row.children[2].innerText

    });

  });

  localStorage.setItem(
    "weeklyTasks",
    JSON.stringify(tasks)
  );

}

// LOAD TASKS
function loadTasks(){

  const tasks =
    JSON.parse(
      localStorage.getItem("weeklyTasks")
    ) || [];

  tasks.forEach(task => {
    createTaskRow(task);
  });

}