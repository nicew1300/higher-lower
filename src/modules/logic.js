// select all necessary components that we will change dynamically
const lowerButton = document.querySelector('.lower-button');
const higherButton = document.querySelector('.higher-button');

const currentNumber = document.querySelector('.current-number').textContent;
const currentNumberDiv = document.querySelector('.current-number');

const hiddenNumber = document.querySelector('.hidden-number').textContent;
const hiddenNumberDiv = document.querySelector('.hidden-number');

const resultDiv = document.querySelector('.result');
const scoreDiv = document.querySelector('.score');

let result = '';
let score = '';

// lets watch if the player pressed a button:
lowerButton.addEventListener(
  'click',
  compareNumbers(currentNumber, hiddenNumber, 'lower'),
);
higherButton.addEventListener(
  'click',
  compareNumbers(currentNumber, hiddenNumber, 'higher'),
);

function compareNumbers(currentNumber, hiddenNumber, whichButton) {
  // 1 means you won, 0 means you lost
  let outcome = '';

  if (currentNumber <= hiddenNumber && whichButton === 'lower') {
    outcome = 1;
  }
  if (currentNumber <= hiddenNumber && whichButton === 'higher') {
    outcome = 0;
  }

  if (currentNumber >= hiddenNumber && whichButton === 'lower') {
    outcome = 1;
  }
  if (currentNumber >= hiddenNumber && whichButton === 'higher') {
    outcome = 0;
  }

  updateNumbers(outcome);
}

function updateNumbers(outcome) {
  // get a random number between 0 and 100 and set it as the current number
  const newCurrentNumber = Math.floor(Math.random() * 101);
  currentNumber.textContent = newCurrentNumber;

  // get a random number between 0 and 100 and set it as the hidden number
  const newHiddenNumber = Math.floor(Math.random() * 101);
  hiddenNumber.textContent = newHiddenNumber;

  updateScore(outcome, newHiddenNumber, newCurrentNumber);
}

function updateScore(outcome, newHiddenNumber, newCurrentNumber) {
  if (outcome === 1) {
    score++;
    scoreDiv.textContent = `Score: ${score}`;
    updateResult(outcome, newHiddenNumber, newCurrentNumber);
  } else {
    updateResult(outcome, newHiddenNumber, newCurrentNumber);
  }
}

function updateResult(outcome, newHiddenNumber, newCurrentNumber) {
  if (outcome === 1) {
    resultDiv.textContent = 'YOOO LETS GOOO';
  } else {
    resultDiv.textContent = 'FUCKKKK';
  }
}

// make a updateNumbers function that updates the current number and hidden number after each round
// make a updateScore function that updates the scoreDiv with the current score
// make it so that every time the outcome comes out, the result in the resultDiv "bounces" in scale, so its obvious if you won or lost and not just a static text change, because if it were static, you wouldnt even be able to see if you got it wrong or right twice in a row
