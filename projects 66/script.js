const textarea = document.getElementById("text");
const count = document.getElementById("count");
const max = 200;

textarea.addEventListener("input", () => {
  const length = textarea.value.length;
  count.innerText = length;

  // color warnings
  count.classList.remove("warning", "danger");

  if (length > max * 0.7) {
    count.classList.add("warning");
  }

  if (length > max * 0.9) {
    count.classList.add("danger");
  }
});
