let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userPoints = document.querySelector("#user-score");
const compPoints = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"]
    //for rock, paper, scissors randomly select by comp
    const randIdx = Math.floor(Math.random() * 3);  // for random num genaration
    return options[randIdx]; 
}

const drawGame = () => {
    console.log("game was draw.");
    msg.innerText = "Game Draw. Play Agin"
    msg.style.backgroundColor = "#081b21";
}

const showWinner = (userwin, userChoice, compChoice) => {
    if(userwin) {
        userScore++;
        userPoints.innerText = userScore;
        console.log("You Win!");
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compPoints.innerText = compScore;
        console.log("You Lose");
        msg.innerText = `You Lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("user choice =", userChoice);
    //Generate computer choice
    const compChoice = genCompChoice();
    console.log("Comp choice =", compChoice);

    if(userChoice === compChoice) {
        //Draw Game
        drawGame();
    }   else {
        let userwin = true;
        if(userChoice === "rock") {
            //scissors, paper
            userwin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
            //rock, scissors
            userwin = compChoice === "scissors" ? false :true;
        } else {
            //rock, paper
            userwin = compChoice === "rock" ? false :true;
        }
        showWinner(userwin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    // console.log(choice);      //for print choise
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked", userChoice);  //for access div id(user choice) (rock, paper, scissors)
        playGame(userChoice);
    });
});