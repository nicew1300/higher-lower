// now, make what you wrote in template.html here in javascript, so that we can use it in the game logic and also so you learn react concepts

function makeEle(tag, className, textContent) {
  const ele = document.createElement(tag);
  if (className != undefined) ele.classList.add(className);
  if (textContent != undefined) ele.textContent = textContent;
  return ele;
}

// here i initially wanted to do smth with function appendChildren(parent, child1, child2, child3) and so on and then check if child2 is undefined then dont do parent.appendChild bla bla bla but then i learned about Rest Parameters :o

function appendChildren(parent, ...children) {}

function renderSite() {
  const body = document.querySelector('body');

  const wrapper = makeEle('div', 'wrapper', '');

  const header = document.createElement('header');
  const span = document.createElement('span', '', 'How to play?');
  span.textContent = 'How to play?';
  header.innerHTML =
    'You get your current number, you then <br> guess if the hidden number is either higher or lower. You see your <br> current score, and the best score you had. The numbers can be 0 - 100';

  const gameBoardDiv = makeEle('div', 'game-board', '');

  const currentNumberDiv = makeEle('div', 'current-number', '67');

  const anticipationDiv = makeEle('div', '', 'Hidden Number is ...');

  const buttonsDiv = makeEle('div', 'buttons-div', '');
}

export { renderSite };
