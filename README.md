# TechGenius

## Índice

* [1. Resumen del proyecto](#1-resumen-del-proyecto)
* [2. Definición de producto](#2-definición-de-producto)
* [3. Historias de Usuario](#3-historias-de-usuario)
* [4. Generación de datos](#4-generación-de-datos)
* [5. Diseño de Interfaz y Prototipos](#5-diseño-de-interfaz-y-prototipos)
* [6. Lenguajes y Herramientas Utilizadas](#6-lenguajes-y-herramientas-utilizadas)
* [7. Responsividad](#7-responsividad)
* [8. Testing](#8-testing)
* [9. Trabajo Colaborativo](#9-trabajo-colaborativo)

***

## 1. Resumen del proyecto

**TechGenius** es una plataforma web diseñada para estudiantes de programación que buscan mantenerse al día con las últimas tendencias tecnológicas. 

La interfaz intuitiva permite explorar tecnologías clasificadas por tipo de tecnologías, como _Lenguajes de Programación, Framework o Markup_, y por campos de aplicación, como _Frontend, Backend  o Data Science_. Los usuarios pueden ordenar los resultados para encontrar información relevante rápidamente y acceder a un ranking actualizado de las tecnologías de programación más populares. Además, la función de limpieza de filtros con un solo clic facilita la navegación y la personalización de la búsqueda. TechGenius es tu puerta de entrada al futuro tecnológico, proporcionando una manera fácil y eficiente de descubrir y dominar las tendencias actuales en tecnología.

## 2. Definición de producto

En base a un análisis previo, identificamos que el **usuario de TechGenius** incluye estudiantes de programación. Este público busca una herramienta que les permita explorar, aprender y dominar las tecnologías emergentes de manera eficiente y organizada.

### Necesidades:
* **Información Rápida y Clara:** Los estudiantes necesitan acceso a información precisa y comprensible sobre las tecnologías de programación de manera rápida para facilitar su proceso de aprendizaje y toma de decisiones.

* **Filtrado de Información:** Los usuarios requieren la capacidad de filtrar la información según el tipo de tecnología y su campo de aplicación, permitiéndoles enfocarse en las áreas más relevantes para sus intereses y necesidades de aprendizaje.

* **Ordenamiento de Datos:** Es crucial poder ordenar la información filtrada para comparar fácilmente diferentes tecnologías de programación, ayudando a los estudiantes a tomar decisiones informadas sobre cuál aprender.

* **Acceso a Estadísticas:** Los estudiantes desean obtener estadísticas sobre la popularidad y características de las tecnologías de programación para entender mejor cuáles son los más relevantes y útiles en el mercado actual.

### Resolución de Necesidades del Usuario:

TechGenius es una solución web que responde a todas estas necesidades. La plataforma permite a los usuarios explorar y descubrir las últimas tendencias tecnológicas, ofreciendo la posibilidad de:

* **Visualización Dinámica:** Los usuarios pueden navegar por una interfaz intuitiva que presenta las tecnologías de manera visualmente atractiva y fácil de entender.
* **Filtros Avanzados:** Con un sistema de filtrado eficiente, los usuarios pueden aplicar y limpiar filtros con un solo clic, permitiendo una búsqueda personalizada y rápida.
* **Ordenación Flexible:** TechGenius ofrece opciones de ordenación que facilitan la comparación y el análisis de diferentes tecnologías según los criterios seleccionados por el usuario.
* **Acceso a Rankings:** Los usuarios pueden ver y analizar rankings actualizados de los lenguajes de programación más populares y otras métricas relevantes del campo tecnológico.

## 3. Historias de Usuario
### Historia de Usuario 1: 
Quiero visualizar una lista de tecnologías de programación con sus principales datos en una tarjeta para obtener información rápida y relevante sobre cada lenguaje.

**Definición de Terminado (DoD):**  
La aplicación muestra una lista de tarjetas con los datos solicitados, contenidas en un `<ul>` con el atributo `id="root"`, destacando propiedades clave. El código está bien estructurado, comentado y probado.

**Criterios de Aceptación (AC):**  
La lista de tarjetas se muestra correctamente al cargar la página, cada tarjeta contiene la información esperada y está estructurada usando microdatos.

### Historia de Usuario 2:  
Quiero poder filtrar la lista de tecnologías de programación por su tipo o campo de aplicación para encontrar fácilmente aquellos que son relevantes para mi área de especialización.

**Definición de Terminado (DoD):**  
La aplicación incluye un `<select>` con `data-testid="select-filter"` para filtrar datos. El código está bien estructurado, comentado y probado.

**Criterios de Aceptación (AC):**  
Al seleccionar el filtro, la lista de tarjetas se actualiza mostrando solo las tecnologías correspondientes, siendo el filtro intuitivo.

### Historia de Usuario 3:  
Quiero poder ordenar la lista de tecnologías de programación por su _name_ para visualizar las tecnologías de mayor (descendente) y menor uso (ascendente).

**Definición de Terminado (DoD):**  
La aplicación incluye un `<select>` con `data-testid="select-sort"` para ordenar datos de manera ascendente y descendente. La funcionalidad está bien implementada, conectada a la interfaz y probada.

**Criterios de Aceptación (AC):**  
Puedo ver un selector para ordenar la lista de tarjetas por su _name_ en la aplicación. Al seleccionar un orden de clasificación, la lista de tarjetas se actualiza correctamente.

### Historia de Usuario 4:
Quiero obtener la tecnologías de programación mas usada, mas antiga y más actual, para identificar rápidamente la información proporcionada.

**Definición de Terminado (DoD):**  
La interfaz muestra la tecnologías de programación mas usada, mas antiga y más actual mediante un `<Button>`. La funcionalidad es implementada y probada.

**Criterios de Aceptación (AC):**  
Puedo ver claramente la tecnologías de programación mas usada, mas antiga y más actual en la interfaz y seleccionar una tecnología para ver mas información acerca de la misma.

## 4. Generación de datos

A continuación, se adjuntan capturas de pantalla del prompt solicitado a la IA para la generación del conjunto de datos utilizado en la aplicación web. [ChatGPT](https://chatgpt.com/share/1b31dc39-f42c-4c34-835d-4a7035d9d8b0)

![promp-IA1](https://cdn.glitch.global/25528f5b-58e5-4224-ae4c-5f2f3f710606/prompt_1.png?v=1719353239272)
![promp-IA2](https://cdn.glitch.global/25528f5b-58e5-4224-ae4c-5f2f3f710606/prompt_2.png?v=1719353251187)
![promp-IA3](https://cdn.glitch.global/25528f5b-58e5-4224-ae4c-5f2f3f710606/prompt_3.png?v=1719353261369)
![promp-IA4](https://cdn.glitch.global/25528f5b-58e5-4224-ae4c-5f2f3f710606/prompt_4.png?v=1719353267549)
![promp-IA5](https://cdn.glitch.global/25528f5b-58e5-4224-ae4c-5f2f3f710606/prompt_5.png?v=1719353271827)
![promp-IA6](https://cdn.glitch.global/25528f5b-58e5-4224-ae4c-5f2f3f710606/prompt_6.png?v=1719353275652)

Asi mismo, se adjunta captura de pantalla de la respuesta proporcionada por las IA.

![respuesta-IA](https://cdn.glitch.global/25528f5b-58e5-4224-ae4c-5f2f3f710606/prompt_data.png?v=1719353295581)


## 5. Diseño de Interfaz y Prototipos

La interfaz de **TechGenius** está diseñada para ofrecer una experiencia intuitiva y atractiva, permitiendo a los usuarios explorar, aprender y dominar tecnologías emergentes de manera eficiente y organizada. Con un enfoque en la usabilidad y la presentación clara de información, el diseño facilita la navegación y la comprensión de los datos sobre las tecnologías.

### Test de Usabilidad: 

Basándonos en los resultados del test de usabilidad realizado con una muestra de usuarios objetivos de la aplicación web, se identifican las siguientes necesidades que se abordaron para mejorar la experiencia del usuario:

* **Mejorar la jerarquía visual:**  El botón "Limpiar" debería colocarse antes que el TOP3, siguiendo el flujo de lectura natural de izquierda a derecha.

* **Refinar la sombra de las tarjetas:** La sombra solo debería mostrarse cuando se selecciona o se pasa por encima de una tarjeta, en lugar de estar presente constantemente, evitando la sensación de que todas las tarjetas están seleccionadas.

* **Aumentar el dinamismo en la versión desktop:**  Al aplicar un filtro u orden, se debe agregar un efecto visual que resalte el cambio realizado, proporcionando retroalimentación clara al usuario.

* **Reubicar los iconos en la versión desktop:** Los iconos del contenedor de texto deberían agruparse para mostrarse en una sola vista, mejorando la legibilidad y la comprensión de la información.

* **Comunicar claramente la funcionalidad de las tarjetas:** Es necesario implementar mecanismos visuales o de texto que indiquen al usuario que las tarjetas son interactivas y que se puede hacer clic en ellas para acceder a más información.

* **Solucionar el error que muestra contenido idéntico en todas las tarjetas:** Se debe corregir el error que provoca que todas las tarjetas muestren el mismo contenido, brindando información precisa y relevante a los usuarios.

De acuerdo a lo anterior, a la frecuencia y el impacto de los problemas encontrados, se  priorizó la implementación de las mejoras para optimizar la experiencia del usuario de manera eficiente.

### Prototipos de Alta Fidelidad: 

El prototipo de alta fidelidad de **TechGenius** es la versión más detallada y refinada de la interfaz, integrando todos los estilos visuales y elementos interactivos para ofrecer una experiencia de usuario completa y envolvente. Este prototipo incorpora la estética final, la funcionalidad completa y la interacción intuitiva, sirviendo como una base precisa para el desarrollo final de la aplicación. 
A continuación, se adjuntan algunas imágenes del prototipo de alta fidelidad de la aplicación web.

![prototipo-desktop](https://cdn.glitch.global/25528f5b-58e5-4224-ae4c-5f2f3f710606/prototipo_desktop.png?v=1719354048951)

![prototipo-mobile](https://cdn.glitch.global/25528f5b-58e5-4224-ae4c-5f2f3f710606/prototipo_mobile.png?v=1719354044777)

## 6. Lenguajes y Herramientas Utilizadas

En el desarrollo de nuestro proyecto, hemos utilizado una variedad de lenguajes de programación y herramientas para garantizar su funcionalidad y diseño. A continuación, detallamos los principales lenguajes y herramientas que forman parte de nuestro proyecto:

### Lenguajes de Programación
- **HTML Semántico:** Utilizado para la estructura y el marcado de nuestra página web, permitiendo definir la disposición y los elementos visuales de manera clara y accesible.
- **CSS Responsive:** Empleado para el diseño y la presentación de nuestra interfaz, aplicando estilos, colores y diseños que mejoran la experiencia del usuario. Se han utilizado media queries y flexbox para asegurar una visualización óptima en diferentes dispositivos y tamaños de pantalla.
- **JavaScript (JS):** Fundamental para la interactividad y la funcionalidad dinámica de nuestra aplicación web. Utilizado para la creación dinámica de HTML, manejo del DOM con event listeners y funciones que permiten crear acciones y comportamientos en tiempo real.

### Herramientas Adicionales
- **Git:** Utilizado para el control de versiones, permitiendo un seguimiento eficiente de los cambios en el código y facilitando la colaboración entre los desarrolladores.
- **Jest:** Utilizado para el desarrollo de pruebas unitarias en JavaScript, garantizando la calidad y robustez de nuestro código al verificar su funcionamiento y rendimiento.
- **Figma:** Utilizado para el prototipado y diseño de la interfaz, permitiendo la creación de maquetas visuales y la planificación de la experiencia de usuario. [Prototipo-figma](https://www.figma.com/design/PRBukRP40w0dqTphu9ZA5M/Dataverse-Prototipo?node-id=118-988&t=polTYaCu9cdOh6zg-0)
- **Historias de Usuario:** Utilizadas para definir los requisitos y expectativas del usuario, asegurando que el desarrollo del proyecto esté alineado con las necesidades del usuario final. [Historias-figma](https://https://www.figma.com/board/Xm4F1y1sbjGiUwCy44ffaX/Dataverse%3A-Historias-de-Usuario?node-id=0-1)

Estos lenguajes y herramientas nos han permitido crear una aplicación web completa y funcional, con un diseño atractivo y una experiencia de usuario optimizada.

El uso combinado de HTML semántico, CSS responsive, JavaScript y herramientas como Git, Jest y Figma nos ha proporcionado las herramientas necesarias para desarrollar una aplicación web robusta, interactiva y de calidad.

## 7. Responsividad

En el centro de nuestro diseño se encuentra la experiencia del usuario, y por ello, hemos priorizado la responsividad para garantizar una interacción óptima en cualquier dispositivo. Los elementos de la interfaz se adaptan dinámicamente, ajustándose a las pantallas de móviles, tabletas y ordenadores de escritorio, brindando una visualización clara y una navegación fluida.

Para lograr esta adaptabilidad, hemos implementado diversas técnicas de diseño y desarrollo:

* **Diseño responsive:** Los componentes de la interfaz se reconfiguran automáticamente para una visualización óptima en diferentes tamaños de pantalla, desde móviles compactos hasta pantallas de escritorio amplias.

* **Media Queries:** Empleamos Media Queries en CSS para aplicar estilos específicos según el tamaño de la pantalla, optimizando la presentación de la información y la navegación en cada dispositivo.

* **Pruebas exhaustivas:** Realizamos pruebas meticulosas en una amplia gama de dispositivos y resoluciones para garantizar la compatibilidad y ofrecer una experiencia uniforme en todos ellos.

## 8. Testing

A través de los tests unitarios pudimos corroborar la funcionalidad, parámetros y valores retornados de nuestras funciones. Aquí detallamos algunos problemas de usabilidad detectados y cómo los mejoramos en nuestra propuesta final:

### Problemas de Usabilidad Detectados
1. **Filtro Inconsistente:** Durante los tests unitarios, encontramos que el filtrado por ciertos campos no devolvía resultados consistentes, especialmente cuando se utilizaban valores específicos o vacíos.
2. **Ordenación Incorrecta:** Detectamos que la función de ordenación no siempre devolvía los resultados en el orden esperado, lo que afectaba la usabilidad al intentar listar tecnologías por popularidad o nombre.
3. **Estadísticas Inexactas:** Al probar la función de cálculo de estadísticas, notamos que algunos resultados no coincidían con los datos esperados, especialmente en el top de lenguajes más populares.

### Mejoras Implementadas
1. **Mejora en el Filtrado:**
   - Se ajustaron los parámetros y condiciones en la función `filterData` para asegurar que los filtros se aplican correctamente, incluso cuando se utilizan valores específicos o vacíos.
   - Se añadieron casos de prueba adicionales para cubrir más escenarios de filtrado, garantizando resultados consistentes.

2. **Corrección de la Ordenación:**
   - La función `sortData` fue revisada y optimizada para asegurar que los resultados se ordenen correctamente en orden ascendente y descendente.
   - Se implementaron pruebas unitarias adicionales para verificar la ordenación en diferentes campos y órdenes, mejorando la confiabilidad de la función.

3. **Precisión en las Estadísticas:**
   - La función `computeStats` fue mejorada para asegurar que las estadísticas reflejen con precisión los datos actuales, especialmente en el cálculo del top de lenguajes más populares.
   - Se añadieron pruebas unitarias para validar los resultados de las estadísticas, asegurando que los lenguajes más populares se determinen correctamente.

Estos ajustes no solo mejoraron la precisión y confiabilidad de nuestras funciones, sino que también optimizaron la experiencia del usuario al utilizar nuestra aplicación. La realización de tests unitarios fue crucial para identificar y resolver estos problemas de usabilidad, garantizando un producto final de alta calidad.

## 8. Trabajo Colaborativo
Este proyecto fue diseñado y desarrollado en colaboración, donde cada miembro del equipo aportó su conocimiento y experiencia para lograr un resultado exitoso. A continuación, presentamos nuestras contribuciones y las herramientas que utilizamos para facilitar el trabajo en equipo:

### Equipo de Diseño y Desarrollo
- [Licet Lemus](https://github.com/LicetLemus)
- [Alessandra Godoy](https://github.com/abengl)

Hemos trabajado en conjunto para llevar a cabo todas las etapas de este proyecto, desde el diseño de la interfaz, el desarrollo de las funcionalidades, hasta la realización de pruebas unitarias, garantizando un resultado de alta calidad.

### Herramientas de Colaboración
- **Git:** Utilizado para el control de versiones, permitiendo un seguimiento eficiente de los cambios en el código y facilitando la colaboración entre los desarrolladores.
- **GitHub Projects:** Empleado para la gestión de tareas y el seguimiento del progreso del proyecto, asegurando que todas las actividades estén bien organizadas y asignadas adecuadamente.
- **GitHub Issues:** Utilizado para el seguimiento de errores, mejoras y nuevas funcionalidades, permitiendo una comunicación clara y estructurada sobre el estado del proyecto y las tareas pendientes.

El trabajo en equipo y la colaboración han sido fundamentales para el éxito de este proyecto, permitiéndonos combinar nuestras habilidades y esfuerzos de manera efectiva para alcanzar nuestros objetivos.