//import { example } from './dataFunctions.js';
import { renderItems } from "./view.js";

import data from "./data/dataset.js";

//console.log(example, renderItems(data), data);

const mainElement = document.getElementById("root");

/* Para remover el ul por default creado en index.html */
const ulDefault = document.querySelector("ul");
ulDefault.parentNode.removeChild(ulDefault);

/* Creando un nuevo ul y sus li con renderItems*/
const ulElement = renderItems(data);
mainElement.appendChild(ulElement);

/* Variables para revisar la clase de los li */
const liElements = document.querySelectorAll(".card");
const allHaveClass = Array.from(liElements).every((li) =>
  li.classList.contains("card")
);
console.log('Todos los li tienen la clase "card":', allHaveClass);
