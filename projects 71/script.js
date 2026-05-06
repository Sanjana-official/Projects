const search = document.getElementById("search");
const items = document.querySelectorAll("#list li");

search.addEventListener("input", () => {
  const value = search.value.toLowerCase();

  items.forEach(item => {
    const text = item.innerText.toLowerCase();

    if (text.includes(value)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});