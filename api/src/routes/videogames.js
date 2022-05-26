const { getAllVideogames } = require('../controllers/videogames');
const {Router} = require('express');
const router = Router();

//[ ] GET /videogames:
//Obtener un listado de los videojuegos
//Debe devolver solo los datos necesarios para la ruta principal
//[ ] GET /videogames?name="...":
//Obtener un listado de las primeros 15 videojuegos que contengan la palabra ingresada como query parameter,
//osea nombre ingrasado en la url
//Si no existe ningún videojuego mostrar un mensaje adecuado

//UNIFICO LAS DOS RUTAS

router.get("/", async (req, res) => {
    try {
        const name = req.query.name; 
        let videogamesTotal = await getAllVideogames(); 
        if (name) { 
            let videogameName = await videogamesTotal.filter((e) =>
            e.name.toLowerCase().includes(name.toLowerCase()) 
            );
            videogameName.length 
            ?res.status(200).send(videogameName)
            :res.status(404).send(error);    
        } else { 
        res.status(200).send(videogamesTotal);
        }
    } catch (error) {
        console.log(error);
    }
});


module.exports = router;