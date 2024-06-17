import { filterData, sortData } from "./dataFunctions.js";
import { renderItems } from "./view.js";
import data from "./data/dataset.js";

const mainElement = document.getElementById("root");
let ulElement = renderItems(data);
mainElement.appendChild(ulElement);

/*
function resetSelectIndex(selectElement) {
  selectElement.selectedIndex = 0;
}
  */

function displayCards(data) {
  mainElement.removeChild(ulElement);
  ulElement = renderItems(data);
  mainElement.appendChild(ulElement);
}

document.addEventListener("DOMContentLoaded", () => {
  
  const filterSelectType = document.querySelector("#type-select");
  const filterSelectApplication = document.querySelector("#applicationField-select"); 
  const orderSelect = document.querySelector("#order-select");

  filterSelectType.addEventListener("change", (event) => {
    const selectedValueType = event.target.value;
    const filterItemsType = filterData(data, "type", selectedValueType);
    // resetSelectIndex(filterSelectApplication);
    displayCards(filterItemsType);
  });

  filterSelectApplication.addEventListener("change", (event) => {
    const selectedValue = event.target.value;
    const filterItemsApplication = filterData(data, "applicationField", selectedValue);
    //resetSelectIndex(filterSelectType);
    displayCards(filterItemsApplication);
  });

  orderSelect.addEventListener("change",(event) => {
    const selectedValueOrder = event.target.value;
    const orderItemsName = sortData(data, "name", selectedValueOrder);
    displayCards(orderItemsName);

  }); 
});
