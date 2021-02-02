/* Script for Guess my number - Jorny */

let SecretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}


document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    // No input
    if (!guess) {
        displayMessage('⛔ No number!')
        // Player wins
    } else if (guess === SecretNumber) {
        displayMessage('🎉 Correct number!');
        document.querySelector('.number').textContent = SecretNumber;
        // Theme change
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

        // Wrong guess
    } else if (guess !== SecretNumber) {
        if (score > 1) {
            displayMessage(guess > SecretNumber ? '📈 Too high!' : '📉 Too low!');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('😑You lost the game!');
            document.querySelector('.score').textContent = 0;
        }    
}});

// Hitting the resettbutton
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    SecretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.score').textContent = score;
    displayMessage('Start guessing...');
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});