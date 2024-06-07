//import { example } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';

//console.log(example, renderItems(data), data);
const mainElement = document.getElementById('root');
mainElement.innerHTML = '';

const ulElement = renderItems(data);
mainElement.appendChild(ulElement);
