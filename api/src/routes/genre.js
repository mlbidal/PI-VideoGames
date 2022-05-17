const { Router } = require("express");
const { Genre } = require("../db");
const axios = require("axios");
const router = Router();
const { API_KEY } = process.env;

//[ ] GET /genres:
//Obtener todos los tipos de géneros de videojuegos posibles
//En una primera instancia deberán traerlos desde rawg y guardarlos en su propia base de datos
// y luego ya utilizarlos desde alli

router.get("/" ,async(req , res) => {
// me traigo los datos (generos) de la api para guardarlos en la db (genres) y usarlos de la db. 
//Esto lo deberia hacer 1 sola vez.
    try {
        const rawg = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)   //entra a la api
        rawg.data.results.forEach((g) => {
            Genre.findOrCreate({ //uso el findOrcreate en lugar del create para q no me duplique la info
                where:{ //donde el id y el nombre
                    id: g.id,
                    name: g.name
                },
            });
        });
        //El método findAll() nos trae todos los registros de esta tabla y para acceder a 
        //ellos simplemente se ejecuta el método toJSON() que nos da un objeto con la información
        const allGenre = await Genre.findAll(); //me guardo todas los generos en el modelo de la db
        res.json(allGenre);
    } catch (error) {
        res.status(404).json({ error: "Genre not found" })
    };
});

module.exports = router;