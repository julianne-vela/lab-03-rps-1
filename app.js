import { getRandomThrow } from '../getRandomThrow.js';
import { doesUserWin } from './doesUserWin.js';

const goButton = document.getElementById('go-button');
const currentPick = document.getElementById('current-pick');
const winSpan = document.getElementById('wins');
const loseSpan = document.getElementById('losses');
const drawSpan = document.getElementById('draws');
const totalSpan = document.getElementById('total-clicks');

let wins = 0;
let lose = 0;
let draw = 0;
let total = 0;

goButton.addEventListener('click', () => {
    total++;

    const selectedButton = document.querySelector(`input[type='radio']:checked`);
    const compChoice = getRandomThrow();
    const userChoice = selectedButton.value;
    const theWinner = doesUserWin(userChoice, compChoice);

    if (theWinner === 'win') {
        wins++;
        currentPick.textContent = `WINNER! You guessed ${userChoice}. The computers guess was ${compChoice}.`; 
    }
    else if (theWinner === 'lose') {
        lose++;
        currentPick.textContent = `BUMMER! You guessed ${userChoice}. The computers guess was ${compChoice}.`;
    }
    else if (theWinner === 'draw') {
        draw++;
        currentPick.textContent = `DRAW! You guessed ${userChoice}. The computers guess was ${compChoice}.`;
    }

    winSpan.textContent = wins;
    loseSpan.textContent = lose;
    drawSpan.textContent = draw;
    totalSpan.textContent = total;  
});
  



 


    

