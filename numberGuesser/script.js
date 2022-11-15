let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// function for random number generator
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}

// test generateTarget function
// console.log(generateTarget())

// function to compare user and computer guess
const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
    
    const humanDifference = Math.abs(humanGuess - targetGuess);
    
    const computerDifference = Math.abs(computerGuess - targetGuess);

    if (humanDifference <= computerDifference) {
        return true;  
}   else {
        return false;
}

}

// test compareGuesses function
// console.log(compareGuesses(0, 0, 6))

// function for updading score each round
const updateScore = winner => {
    if (winner === "human") {
    return humanScore++;
}   else if (winner === "computer") {
    return computerScore++;
}   

}
//function test
// console.log(updateScore(human))


//function to update the round number after each round
const advanceRound = () => {
    return currentRoundNumber++;
}

