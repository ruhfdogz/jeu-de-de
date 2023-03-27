// var init
var scorePlayer1 = 0;
var scorePlayer2 = 0;
var roundPlayer1 = 0;
var roundPlayer2 = 0;

// Buttons
// New Game
var btnNewGame = document.getElementById('newgame')
btnNewGame.addEventListener('click', newGame);
// Roll Dice
var btnRollDice = document.getElementById('rolldice')
btnRollDice.addEventListener('click', rollDice)
// Hold
var btnHold = document.getElementById('hold')
btnHold.addEventListener('click', hold)

// DOM elements
scoreP1 = document.getElementById('scorep1')
scoreP2 = document.getElementById('scorep2')
currentP1 = document.getElementById('currentp1')
currentP2 = document.getElementById('currentp2')

function newGame() {
    var scorePlayer1 = 0;
    var scorePlayer2 = 0;
    alert('New game will begin')
    btnRollDice.setAttribute('class','btn my-2')
    btnHold.setAttribute('class','btn my-2')
    refreshDisplay();
}

function rollDice() {
    alert('click sur Roll Dice');
}

function hold() {
    alert('click sur Hold');
}

function refreshDisplay() {
    scoreP1.innerText = scorePlayer1;
    scoreP2.innerText = scorePlayer2;
    currentP1.innerText = roundPlayer1;
    currentP2.innerText = roundPlayer2;
}

