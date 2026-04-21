const stars = document.querySelectorAll(".stars span");
const result = document.getElementById("result");

let currentRating = 0;

stars.forEach((star, index) => {

  // click to set rating
  star.addEventListener("click", () => {
    currentRating = index + 1;
    updateStars(currentRating);
    result.innerText = `Rating: ${currentRating}`;
  });

  // hover preview
  star.addEventListener("mouseover", () => {
    updateStars(index + 1);
  });

  // reset on mouse leave
  star.addEventListener("mouseleave", () => {
    updateStars(currentRating);
  });

});

function updateStars(rating) {
  stars.forEach((star, i) => {
    if (i < rating) {
      star.classList.add("active");
    } else {
      star.classList.remove("active");
    }
  });
}
