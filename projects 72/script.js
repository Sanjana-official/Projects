// simple navbar shadow on scroll

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

  if(window.scrollY > 50){
    navbar.style.background = "rgba(0,0,0,0.5)";
  }
  else{
    navbar.style.background = "rgba(0,0,0,0.2)";
  }

});