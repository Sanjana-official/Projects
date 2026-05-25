const keyText =
  document.getElementById("keyText");

const codeText =
  document.getElementById("codeText");

const keys =
  document.querySelectorAll(".key");

// KEYDOWN EVENT
window.addEventListener("keydown", (e) => {

  // DISPLAY KEY
  keyText.innerText =
    e.key === " " ? "SPACE" : e.key;

  codeText.innerText = e.code;

  // REMOVE ACTIVE
  keys.forEach(key => {
    key.classList.remove("active");
  });

  // FIND MATCHING KEY
  keys.forEach(key => {

    const keyValue =
      key.innerText.toLowerCase();

    if(
      keyValue === e.key.toLowerCase() ||

      (e.key === " " &&
      keyValue === "space")

    ){

      key.classList.add("active");

    }

  });

});