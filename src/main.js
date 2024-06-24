import { filterData, sortData, computeStats } from "./dataFunctions.js";
import { renderItems, renderRanking } from "./view.js";
import data from "./data/dataset.js";


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
  const orderSelect = document.querySelector("#order-select");
  const clearButton = document.querySelector('[data-testid="button-clear"]');
  const metricsButton = document.querySelector(".metrics");

  filterSelectType.addEventListener("change", (event) => {
    const selectedValueType = event.target.value;
    const filterItemsType = filterData(data, "type", selectedValueType);
    resetSelectIndex(filterSelectApplication);
    displayCards(filterItemsType);

    orderSelect.addEventListener("change", (event) => {
      const selectedValueOrder = event.target.value;
      const orderItemsName = sortData(
        filterItemsType,
        "name",
        selectedValueOrder
      );
      displayCards(orderItemsName);
    });
  });

  filterSelectApplication.addEventListener("change", (event) => {
    const selectedValue = event.target.value;
    const filterItemsApplication = filterData(
      data,
      "applicationField",
      selectedValue
    );
    resetSelectIndex(filterSelectType);
    displayCards(filterItemsApplication);

    orderSelect.addEventListener("change", (event) => {
      const selectedValueOrder = event.target.value;
      const orderItemsName = sortData(
        filterItemsApplication,
        "name",
        selectedValueOrder
      );
      displayCards(orderItemsName);
    });
  });

  orderSelect.addEventListener("change", (event) => {
    const selectedValueOrder = event.target.value;
    const orderItemsName = sortData(data, "name", selectedValueOrder);
    displayCards(orderItemsName);
  });

  clearButton.addEventListener("click", () => {
    displayCards(data);
  });

  metricsButton.addEventListener("click", () => {
    const metricsItems = computeStats(data);
    mainElement.removeChild(ulElement);
    ulElement = renderRanking(metricsItems);
    mainElement.appendChild(ulElement);
    const h3Elements = document.querySelectorAll(".title-hover");
    console.log(h3Elements);
    h3Elements[0].innerHTML = "Lenguage de Programación Más Usado";
    h3Elements[1].innerHTML = "Lenguage de Programación Más Antiguo";
    h3Elements[2].innerHTML = "Lenguage de Programación Más Reciente";
  });
});
