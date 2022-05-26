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
        for (let i = 0; i < 5; i++) { 
            let pages = await axios.get(apiUrl); 
            pages.data.results?.map((e) => { 
                arrVideogames.push({
                    id: e.id,
                    name: e.name,
                    image: e.background_image,
                    genres: e.genres?.map((el) => el.name), 
                    released: e.released,
                    rating: e.rating,
                    platforms: e.platforms?.map((el) => el.platform.name), 
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




const getDbInfo = async () => { 
    let getVideoGames = await Videogame.findAll({ 
        include:{         
            model: Genre, 
            atributes: ['name'],
            through: {
                atributes: [],
            },
        }
    })
    getVideoGames = getVideoGames.map((e)=> e.toJSON())
    getVideoGames = getVideoGames.map((e)=> {
        e.genres = e.genres.map((e)=> e.name)
        return e
    })
    return getVideoGames
};

const getAllVideogames = async () =>{
    const apiInfo = await getApiInfo(); 
    const dbInfo = await getDbInfo(); 
    const infoTotal = dbInfo.concat(apiInfo);
    return infoTotal; 
}


module.exports = {
    getApiInfo,
    getDbInfo,
    getAllVideogames,
    
}