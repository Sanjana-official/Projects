const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {

    // remove active
    tabs.forEach(t => t.classList.remove("active"));
    contents.forEach(c => c.classList.remove("active"));

    // activate clicked
    tab.classList.add("active");

    const id = tab.dataset.tab;
    document
      .querySelector(`.tab-content[data-content="${id}"]`)
      .classList.add("active");
  });
});