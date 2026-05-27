const board = document.getElementById("board");

const result =
  document.getElementById("result");

const checkBtn =
  document.getElementById("checkBtn");

const resetBtn =
  document.getElementById("resetBtn");

// INITIAL PUZZLE
const puzzle = [

  [5,3,"", "",7,"", "", "", ""],
  [6,"","", 1,9,5, "", "", ""],
  ["",9,8, "", "", "", "",6,""],

  [8,"","", "",6,"", "", "",3],
  [4,"","", 8,"",3, "", "",1],
  [7,"","", "",2,"", "", "",6],

  ["",6,"", "", "", "", 2,8,""],
  ["","","", 4,1,9, "", "",5],
  ["","","", "",8,"", "",7,9]

];

// SOLUTION
const solution = [

  [5,3,4,6,7,8,9,1,2],
  [6,7,2,1,9,5,3,4,8],
  [1,9,8,3,4,2,5,6,7],

  [8,5,9,7,6,1,4,2,3],
  [4,2,6,8,5,3,7,9,1],
  [7,1,3,9,2,4,8,5,6],

  [9,6,1,5,3,7,2,8,4],
  [2,8,7,4,1,9,6,3,5],
  [3,4,5,2,8,6,1,7,9]

];

// CREATE BOARD
function createBoard(){

  board.innerHTML = "";

  puzzle.flat().forEach((num,index) => {

    const input =
      document.createElement("input");

    input.type = "text";

    input.maxLength = 1;

    input.classList.add("cell");

    if(num !== ""){

      input.value = num;

      input.disabled = true;

      input.classList.add("fixed");

    }

    // ONLY 1-9
    input.addEventListener("input", () => {

      input.value =
        input.value.replace(/[^1-9]/g,"");

    });

    board.appendChild(input);

  });

}

// CHECK SOLUTION
checkBtn.addEventListener("click", () => {

  const cells =
    document.querySelectorAll(".cell");

  let correct = true;

  cells.forEach((cell,index) => {

    const row =
      Math.floor(index / 9);

    const col =
      index % 9;

    const value =
      parseInt(cell.value);

    if(value !== solution[row][col]){
      correct = false;
    }

  });

  if(correct){

    result.innerHTML =
      "🎉 Congratulations! Sudoku solved!";

  }

  else{

    result.innerHTML =
      "❌ Some values are incorrect.";

  }

});

// RESET BOARD
resetBtn.addEventListener("click", () => {

  createBoard();

  result.innerHTML =
    "Fill the puzzle and click Check";

});

// INITIALIZE
createBoard();