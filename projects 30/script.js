let startTime = Date.now();
let elapsed = 0;
let running = true;

const timerEl = document.getElementById("timer");

function updateTimer() {
  if (running) {
    const now = Date.now();
    const total = elapsed + (now - startTime);

    const seconds = Math.floor(total / 1000) % 60;
    const minutes = Math.floor(total / 60000);

    timerEl.textContent =
      String(minutes).padStart(2, "0") + ":" +
      String(seconds).padStart(2, "0");
  }

  requestAnimationFrame(updateTimer);
}

updateTimer();

/* PAUSE / RESUME */
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    elapsed += Date.now() - startTime;
    running = false;
  } else {
    startTime = Date.now();
    running = true;
  }
});
