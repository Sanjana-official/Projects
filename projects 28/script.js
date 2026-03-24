const sections = document.querySelectorAll("section");
const numbers = document.querySelectorAll(".num");

window.addEventListener("scroll", () => {
  let current = 0;

  sections.forEach((section, index) => {
    const top = section.offsetTop;
    const height = section.clientHeight;

    if (scrollY >= top - height / 2) {
      current = index;
    }
  });

  numbers.forEach(num => num.classList.remove("active"));
  numbers[current].classList.add("active");
});
