// var init
let scorePlayer1 = 0;
let scorePlayer2 = 0;
let roundPlayer1 = 0;
let roundPlayer2 = 0;
let diceValue = 1;
let roundFinished = false;
let win = false;

// Buttons
// New Game
let btnNewGame = document.getElementById('newgame')
btnNewGame.addEventListener('click', newGame);
// Roll Dice
let btnRollDice = document.getElementById('rolldice')
btnRollDice.addEventListener('click', rollDice)
// Hold
let btnHold = document.getElementById('hold')
btnHold.addEventListener('click', hold)

// DOM elements
let scoreP1 = document.getElementById('scorep1')
let scoreP2 = document.getElementById('scorep2')
let currentP1 = document.getElementById('currentp1')
let currentP2 = document.getElementById('currentp2')
let diceImg = document.getElementById('diceImg');


function newGame() {
    scorePlayer1 = 0;
    scorePlayer2 = 0;
    roundPlayer1 = 0;
    roundPlayer2 = 0;
    alert('New game will begin')
    btnRollDice.setAttribute('class','btn my-2')
    btnHold.setAttribute('class','btn my-2')
    refreshDisplay();
}

function rollDice() {
    diceValue = Math.floor(Math.random() * 6) + 1;
    diceImg.src = `./images/de${diceValue}.jpg`;
    if (diceValue != 1) {
        roundPlayer1 += diceValue;
    }
    else {
        roundPlayer1 = 0;
        btnHold.setAttribute('class','btn my-2 disabled');
    }
    refreshDisplay();
    
}

function hold() {
    scorePlayer1 += roundPlayer1;
    roundPlayer1 = 0;
    refreshDisplay();
    btnHold.setAttribute('class','btn my-2 disabled');
    alert('click sur Hold');
}

function refreshDisplay() {
    scoreP1.innerText = scorePlayer1;
    scoreP2.innerText = scorePlayer2;
    currentP1.innerText = roundPlayer1;
    currentP2.innerText = roundPlayer2;
}


