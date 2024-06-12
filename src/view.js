export const renderItems = (data) => {
  const ulElement = document.createElement("ul");

  data.forEach((objeto) => {
    const liElement = document.createElement("li");
    liElement.classList.add("card");
    liElement.setAttribute("itemscope", "");
    liElement.setAttribute("itemtype", "TecnologiasDeProgramacion");

    liElement.innerHTML = `
        <div class="card-image">
          <img class="image" src="${objeto.imageUrl}" alt="${objeto.name}" />
          <span class="card-label type" itemprop="type">${objeto.facts.type}</span>
          <img src="assets/fire.svg" alt="difficulty level" class="icon ${objeto.facts.difficultyLevel}" itemprop="difficultyLevel" />
          <span class="card-label field" itemprop="aplicationField">${objeto.facts.aplicationField}</span>
        </div>
        <div class="card-content">
          <h3 class="card-text name" itemprop="name">${objeto.name}</h3>
          <p class="card-text description" itemprop="description">${objeto.description}</p>
          <span class="card-text year" itemprop="yearOfCreation">Creado en: ${objeto.facts.yearOfCreation}</span>
          <span class="card-text creator" itemprop="creator">Autor: ${objeto.facts.creator}</span>
          <span class="card-text users" itemprop="percentageOfUsers">${objeto.facts.percentageOfUsers}</span>
        </div>
      `;

    //Añadimos los li al elemento ul
    ulElement.appendChild(liElement);
  });
  return ulElement;
};
