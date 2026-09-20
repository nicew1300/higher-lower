// now, make what you wrote in template.html here in javascript, so that we can use it in the game logic and also so you learn react concepts

function makeEle(tag, className, textContent) {
  const ele = document.createElement(tag);
  if (className != '') ele.classList.add(className);
  ele.textContent = textContent;
  return ele;
}

// here i initially wanted to do smth with function appendChildren(parent, child1, child2, child3) and so on and then check if child2 is undefined then dont do parent.appendChild bla bla bla but then i learned about Rest Parameters :o
// its lwk useless here but its a cool function to have in bigger projects so i kept it here

function appendChildren(parent, ...children) {
  children.forEach((child) => {
    if (child) {
      parent.appendChild(child);
    }
  });
}

function renderSite() {
  const body = document.querySelector('body');

  const wrapper = makeEle('div', 'wrapper', '');

  const header = document.createElement('header');
  const howTitleDiv = makeEle('div', 'how-title', 'How to play?');
  const tutorialDiv = makeEle('div', 'tutorial', '');
  tutorialDiv.innerHTML =
    'You get your current number, you then <br> guess if the hidden number is either higher or lower. You see your <br> current score, and the best score you had. The numbers can be 0 - 100';

  const gameBoardDiv = makeEle('div', 'game-board', '');
  const currentNumberDiv = makeEle('div', 'current-number', '67');
  const anticipationDiv = makeEle('div', '', 'Hidden Number is ...');
  const buttonsDiv = makeEle('div', 'buttons-div', '');
  const lowerButton = makeEle('button', 'lower', 'LOWER');
  const hiddenNumber = makeEle('div', 'hidden-number', '10');
  const higherButton = makeEle('button', 'higher', 'HIGHER');
  const resultDiv = makeEle('div', 'result', 'FUCK');
  const scoreDiv = makeEle('div', 'score', 'Score :3');
  const bestDiv = makeEle('div', 'best', 'Best: 10');

  body.appendChild(wrapper);
  appendChildren(wrapper, header, gameBoardDiv);
  appendChildren(header, howTitleDiv, tutorialDiv);
  appendChildren(
    gameBoardDiv,
    currentNumberDiv,
    anticipationDiv,
    buttonsDiv,
    resultDiv,
    scoreDiv,
    bestDiv,
  );
  appendChildren(buttonsDiv, lowerButton, hiddenNumber, higherButton);

  console.log('hi lol');
}

export { renderSite };
