export const renderItems = (data) => {
  // Creamos el elemento ul
  const ulElement = document.createElement("ul");
  //Iteramos la data
  data.forEach((objeto) => {
    //Creamos cada li
    const liElement = document.createElement("li");
    liElement.classList.add("card");
    liElement.setAttribute("itemscope", "");
    liElement.setAttribute("itemtype", "TecnologiasDeProgramacion");
    liElement.innerHTML = `
        <div class="card-image">
        <img src="${objeto.imageUrl}" alt="${objeto.name}" />
        </div>
        <div class="card-content">
        <span class="card-label type" itemprop="type">${objeto.facts.type}</span>
        <span class="card-label difficultyLevel" itemprop="difficultyLevel">${objeto.facts.difficultyLevel}</span>
        <span class="card-text name" itemprop="name">${objeto.name}</span>
        <span class="card-text description" itemprop="description">${objeto.description}</span>
        <span class="card-text year" itemprop="yearOfCreation">Creado en: ${objeto.facts.yearOfCreation}</span>
        <span class="card-text creator" itemprop="creator">Autor: ${objeto.facts.creator}</span>
        <span class="card-text users" itemprop="percentageOfUsers">${objeto.facts.percentageOfUsers}</span>
        <span class="card-label field" itemprop="aplicationField">${objeto.facts.aplicationField}</span>
        </div>
      `;

    //Añadimos los li al elemento ul
    ulElement.appendChild(liElement);
  });
  return ulElement;
};
