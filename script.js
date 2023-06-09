// var init
let scorePlayer = [0, 0];
let roundPlayer = [0, 0];
let diceValue = 1;
let player = 0;     // 0 = Player 1 / 1 = Player 2

// Buttons & events
let btnNewGame = document.getElementById('newgame')
btnNewGame.addEventListener('click', newGame);
let btnRollDice = document.getElementById('rolldice')
btnRollDice.addEventListener('click', rollDice)
let btnHold = document.getElementById('hold')
btnHold.addEventListener('click', hold)

// DOM elements
let player1Text = document.getElementById('player1')
let player2Text = document.getElementById('player2')
let roundP1 = document.getElementById('roundp1')
let roundP2 = document.getElementById('roundp2')
let scoreP1 = document.getElementById('scorep1')
let scoreP2 = document.getElementById('scorep2')
let currentP1 = document.getElementById('currentp1')
let currentP2 = document.getElementById('currentp2')
let diceImg = document.getElementById('diceImg');

// Functions
function newGame() {
    scorePlayer = [0, 0];
    roundPlayer = [0, 0];
    btnHold.classList.add('disabled');
    refreshDisplay();
    changePlayer();
}

function rollDice() {
    btnHold.classList.remove('disabled');
    btnRollDice.classList.add('disabled');
    diceImg.classList.add('shakeImg');
    // Disable button an add timeout to prevent double click on Roll Dice button
    setTimeout(() => {
        diceImg.classList.remove('shakeImg');
        btnRollDice.classList.remove('disabled');
    }, "300")
    diceValue = Math.floor(Math.random() * 6) + 1;
    diceImg.src = `./images/de${diceValue}.jpg`;
    if (diceValue != 1) {
        roundPlayer[player] += diceValue;
    }
    else {
        roundPlayer[player] = 0;
        btnHold.classList.add('disabled');
        changePlayer();
    }
    refreshDisplay();
}

function hold() {
    scorePlayer[player] += roundPlayer[player];
    roundPlayer[player] = 0;
    refreshDisplay();
    btnHold.setAttribute('class','btn my-2 disabled');  // Diasable Hold Button until next roll dice
    if (scorePlayer[player] >= 100) {
        setTimeout(() => {
            alert(`Player ${player + 1} win the game.`);
            newGame();
            changePlayer();
        }, "100")       // Add timeout to prevent Refresh Dispaly problems caused by alert
    }
    else {
        changePlayer();
    }
    
}

function refreshDisplay() {
    scoreP1.innerText = scorePlayer[0];
    scoreP2.innerText = scorePlayer[1];
    currentP1.innerText = roundPlayer[0];
    currentP2.innerText = roundPlayer[1];
}

function changePlayer() {
    if (player == 0) {
        player1Text.classList.add('font-light');
        player2Text.classList.remove('font-light');
        roundP1.classList.add('d-none')
        roundP2.classList.remove('d-none')
        player = 1;
    }
    else {
        player1Text.classList.remove('font-light');
        player2Text.classList.add('font-light');
        player = 0;
        roundP1.classList.remove('d-none')
        roundP2.classList.add('d-none')
    }
}
