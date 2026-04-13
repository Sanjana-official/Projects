const navbar = document.getElementById("navbar");

let lastScroll = 0;

window.addEventListener("scroll", () => {
  let currentScroll = window.scrollY;

  if (currentScroll > lastScroll && currentScroll > 50) {
    // scrolling DOWN → hide
    navbar.classList.add("hide");
  } else {
    // scrolling UP → show
    navbar.classList.remove("hide");
  }

  lastScroll = currentScroll;
});
