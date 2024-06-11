//import { example } from './dataFunctions.js';
import { renderItems } from "./view.js";
import data from "./data/dataset.js";

const mainElement = document.getElementById("root");
const ulElement = renderItems(data);
mainElement.appendChild((ulElement));
