const words = ["apple", "banana", "orange", "grape", "strawberry"];

let chosenWord = "";
let blanks = [];
let winCount = 0;
let lossCount = 0;
let timerInterval;

function chooseWord() {
    chosenWord = words[Math.floor(Math.random() * words.length)];
    blanks = Array(chosenWord.length).fill("_");
    document.getElementById("word-blanks").textContent = blanks.join(" ");
  }