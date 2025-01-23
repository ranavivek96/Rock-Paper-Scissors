let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"]
    //for rock, paper, scissors randomly select by comp
    const randIdx = Math.floor(Math.random() * 3);  // for random num genaration
    return options[randIdx]; 
}

const drawGame = () => {
    console.log("game was draw.");
    msg.innerText = "Game Draw. Play Agin"
}

const showWinner = (userwin) => {
    if(userwin) {
        console.log("You Win!");
        msg.innerText = "You Win!";
    } else {
        console.log("You Lose");
        msg.innerText = "You Lose";
    }
};

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
        showWinner(userwin);
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

