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
        const name = req.query.name; //una variable q pregunta si hay un name por query(por url)
        let videogamesTotal = await getAllVideogames(); //llamo a la funcion controlada
        if (name) { //si hay un name que me pasan por query
            let videogameName = await videogamesTotal.filter((e) =>
            //uso el includes en lugar del === para q me traiga todos los q tienen el name y no solo el q es igual
            e.name.toLowerCase().includes(name.toLowerCase()) // me fijo si algun name incluye el name 
            //q pasa por query y uso tolowecase para no tener problemas con las mayus y min
            );
            videogameName.length 
            ?res.status(200).send(videogameName)
            :res.status(404).send(error);    
        } else { //si np hay un query, mando todos
        res.status(200).send(videogamesTotal);
        }
    } catch (error) {
        console.log(error);
    }
});


module.exports = router;