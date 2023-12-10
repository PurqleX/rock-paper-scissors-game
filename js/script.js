let userScore = 0;
let computerScore = 0;

document.getElementById('rock').addEventListener('click', () => playGame('rock'));
document.getElementById('paper').addEventListener('click', () => playGame('paper'));
document.getElementById('scissors').addEventListener('click', () => playGame('scissors'));

function playGame(userChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);
    updateScore(result);
    document.getElementById('result').innerText = `You chose ${userChoice}, the computer chose ${computerChoice}. ${result}`;
    document.getElementById('score').innerText = `Your Score: ${userScore} | Computer Score: ${computerScore}`;
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'It\'s a tie!';
    }

    if (userChoice === 'rock') {
        return (computerChoice === 'scissors') ? 'You win!' : 'You lose!';
    } else if (userChoice === 'paper') {
        return (computerChoice === 'rock') ? 'You win!' : 'You lose!';
    } else { // userChoice === 'scissors'
        return (computerChoice === 'paper') ? 'You win!' : 'You lose!';
    }
}

function updateScore(result) {
    if (result === 'You win!') {
        userScore++;
    } else if (result === 'You lose!') {
        computerScore++;
    }
    // No score update for a tie
}
