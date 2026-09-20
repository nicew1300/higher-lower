// make a function that types out the three dots at "Hidden number is ..." continously, with a delay of 500ms between each dot, and then resets after the third dot. Use setInterval and clearInterval to do this twin, you can use a variable to keep track of the number of dots currently displayed, and update the text content of the element accordingly

// select all necessary components that we will change dynamically
const lowerButton = document.querySelector('.lower-button');
const higherButton = document.querySelector('.higher-button');

const currentNumber = document.querySelector('.current-number').textContent;
const hiddenNumber = document.querySelector('.hidden-number').textContent;

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

  return outcome;
}
