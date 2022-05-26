const { Router } = require("express");
const { Videogame, Genre } = require("../db");
const router = Router();
const { API_KEY } = process.env;
const axios = require("axios");

//https://api.rawg.io/api/games/{id}

router.get("/:id", async (req, res) => {
    const { id } = req.params
    let detail;
    if (id.includes("-")) {
      // este if es para encontrar los games que ya estan creados
        try {
            detail = await Videogame.findOne({
                where: {
                    id: id,
                },
                include: {
                    model: Genre,
                    attributes: ["name"],
                },
            });
        } catch (e) {
            console.log("Error en el primer entry", e);
        }
    } else {
      // si el apk no incluye "-"
        try {
            const response = await axios.get(
                `https://api.rawg.io/api/games/${id}?key=${ API_KEY }`
            );
            const elem = response.data;
            detail = {
                id: elem.id,
                name: elem.name,
                description: elem.description_raw,
                image: elem.background_image,
                rating: elem.rating,
                released: elem.released,
                genres: elem.genres,
                platforms: elem.platforms.map((p) => p.platform.name).join(", "),
            };

        } catch (e) {
            console.log("Error en el segundo entry", e);
        }
    }
    if (detail) {
        res.send(detail);
    } else {
        res.status(404).send();
    }
});

router.post('/', async (req , res) => {
    const {   
        name,
        image,
        genres,
        description,
        released,
        rating,
        platforms,
        createdInDb,
    } = req.body

    const createVideoGame = await Videogame.create({ //creo el personaje desde la base db
        name,
        image,
        description,
        released,
        rating,
        platforms,
        createdInDb
    })
    const searchGenreDB = await Genre.findAll({ //me traigo los generos y luego comparo por nombre. 
                                                //El correcto lo agrego abajo con el "AddGenre()"
        where: {name: genres},
    });
    createVideoGame.addGenre(searchGenreDB) //le agrego al video game el genero q me traigo de la db
    res.send("Videogame created successfully")
})


module.exports = router;

/*
const STATUS_USER_ERROR = 422;

router.delete('/post', (req, res) => {
  const { id } = req.body;

  if(!id) return res.status(STATUS_USER_ERROR).json({
    error: "No se recibieron los parámetros necesarios para eliminar un Post"
  })

  const post = posts.find((post) => post.id === id)

  if(!post) return res.status(STATUS_USER_ERROR).json({
    error: "El id no corresponde con un Post existente"
  })

  posts = posts.filter((post) => post.id !== id)

  return res.send({success :true}
    )
})
*/