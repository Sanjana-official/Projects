const reactionBox = document.getElementById("reactionBox");

const startBtn = document.getElementById("startBtn");

const result = document.getElementById("result");

const infoText = document.getElementById("infoText");

let startTime;
let timeout;
let gameStarted = false;

// START TEST
startBtn.addEventListener("click", startTest);

function startTest(){

  reactionBox.classList.remove("ready");
  reactionBox.classList.add("waiting");

  reactionBox.innerText = "Wait for Green...";
  
  result.innerText = "⏳ Get Ready...";
  
  infoText.innerText =
    "Wait until the box turns green.";

  gameStarted = false;

  // RANDOM DELAY
  const randomDelay =
    Math.floor(Math.random() * 4000) + 2000;

  timeout = setTimeout(() => {

    reactionBox.classList.remove("waiting");
    reactionBox.classList.add("ready");

    reactionBox.innerText = "CLICK NOW!";

    infoText.innerText =
      "Click as fast as you can!";

    startTime = Date.now();

    gameStarted = true;

  }, randomDelay);

}

// CLICK BOX
reactionBox.addEventListener("click", () => {

  // TOO EARLY
  if(
    reactionBox.classList.contains("waiting") &&
    !gameStarted
  ){

    clearTimeout(timeout);

    reactionBox.classList.remove("waiting");

    reactionBox.innerText = "Too Early!";

    result.innerText =
      "❌ You clicked too soon.";

    infoText.innerText =
      "Press Start to try again.";

    return;
  }

  // VALID CLICK
  if(gameStarted){

    const reactionTime =
      Date.now() - startTime;

    reactionBox.classList.remove("ready");

    reactionBox.innerText = "Done!";

    result.innerHTML =
      `⚡ Your reaction time: <strong>${reactionTime} ms</strong>`;

    infoText.innerText =
      "Press Start to test again.";

    gameStarted = false;
  }

});