const { Videogame, Genre } = require("../db");
const { API_KEY } = process.env;
const axios = require("axios");

//armo las funciones controladas

const getApiInfo = async () => {
    try {
        //va a llamar al endpoint de la api y me traigo toda la info q nnecesito
        const arrVideogames = [];
        let apiUrl = `https://api.rawg.io/api/games?key=${API_KEY}`;
    //cada pagina renderiza 20 video juegos, entonces hago un for hasta 5 paginas
        for (let i = 0; i < 5; i++) { //i = 1  1<=5
            let pages = await axios.get(apiUrl); // traeme la info de la api 
            pages.data.results?.map((e) => { 
                arrVideogames.push({
                    id: e.id,
                    name: e.name,
                    image: e.background_image,
                    genres: e.genres?.map((el) => el.name), //puede tener mas de un genero
                    released: e.released,
                    rating: e.rating,
                    platforms: e.platforms?.map((el) => el.platform.name), //puede tener mas de una plataforma
                });
            });
            apiUrl = pages.data.next;
            console.log(apiUrl)
        }
        return arrVideogames;
    }catch{
        console.log(error);
    }
};



//attributes
const getDbInfo = async () => { //info de la base de datos.
    return await Videogame.findAll({ //relaciono el model Videogame con Genre
        include:{          // usamos el include de sequelize para relacionar los modelos. 
                           //Si no lo uso, no me traeria los videojuegos con los generos. 
            model: Genre, 
            atributes: ['name'],
            through: {
                atributes: [],
            },
        }
    })
};

const getAllVideogames = async () =>{
    const apiInfo = await getApiInfo(); //llamo y ejecuto la funcion de la api
    const dbInfo = await getDbInfo(); //llamo y ejecuto la funcion de la db
    const infoTotal = dbInfo.concat(apiInfo);
    return infoTotal; //devuelvo un arreglo con toda la info
}


module.exports = {
    getApiInfo,
    getDbInfo,
    getAllVideogames,
    
}