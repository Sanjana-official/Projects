const dots = document.querySelectorAll(".dot");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.clientHeight;

        if (scrollY >= top - height / 2) {
            current = section.getAttribute("id");
        }
    });

    dots.forEach((dot) => {
        dot.classList.remove("active");
        if (dot.getAttribute("href") === "#" + current) {
            dot.classList.add("active");
        }
    });

});
