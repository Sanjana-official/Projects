const bell = document.getElementById("bell");
const dropdown = document.getElementById("dropdown");
const badge = document.getElementById("badge");

let count = 3;

// toggle dropdown
bell.addEventListener("click", () => {
  dropdown.classList.toggle("show");

  // clear notifications
  if (count > 0) {
    count = 0;
    badge.style.display = "none";
  }
});

// click outside to close
window.addEventListener("click", (e) => {
  if (!bell.contains(e.target)) {
    dropdown.classList.remove("show");
  }
});
