const typingText =
  document.getElementById("typingText");

// WORDS
const words = [
  "Developer",
  "Designer",
  "Freelancer",
  "Creator",
  "Programmer"
];

let wordIndex = 0;
let charIndex = 0;

let isDeleting = false;

// TYPE FUNCTION
function typeEffect(){

  const currentWord =
    words[wordIndex];

  // TYPING
  if(!isDeleting){

    typingText.innerText =
      currentWord.substring(0, charIndex + 1);

    charIndex++;

    // WORD COMPLETED
    if(charIndex === currentWord.length){

      isDeleting = true;

      setTimeout(typeEffect, 1200);

      return;
    }

  }

  // DELETING
  else{

    typingText.innerText =
      currentWord.substring(0, charIndex - 1);

    charIndex--;

    // NEXT WORD
    if(charIndex === 0){

      isDeleting = false;

      wordIndex++;

      if(wordIndex === words.length){
        wordIndex = 0;
      }

    }

  }

  // SPEED
  const speed =
    isDeleting ? 60 : 120;

  setTimeout(typeEffect, speed);

}

// START
typeEffect();