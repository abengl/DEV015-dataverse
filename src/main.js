import { filterData, sortData } from "./dataFunctions.js";
import { renderItems } from "./view.js";
import data from "./data/dataset.js";

let filteredData = data;
const mainElement = document.getElementById("root");
let ulElement = renderItems(data);
mainElement.appendChild(ulElement);

function resetSelectIndex(selectElement) {
  selectElement.selectedIndex = 0;
}

function displayCards(data) {
  mainElement.removeChild(ulElement);
  ulElement = renderItems(data);
  mainElement.appendChild(ulElement);
}

document.addEventListener("DOMContentLoaded", () => {
  const filterSelectType = document.querySelector("#type-select");
  const filterSelectApplication = document.querySelector(
    "#applicationField-select"
  );
  const sortSelect = document.querySelector("#order-select");

  filterSelectType.addEventListener("change", (event) => {
    const selectedValueType = event.target.value;
    const filteredData = filterData(data, "type", selectedValueType);
    resetSelectIndex(filterSelectApplication);
    resetSelectIndex(sortSelect);
    displayCards(filteredData);
  });

  filterSelectApplication.addEventListener("change", (event) => {
    const selectedValue = event.target.value;
    filteredData = filterData(data, "applicationField", selectedValue);
    resetSelectIndex(filterSelectType);
    resetSelectIndex(sortSelect);
    displayCards(filteredData);
  });

  sortSelect.addEventListener("change", (event) => {
    const selectedValueOrder = event.target.value;
    const sortedItems = sortData(filteredData, "name", selectedValueOrder);
    displayCards(sortedItems);
  });
});
