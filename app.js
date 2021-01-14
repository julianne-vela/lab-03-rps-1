import { getRandomThrow } from '../getRandomThrow.js';
import { doesUserWin } from './doesUserWin.js';

// import functions and grab DOM elements
const goButton = document.getElementById('go-button');
// const currentPick = document.getElementById('current-pick');
const winSpan = document.getElementById('wins');
const loseSpan = document.getElementById('losses');
const drawSpan = document.getElementById('draws');
const totalSpan = document.getElementById('total-clicks');

// console.log(goButton, currentPick, winSpan, loseSpan, result);

// initialize state
let wins = 0;
let lose = 0;
let draw = 0;
let total = 0;

// set event listeners to update state and DOM

goButton.addEventListener('click', () => {
    total++;

    const selectedButton = document.querySelector(`input[type='radio']:checked`);

    const compChoice = getRandomThrow();
    const userChoice = selectedButton.value;


    const theWinner = doesUserWin(userChoice, compChoice);

    if (theWinner === 'win') {
        wins++;
    }
    else if (theWinner === 'lose') {
        lose++;
    }
    else if (theWinner === 'draw') {
        draw++;
    }

    winSpan.textContent = wins;
    loseSpan.textContent = lose;
    drawSpan.textContent = draw;
    totalSpan.textContent = total;
    
});
  



    // if (userChoice === compRPS) {
    //     wins++;
    //     currentPick.textContent = ` Rad!! You guessed ${userChoice}. The correct guess was ${compChoice}`;
    // } else {
    //     currentPick.textContent = `Nope!! You guessed ${userChoice}. The correct guess was ${compChoice}`;
    // }

    

// function makeRPS(oneOrTwoThree) {
//     if (oneOrTwoThree === 1) return 'rock'; 
//     if (oneOrTwoThree === 2) return 'paper';
//     if (oneOrTwoThree === 3) return 'scissors';
// }