window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;

    let intensity = scrollTop / maxScroll;

    // control glow strength
    intensity = Math.min(intensity * 0.8, 0.8);

    document.documentElement.style.setProperty("--g", intensity);

});

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

window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;

    let progress = scrollTop / maxScroll;

    // clamp between 0 and 1
    progress = Math.min(Math.max(progress, 0), 1);

    document.documentElement.style.setProperty("--t", progress);

});