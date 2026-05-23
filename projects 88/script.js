const choices =
  document.querySelectorAll(".choice");

const resultText =
  document.getElementById("resultText");

const movesText =
  document.getElementById("movesText");

const userScoreEl =
  document.getElementById("userScore");

const computerScoreEl =
  document.getElementById("computerScore");

const restartBtn =
  document.getElementById("restartBtn");

let userScore = 0;
let computerScore = 0;

const options = [
  "rock",
  "paper",
  "scissors"
];

// PLAY GAME
choices.forEach(choice => {

  choice.addEventListener("click", () => {

    const userChoice =
      choice.dataset.choice;

    const computerChoice =
      options[
        Math.floor(Math.random() * 3)
      ];

    playGame(userChoice, computerChoice);

  });

});

// GAME LOGIC
function playGame(user, computer){

  movesText.innerHTML =
    `You chose <strong>${user}</strong><br>
     Computer chose <strong>${computer}</strong>`;

  // DRAW
  if(user === computer){

    resultText.innerText = "🤝 It's a Draw!";
    return;
  }

  // USER WINS
  if(

    (user === "rock" && computer === "scissors") ||

    (user === "paper" && computer === "rock") ||

    (user === "scissors" && computer === "paper")

  ){

    userScore++;

    userScoreEl.innerText = userScore;

    resultText.innerText = "🎉 You Win!";

  }

  // COMPUTER WINS
  else{

    computerScore++;

    computerScoreEl.innerText = computerScore;

    resultText.innerText = "💻 Computer Wins!";

  }

}

// RESTART GAME
restartBtn.addEventListener("click", () => {

  userScore = 0;
  computerScore = 0;

  userScoreEl.innerText = 0;
  computerScoreEl.innerText = 0;

  resultText.innerText =
    "Choose your move";

  movesText.innerText = "-";

});