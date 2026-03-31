let randomNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess(){

    const guess = Number(document.getElementById("guess").value);
    const message = document.getElementById("message");

    if(!guess){
        message.textContent = "Enter a number!";
        return;
    }

    if(guess === randomNumber){
        message.textContent = "🎉 Correct! You guessed it!";
    }
    else if(guess > randomNumber){
        message.textContent = " Too high!";
    }
    else{
        message.textContent = " Too low!";
    }
}


function resetGame(){
    randomNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById("message").textContent = "";
    document.getElementById("guess").value = "";
}
