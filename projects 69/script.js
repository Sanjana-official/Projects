const monthYear = document.getElementById("monthYear");
const datesEl = document.getElementById("dates");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let currentDate = new Date();

// render calendar
function renderCalendar() {
  datesEl.innerHTML = "";

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();

  // month title
  monthYear.innerText = currentDate.toLocaleString("default", {
    month: "long",
    year: "numeric"
  });

  // empty slots before start
  for (let i = 0; i < firstDay; i++) {
    const empty = document.createElement("div");
    datesEl.appendChild(empty);
  }

  // dates
  const today = new Date();

  for (let i = 1; i <= lastDate; i++) {
    const day = document.createElement("div");
    day.innerText = i;

    // highlight today
    if (
      i === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear()
    ) {
      day.classList.add("today");
    }

    datesEl.appendChild(day);
  }
}

// navigation
prevBtn.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar();
});

nextBtn.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar();
});

// init
renderCalendar();
