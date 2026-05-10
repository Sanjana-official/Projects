// LIKE BUTTON INTERACTION

const likeButtons = document.querySelectorAll(".like-btn");

likeButtons.forEach(button => {

  button.addEventListener("click", () => {

    let count = button.querySelector("span");

    let current = Number(count.innerText);

    if(button.classList.contains("liked")){
      count.innerText = current - 1;
      button.classList.remove("liked");
    }
    else{
      count.innerText = current + 1;
      button.classList.add("liked");
    }

  });

});