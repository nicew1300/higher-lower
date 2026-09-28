let lowerButton;
let higherButton;
let currentNumberDiv;
let hiddenNumberDiv;
let resultDiv;
let scoreDiv;

let score = 0;

// Adding initializeGame() in logic.js, so DOM queries happen after rendering
// Calling it after renderSite() in index.js
function initializeGame() {
  lowerButton = document.querySelector('.lower');
  higherButton = document.querySelector('.higher');
  currentNumberDiv = document.querySelector('.current-number');
  hiddenNumberDiv = document.querySelector('.hidden-number');
  resultDiv = document.querySelector('.result');
  scoreDiv = document.querySelector('.score');

  hiddenNumberDiv.style.opacity = 0;
  hiddenNumberDiv.style.transform = 'scale(1)';

  lowerButton.addEventListener('click', () =>
    compareNumbers(
      currentNumberDiv.textContent,
      hiddenNumberDiv.textContent,
      'lower',
    ),
  );
  higherButton.addEventListener('click', () =>
    compareNumbers(
      currentNumberDiv.textContent,
      hiddenNumberDiv.textContent,
      'higher',
    ),
  );
}

function compareNumbers(currentNumber, hiddenNumber, whichButton) {
  // 1 means you won, 0 means you lost
  const current = Number(currentNumber);
  const hidden = Number(hiddenNumber);
  const outcome =
    (whichButton === 'lower' && hidden < current) ||
    (whichButton === 'higher' && hidden > current)
      ? 1
      : 0;

  updateScore(outcome);
  showHiddenNumber(outcome);
}

// we now want to show what happened after the player pressed a button, so we will update the resultDiv with the outcome of the round and quickly show the hidden number with a fade in and fade out effect, so the player can see what the hidden number was after they pressed a button
function showHiddenNumber(outcome) {
  hiddenNumberDiv.style.opacity = 1;
  hiddenNumberDiv.style.transform = 'scale(1.2)';
  setTimeout(() => {
    hiddenNumberDiv.style.opacity = 0;
    hiddenNumberDiv.style.transform = 'scale(1)';
    setTimeout(updateNumbers, 1000);
  }, 1000);

  updateResult(outcome);
}

// we then want to update the score after each round
function updateScore(outcome) {
  if (outcome === 1) {
    score++;
    scoreDiv.textContent = `Score: ${score}`;
    updateResult(outcome);
  } else {
    updateResult(outcome);
  }
}

// we then lastly want to update the result after each round
function updateResult(outcome) {
  if (outcome === 1) {
    resultDiv.textContent = 'YOOO LETS GOOO';
    resultDiv.style.opacity = 1;
    resultDiv.style.color = '#00ff00';

    setTimeout(() => {
      resultDiv.style.opacity = 0;
      resultDiv.textContent = '';
    }, 1000);
  } else {
    resultDiv.textContent = 'NOOO DUDE FUCKKK';
    resultDiv.style.opacity = 1;
    resultDiv.style.color = '#ff0000';

    setTimeout(() => {
      resultDiv.style.opacity = 0;
      resultDiv.textContent = '';
    }, 1000);
  }
}

function generateRandomNumber() {
  return Math.floor(Math.random() * 101);
}

// after everything has been shown, we start a new round by changing the numbers
function updateNumbers() {
  // get a random number between 0 and 100 and set it as the current number
  const newCurrentNumber = generateRandomNumber();
  currentNumberDiv.textContent = newCurrentNumber;

  // get a random number between 0 and 100 and set it as the hidden number
  const newHiddenNumber = generateRandomNumber();
  hiddenNumberDiv.textContent = newHiddenNumber;
}

export { generateRandomNumber, initializeGame };
// make a updateNumbers function that updates the current number and hidden number after each round
// make a updateScore function that updates the scoreDiv with the current score
// make it so that every time the outcome comes out, the result in the resultDiv "bounces" in scale, so its obvious if you won or lost and not just a static text change, because if it were static, you wouldnt even be able to see if you got it wrong or right twice in a row
