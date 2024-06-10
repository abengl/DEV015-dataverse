//import { example } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';


//console.log(example, renderItems(data), data);
const mainElement = document.getElementById('root');
mainElement.innerHTML = '';

const mainElement = document.getElementById('root');
mainElement.innerHTML = '';    //Para limpiar el main del ul previo

const ulElement = renderItems(data);
mainElement.appendChild(ulElement);