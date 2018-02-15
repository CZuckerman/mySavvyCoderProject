
var output = document.querySelector(".rps-game")

output.innerHTML = "This is the game of Rock, Paper, Scissors"

var name = prompt("What is your first name?")
if (name === "" || name === null) {prompt ("Please provide a name!")
}
var userChoice = prompt("Choose Rock, Paper, or Scissors by typing 'R', 'P', or 'S'")

var randnum = Math.random();
var computerChoice = "R";

if (randnum > 0.66) {
  computerChoice = "P";
} else if (randnum > 0.33) {
  computerChoice = "S";
}

var userWins = "You win!";
var computerWins = "The computer wins!";

if(computerChoice !== userChoice){
    if(computerChoice === "R"){
        if (userChoice === "S") {
            alert("Computer had " + computerChoice + " "+ computerWins);
        } else {
            alert("Computer had " + computerChoice + " "+ userWins);
        }
    } else if (computerChoice === "P") {
        if( userChoice === "R") {
            alert("Computer had " + computerChoice + " "+ computerWins);
        } else {
            alert(userWins);
        }
    } else {
        if( userChoice === "P") {
            alert("Computer had " + computerChoice + " "+ computerWins);
        } else {
            alert("Computer had " + computerChoice + " "+ userWins);
        }
    }
} else {
    alert('Tie!');
}
