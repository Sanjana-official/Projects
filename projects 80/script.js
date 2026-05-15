const buttons = document.querySelectorAll(".theme-btn");

// LOAD SAVED THEME
const savedTheme = localStorage.getItem("theme");

if(savedTheme){
  document.body.className = savedTheme;
}

// SWITCH THEME
buttons.forEach(button => {

  button.addEventListener("click", () => {

    const theme = button.dataset.theme;

    // REMOVE OLD THEMES
    document.body.className = "";

    // APPLY NEW THEME
    if(theme !== "default"){
      document.body.classList.add(theme);
    }

    // SAVE THEME
    localStorage.setItem("theme", theme);

  });

});