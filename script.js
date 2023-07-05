const words = ["apple", "banana", "orange", "grape", "strawberry"];

let chosenWord = "";
let blanks = [];
let winCount = 0;
let lossCount = 0;
let timerInterval;


const winsDisplay = document.getElementById('wins');
const lossesDisplay = document.getElementById('losses');
const wordDisplay = document.getElementById('word-display');
const messageDisplay = document.getElementById('message');
const startBtn = document.getElementById('start-btn');


function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
  }

function initGame() {
    chosenWord = getRandomWord();
    blanks = Array(chosenWord.length).fill('_');
    winsDisplay.textContent = wins;
    lossesDisplay.textContent = losses;
    wordDisplay.textContent = blanks.join(' ');
    messageDisplay.textContent = '';
  }

  function updateBlanks(letter) {
    for (let i = 0; i < chosenWord.length; i++) {
      if (chosenWord[i] === letter) {
        blanks[i] = letter;
      }
    }
    wordDisplay.textContent = blanks.join(' ');
  }

  function checkWin() {
    if (blanks.join('') === chosenWord) {
      wins++;
      messageDisplay.textContent = 'Congratulations! You won!';
      clearInterval(timerInterval);
    }
  }

  function checkLoss() {
    losses++;
    messageDisplay.textContent = 'Oops! Time ran out. Try again!';
  }

  function startGame() {
    clearInterval(timerInterval);
    initGame();
    timerInterval = setInterval(checkLoss, 10000); // Timer set to 10 seconds (adjust as needed)
  }

  function handleKeyPress(event) {
    const guess = event.key.toLowerCase();
    if (guess.match(/[a-z]/) && !blanks.includes(guess)) {
      if (chosenWord.includes(guess)) {
        updateBlanks(guess);
        checkWin();
      }
    }
  }

  startBtn.addEventListener('click', startGame);
  document.addEventListener('keydown', handleKeyPress);

  initGame(); //