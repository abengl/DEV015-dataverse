export const renderItems = (data) => {
  const ulElement = document.createElement("ul");

  data.forEach((objeto) => {
    const liElement = document.createElement("li");
    liElement.classList.add("card");
    liElement.setAttribute("itemscope", "");
    liElement.setAttribute("itemtype", "https://schema.org/CreativeWork");
    liElement.setAttribute("data-id", objeto.id);

    liElement.innerHTML = ` 
        <div class="card-image">
          <img class="image" src="${objeto.imageUrl}" alt="${objeto.name}" itemprop="image"/>
        </div>
        <div class="card-content">
          <div class="name-content">
            <h3 class="card-text name" itemprop="name">${objeto.name}</h3>
            <img class="name-image" src="${objeto.extraInfo.logoUrl}" alt="${objeto.name}" itemprop="image"/>
          </div>
          <p class="card-text description" itemprop="description">${objeto.shortDescription}</p>
          <span class="card-text year" itemprop="dateCreated"><span class="bold">Creado en:</span> ${objeto.facts.yearOfCreation}</span>
          <span class="card-text creator" itemprop="creator"><span class="bold">Autor:</span> ${objeto.facts.creator}</span>
          <span class="card-text users" itemprop="usageInfo">${objeto.facts.percentageOfUsers}</span>
        </div>
        <div class="label-container">
            <div class="item-label type">
              <img class="label-icon type" src="${objeto.extraInfo.iconTypeUrl}" alt="Type" itemprop="image"/>
              <span class="card-label type" itemprop="additionalType">Tipo ${objeto.facts.type}</span>
            </div>
            <div class="item-label application">
              <img class="label-icon application" src="${objeto.extraInfo.iconApplicationUrl}" alt="Application" itemprop="image"/>
              <span class="card-label field" itemprop="exampleOfWork">Aplicación ${objeto.facts.applicationField}</span>
            </div>
            <div class="item-label difficulty">
              <img class="label-icon ${objeto.facts.difficultyLevel}" src="/assets/icons/fire.svg" alt="difficulty level" itemprop="image"/>
              <span class="card-label difficulty" itemprop="educationalLevel">Dificultad ${objeto.facts.difficultyLevel}</span>
            </div>
          </div>
      `;
    //Añadimos los li al elemento ul
    ulElement.appendChild(liElement);
  });
  return ulElement;
};

export const renderRanking = (data) => {
  const ulElement = document.createElement("ul");

  data.forEach((objeto) => {
    const liElement = document.createElement("li");
    liElement.classList.add("card");
    liElement.setAttribute("itemscope", "");
    liElement.setAttribute("itemtype", "https://schema.org/CreativeWork");
    liElement.setAttribute("data-id", objeto.id);

    liElement.innerHTML = ` 
        <div class="card-image">
          <img class="image" src="${objeto.imageUrl}" alt="${objeto.name}" itemprop="image"/>
        </div>
        <div class="card-content">
          <div class="name-content">
            <h3 class="card-text name" itemprop="name">${objeto.name}</h3>
            <img class="name-image" src="${objeto.extraInfo.logoUrl}" alt="${objeto.name}" itemprop="image"/>
          </div>
          <p class="card-text description" itemprop="description">${objeto.shortDescription}</p>
          <span class="card-text year" itemprop="dateCreated"><span class="bold">Creado en:</span> ${objeto.facts.yearOfCreation}</span>
          <span class="card-text creator" itemprop="creator"><span class="bold">Autor:</span> ${objeto.facts.creator}</span>
          <span class="card-text users" itemprop="usageInfo">${objeto.facts.percentageOfUsers}</span>
        </div>
        <div class="label-container">
            <div class="item-label type">
              <img class="label-icon type" src="${objeto.extraInfo.iconTypeUrl}" alt="Type" itemprop="image"/>
              <span class="card-label type" itemprop="additionalType">Tipo ${objeto.facts.type}</span>
            </div>
            <div class="item-label application">
              <img class="label-icon application" src="${objeto.extraInfo.iconApplicationUrl}" alt="Application" itemprop="image"/>
              <span class="card-label field" itemprop="exampleOfWork">Aplicación ${objeto.facts.applicationField}</span>
            </div>
            <div class="item-label difficulty">
              <img class="label-icon ${objeto.facts.difficultyLevel}" src="/assets/icons/fire.svg" alt="difficulty level" itemprop="image"/>
              <span class="card-label difficulty" itemprop="educationalLevel">Dificultad ${objeto.facts.difficultyLevel}</span>
            </div>
          </div>
          <div class="card-hover">
            <h3 class="title-hover"></h3>
          </div>
      `;
    //Añadimos los li al elemento ul
    ulElement.appendChild(liElement);
  });
  return ulElement;
};
