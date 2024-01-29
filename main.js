const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");

const $myChoice = document.getElementById("myChoice");
const $computerChoice = document.getElementById("computerChoice");

const images = [
    "./assets/rock-hand.png",
    "./assets/paper-hand.png",
    "./assets/scissors-hand.png"
]
var playerChose;
var computerChoice;

function generateComputerChoice(){
    computerChoice = parseInt(Math.random() * 3);
    console.log(computerChoice)
    switch(computerChoice){
        case 0:
            $computerChoice.setAttribute('src', images[0]);
            break;
        case 1:
            $computerChoice.setAttribute('src', images[1]);
            break;
        case 2:
            $computerChoice.setAttribute('src', images[2]);
            break;
    }
}

document.addEventListener('click', (e) => {
    if(e.target.classList.contains("logo")){
        generateComputerChoice();
        if(e.target.getAttribute('id') === 'rock'){
            playerChose = 0;
            $myChoice.setAttribute('src', images[0]);
        }
        else if(e.target.getAttribute('id') === 'paper'){
            playerChose = 1;
            $myChoice.setAttribute('src', images[1]);
        }
        else if(e.target.getAttribute('id') === 'scissor'){
            playerChose = 2;
            $myChoice.setAttribute('src', images[2]);
        }
        updateScore();
    }
})

const $playerScore = document.getElementById("playerScore");
const $computerScore = document.getElementById("computerScore");
var myScore = 0;
var computerScore = 0;

function updateScore(){
    if(playerChose === 0 && computerChoice == 2){
        myScore +=1;
    } else if(playerChose === 0 && computerChoice === 1){
        computerScore +=1;
    } else if(playerChose === 1 && computerChoice === 0){
        myScore +=1;
    } else if(playerChose === 1 && computerChoice === 2){
        computerScore +=1;
    } else if(playerChose === 2 && computerChoice === 1){
        myScore +=1;
    } else if(playerChose === 2 && computerChoice === 0){
        computerScore +=1;
    }
    $playerScore.innerHTML = myScore;
    $computerScore.innerHTML = computerScore;
    if(myScore === 5 || computerScore === 5){
        gameOver();
    }
}

function gameOver(){
    const endGameDiv = document.getElementById("resultDiv");
    const result = document.getElementById("result");
    if(myScore === 5){
    result.innerHTML = "You Won!!!";
    }
    else if(computerScore == 5){
    result.innerHTML = "The Computer Won!";
    }
    endGameDiv.style.display = 'flex';
    document.getElementById("newGame").onclick = () =>{
        history.go(0);
    }
}