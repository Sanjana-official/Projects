const habitInput =
  document.getElementById("habitInput");

const addHabitBtn =
  document.getElementById("addHabitBtn");

const habitList =
  document.getElementById("habitList");

// LOAD SAVED HABITS
document.addEventListener(
  "DOMContentLoaded",
  loadHabits
);

// ADD HABIT
addHabitBtn.addEventListener("click", () => {

  const habitText = habitInput.value.trim();

  if(habitText === "") return;

  const habit = {
    id: Date.now(),
    text: habitText,
    streak: 0
  };

  createHabitElement(habit);

  saveHabit(habit);

  habitInput.value = "";

});

// CREATE HABIT ELEMENT
function createHabitElement(habit){

  const habitDiv =
    document.createElement("div");

  habitDiv.classList.add("habit");

  habitDiv.dataset.id = habit.id;

  habitDiv.innerHTML = `
  
    <div class="habit-info">
      <h3>${habit.text}</h3>

      <p class="streak">
        🔥 Streak: ${habit.streak} days
      </p>
    </div>

    <div class="habit-actions">

      <button class="check-btn">
        +1 Day
      </button>

      <button class="delete-btn">
        Delete
      </button>

    </div>

  `;

  // INCREASE STREAK
  habitDiv.querySelector(".check-btn")
  .addEventListener("click", () => {

    habit.streak++;

    habitDiv.querySelector(".streak")
    .innerText =
      `🔥 Streak: ${habit.streak} days`;

    updateHabits();

  });

  // DELETE HABIT
  habitDiv.querySelector(".delete-btn")
  .addEventListener("click", () => {

    habitDiv.remove();

    updateHabits();

  });

  habitList.appendChild(habitDiv);

}

// SAVE NEW HABIT
function saveHabit(habit){

  const habits =
    JSON.parse(
      localStorage.getItem("habits")
    ) || [];

  habits.push(habit);

  localStorage.setItem(
    "habits",
    JSON.stringify(habits)
  );

}

// UPDATE HABITS
function updateHabits(){

  const habits = [];

  document.querySelectorAll(".habit")
  .forEach(habitEl => {

    habits.push({

      id: habitEl.dataset.id,

      text:
        habitEl.querySelector("h3").innerText,

      streak: parseInt(
        habitEl.querySelector(".streak")
        .innerText.match(/\d+/)[0]
      )

    });

  });

  localStorage.setItem(
    "habits",
    JSON.stringify(habits)
  );

}

// LOAD HABITS
function loadHabits(){

  const habits =
    JSON.parse(
      localStorage.getItem("habits")
    ) || [];

  habits.forEach(habit => {
    createHabitElement(habit);
  });

}