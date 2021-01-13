// import functions and grab DOM elements
const goButton = document.getElementById('go-button');
const currentPick = document.getElementById('current-pick');
const winSpan = document.getElementById('wins');
const loseSpan = document.getElementById('losses');
const resultSpan = document.getElementById('result');

// console.log(goButton, currentPick, winSpan, loseSpan, result);

// initialize state
let wins = 0;
let result = 0;

// set event listeners to update state and DOM

goButton.addEventListener('click', () => {
    result++;

    const compChoice = Math.round(Math.random() * 3);
    // console.log(compChoice);
    const compRPS = makeRPS(compChoice);

    const selectedButton = document.querySelector(`input[type='radio']:checked`);

    const userChoice = selectedButton.value;

    if (userChoice === compRPS) {
        wins++;
        currentPick.textContent = `You guessed ${userChoice}. The correct guess was ${compChoice}`;
    }

    function makeRPS(oneOrTwoThree) {
        if (oneOrTwoThree === 1) {
            return 'Rock';
        }
  
        else (oneOrTwoThree === 2); {
            return 'Paper';
        }
  
  
    }

    winSpan.textContent = wins;
    loseSpan.textContent = result - wins;
    resultSpan.textContent = result;
});



