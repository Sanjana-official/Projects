const logo = document.getElementById("logoContainer");
const hero = document.querySelector(".hero");

let triggered = false;

window.addEventListener("scroll", () => {

    if(window.scrollY > 100 && !triggered){

        triggered = true;

        // Step 1: move logo slowly
        logo.classList.add("final");
        
        // Step 2: after movement finishes, show text
        setTimeout(() => {
            logo.classList.add("show-text");

            logo.style.position = "absolute";

            hero.classList.add("collapse");
        }, 1200); // match CSS transition time
    }

});

