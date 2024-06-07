export const renderItems = (data) => {
  // Creamos el elemento ul
  const ulElement = document.createElement("ul");
  //Iteramos la data
  data.forEach((objeto) => {
    //Creamos cada li
    const liElement = document.createElement('li');
    liElement.classList.add('card');
    liElement.innerHTML = `
      <dl itemscope itemtype="TecnologiasDeProgramacion">
        <img src="${objeto.imageUrl}" alt="${objeto.name}" />
        <dt>Tipo:</dt><dd class="card-label type" itemprop="type">${objeto.facts.type}</dd>
        <dt>Dificultad:</dt><dd class="card-label difficultyLevel" itemprop="difficultyLevel">${objeto.facts.difficultyLevel}</dd>
        <dt>Nombre:</dt><dd class="card-text name" itemprop="name">${objeto.name}</dd>
        <dt>Descripción:</dt><dd class="card-text description" itemprop="description">${objeto.description}</dd>
        <dt>Año:</dt><dd class="card-text year" itemprop="yearOfCreation">Creado en: ${objeto.facts.yearOfCreation}</dd>
        <dt>Creador:</dt><dd class="card-text creator" itemprop="creator">Autor: ${objeto.facts.creator}</dd>
        <dt>Usuarios:</dt><dd class="card-text users" itemprop="percentageOfUsers">${objeto.facts.percentageOfUsers}</dd>
        <dt>Campo:</dt><dd class="card-label field" itemprop="aplicationField">${objeto.facts.aplicationField}</dd>
      </dl>
      `;

    //Añadimos los li al elemento ul
    ulElement.appendChild(liElement);
  });
  return ulElement;
};