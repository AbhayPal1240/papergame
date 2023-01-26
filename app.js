const ComputerChoicedisplay = document.getElementById('computer-choice');
const userChoicedisplay = document.getElementById('your-choice');
const result = document.getElementById('Result');
const possiblechoice = document.querySelectorAll('button');
const reset =document.getElementById('reset');
let userChoice;
let computerchoice;
let finalresult;




possiblechoice.forEach(possiblechoice => possiblechoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoicedisplay.innerHTML = userChoice
    genratecomputerchoice()
    getresult()
    
}))

function genratecomputerchoice() {
    const randomnumber = Math.floor(Math.random() * 3) + 1
    if (randomnumber === 1) {
        computerchoice = "rock"
    }
    if (randomnumber === 2) {
        computerchoice = "paper"
    }
    if (randomnumber === 3) {
        computerchoice = "scissors"
    }
    ComputerChoicedisplay.innerHTML = computerchoice
}

function getresult() {
    if (computerchoice === userChoice) {
        finalresult = "Its a Draw"
    }
    if (computerchoice === "rock" && userChoice === "paper") {
        finalresult = "You are win"
    }
    if (computerchoice === "rock" && userChoice === "scissors") {
        finalresult = "You are lost"
    }
    if (computerchoice === "paper" && userChoice === "scissors") {
        finalresult = "You are win"
    }
    if (computerchoice === "paper" && userChoice === "rock") {
        finalresult = "You are lost"
    }
    if (computerchoice === "scissors" && userChoice === "rock") {
        finalresult = "You are Win"
    }
    if (computerchoice === "scissors" && userChoice === "paper") {
        finalresult = "You are lost"

    
    }
    result.innerHTML = finalresult
}





