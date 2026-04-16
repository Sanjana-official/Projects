const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");

const quiz = [
  {
    question: "What does HTML stand for?",
    answers: [
      { text: "Hyper Text Markup Language", correct: true },
      { text: "High Transfer Machine Language", correct: false },
      { text: "Hyperlinks and Text Machine Language", correct: false },
      { text: "Home Tool Markup Language", correct: false }
    ]
  },
  {
    question: "Which language is used for styling?",
    answers: [
      { text: "HTML", correct: false },
      { text: "CSS", correct: true },
      { text: "Java", correct: false },
      { text: "Python", correct: false }
    ]
  },
  {
    question: "Which is a JavaScript framework?",
    answers: [
      { text: "React", correct: true },
      { text: "Laravel", correct: false },
      { text: "Django", correct: false },
      { text: "Flask", correct: false }
    ]
  }
];

let currentQuestion = 0;
let score = 0;

function startQuiz() {
  currentQuestion = 0;
  score = 0;
  nextBtn.innerText = "Next";
  nextBtn.style.display = "none"; // reset button visibility
  showQuestion();
}

function showQuestion() {
  resetState();

  let q = quiz[currentQuestion];
  questionEl.innerText = q.question;

  q.answers.forEach(answer => {
    const btn = document.createElement("button");
    btn.innerText = answer.text;
    btn.classList.add("answer-btn");

    if (answer.correct) {
      btn.dataset.correct = true;
    }

    btn.addEventListener("click", selectAnswer);
    answersEl.appendChild(btn);
  });
}

function resetState() {
  nextBtn.style.display = "none";
  answersEl.innerHTML = "";
}

function selectAnswer(e) {
  const selected = e.target;
  const correct = selected.dataset.correct === "true";

  if (correct) score++;

  Array.from(answersEl.children).forEach(btn => {
    if (btn.dataset.correct === "true") {
      btn.classList.add("correct");
    } else {
      btn.classList.add("wrong");
    }
    btn.disabled = true;
  });

  nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", () => {

  //  Restart condition
  if (currentQuestion >= quiz.length) {
    startQuiz();
    return;
  }

  currentQuestion++;

  if (currentQuestion < quiz.length) {
    showQuestion();
  } else {
    showScore();
  }
});

function showScore() {
  resetState();
  questionEl.innerText = `You scored ${score} out of ${quiz.length}`;
  nextBtn.innerText = "Restart";
  nextBtn.style.display = "block";
}

startQuiz();
