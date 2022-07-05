<h1 align="center">API VIDEOGAMES</h1>

<h3 align="center"> Objetivos del Proyecto:</h3>

- Construir una App utlizando React, Redux, Node y Sequelize.
- Afirmar y conectar los conceptos aprendidos en la carrera.
- Aprender mejores prácticas.
- Aprender y practicar el workflow de GIT.
- Usar y practicar testing.


 <h3 align="center"> Que se quiere lograr con el proyecto: </h3>

La idea general es crear una aplicación en la cual se puedan ver los distintos videojuegos disponibles junto con información relevante de los mismos utilizando la api externa [rawg](https://rawg.io/apidocs) y a partir de ella poder, entre otras cosas:

  - Buscar videjuegos
  - Filtrarlos / Ordenarlos
  - Agregar nuevos videojuegos


  <h3 align="center">Tecnologías necesarias:</h3>
- [ ] React
- [ ] Redux
- [ ] Express
- [ ] Sequelize - Postgres
- [ ] CSS Puro

<h3  align="left">Frontend</h3>

CARACTERISTICAS:

__Pagina inicial__: deben armar una landing page con
- [ ] Alguna imagen de fondo representativa al proyecto
- [ ] Botón para ingresar al home (`Ruta principal`)

<!-- ![landing](https://user-images.githubusercontent.com/82724532/177237789-be316c08-447c-4d62-a436-24d0b5edbef6.jpg) -->

__Ruta principal__: debe contener
- [ ] Input de búsqueda para encontrar videojuegos por nombre
- [ ] Área donde se verá el listado de videojuegos. Deberá mostrar su:
  - Imagen
  - Nombre
  - Géneros
- [ ] Botones/Opciones para filtrar por género y por videojuego existente o agregado por nosotros
- [ ] Botones/Opciones para ordenar tanto ascendentemente como descendentemente los videojuegos por orden alfabético y por rating
- [ ] Paginado para ir buscando y mostrando los siguientes videojuegos, 15 juegos por pagina, mostrando los primeros 15 en la primer pagina.


<!-- ![home](https://user-images.githubusercontent.com/82724532/177238394-fa5978d7-0465-4977-a09f-16db25de14e3.jpg) -->

__Ruta de detalle de videojuego__: debe contener
- [ ] Los campos mostrados en la ruta principal para cada videojuegos (imagen, nombre, y géneros)
- [ ] Descripción
- [ ] Fecha de lanzamiento
- [ ] Rating
- [ ] Plataformas

<!-- ![detalle](https://user-images.githubusercontent.com/82724532/177237856-b44175e7-168c-44f9-92e2-9513c093f2e8.jpg) -->

__Ruta de creación de videojuegos__: debe contener
- [ ] Un formulario __controlado con JavaScript__ con los siguientes campos:
  - Nombre
  - Descripción
  - Fecha de lanzamiento
  - Rating
- [ ] Posibilidad de seleccionar/agregar varios géneros
- [ ] Posibilidad de seleccionar/agregar varias plataformas
- [ ] Botón/Opción para crear un nuevo videojuego

<!-- ![creacion](https://user-images.githubusercontent.com/82724532/177237964-e8085e9f-6160-43d4-bce2-f5f48a24db1b.jpg) -->

> El formulario de creación está validado con JavaScript y no sólo con validaciones HTML. 
__Componentes de Not Found:
 - [ ] Componentes para renderizar cuando no hay resultados de la búsqueda
 - No se encuentra receta ni id

<!-- ![notfoundrecipe](https://user-images.githubusercontent.com/82724532/177237983-7a57856e-bdb4-4c0b-a658-237d8b5f0a01.jpg) -->

- Se ingresa una ruta que no existe.

<!-- ![notfoundpage](https://user-images.githubusercontent.com/82724532/177238001-56b68fb0-11ad-4407-bf33-9888686a4ba5.jpg) -->

<h3  align="left">Base de datos</h3>

TECNOLOGÍAS NECESARIAS:

- [ ] PostgreSQL

CARACTERISTICAS:

El modelo de la base de datos tiene las siguientes entidades:

- [ ] Videojuego con las siguientes propiedades:
  - ID: * No puede ser un ID de un videojuego ya existente en la API rawg
  - Nombre *
  - Descripción *
  - Fecha de lanzamiento
  - Rating
  - Plataformas *
- [ ] Genero con las siguientes propiedades:
  - ID
  - Nombre


<h3  align="left">Backend</h3>

TECNOLOGÍAS NECESARIAS:

- [ ] Node JS
- [ ] Express
- [ ] Sequelize


- [ ] __GET /videogames__:
  - Obtener un listado de los videojuegos
  - Debe devolver solo los datos necesarios para la ruta principal
- [ ] __GET /videogames?name="..."__:
  - Obtener un listado de las primeros 15 videojuegos que contengan la palabra ingresada como query parameter
  - Si no existe ningún videojuego mostrar un mensaje adecuado
- [ ] __GET /videogame/{idVideogame}__:
  - Obtener el detalle de un videojuego en particular
  - Debe traer solo los datos pedidos en la ruta de detalle de videojuego
  - Incluir los géneros asociados
- [ ] __GET /genres__:
  - Obtener todos los tipos de géneros de videojuegos posibles
  - En una primera instancia deberán traerlos desde rawg y guardarlos en su propia base de datos y luego ya utilizarlos desde allí
- [ ] __POST /videogame__:
  - Recibe los datos recolectados desde el formulario controlado de la ruta de creación de videojuego por body
  - Crea un videojuego en la base de datos

