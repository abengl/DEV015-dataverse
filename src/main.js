//import { example } from './dataFunctions.js';
import { renderItems } from "./view.js";
import data from "./data/dataset.js";

//console.log(example, renderItems(data), data);

const mainElement = document.getElementById("root");

/* Para remover el ul por default creado en index.html */
const ulDefault = document.querySelector("ul");
mainElement.removeChild(ulDefault);

/* Creando un nuevo ul y sus li con renderItems*/
const ulElement = renderItems(data);
mainElement.appendChild((ulElement));
