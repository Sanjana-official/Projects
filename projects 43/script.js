const toggle = document.getElementById("modeToggle");

/* LOAD SAVED MODE */

if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark");
    toggle.checked = true;
}

/* TOGGLE EVENT */

toggle.addEventListener("change", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }

});
