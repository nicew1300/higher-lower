import './styles/global.css';
import { renderSite } from './modules/dom.js';
import { initializeGame } from './modules/logic.js';

const elements = renderSite();
initializeGame();

export default elements;
