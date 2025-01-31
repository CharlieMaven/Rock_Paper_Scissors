console.log('Hello World');

function getComputerChoice (randomNumber= Math.random()) {
    randomAnswer = Math.ceil(randomNumber * 10);

    if (randomAnswer >= 0 && randomAnswer <= 3) {
        console.log("Rock");
    } else if (randomAnswer >= 4 && randomAnswer <= 6) {
        console.log("Paper");
    } else if (randomAnswer >= 7 && randomAnswer <= 10) {
            console.log("Scissors");
    } else {
        console.log("Program is broken!");
    }
}

getComputerChoice();

function getHumanChoice() {
    let chooseOption = window.prompt("Rock / Paper / Scissors?");
    console.log(chooseOption);
};

console.log(getHumanChoice());


