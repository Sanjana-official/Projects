const cards = document.querySelectorAll(".testimonial-card");

const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

let current = 0;

// UPDATE ACTIVE CARD
function updateCards(){

  cards.forEach(card => {
    card.classList.remove("active");
  });

  cards[current].classList.add("active");
}

// NEXT
nextBtn.addEventListener("click", () => {

  current++;

  if(current >= cards.length){
    current = 0;
  }

  updateCards();

});

// PREV
prevBtn.addEventListener("click", () => {

  current--;

  if(current < 0){
    current = cards.length - 1;
  }

  updateCards();

});

// AUTO SLIDE
setInterval(() => {

  current++;

  if(current >= cards.length){
    current = 0;
  }

  updateCards();

}, 4000);