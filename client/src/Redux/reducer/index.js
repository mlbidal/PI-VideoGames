import { GET_VIDEOGAMES,
    GET_GENRE,GET_DETAIL,
    FILTER_BY_GENRES,
    FILTER_CREATED,
    ORDER_BY_NAME,
    ORDER_BY_RATING,
    GET_NAME_VIDEOGAMES,
    POST_VIDEOGAME,
    VACIAR_DETAIL,
    CLEAR_VIDEOGAMES
} from '../constantes';
//creo los etados iniciles
const initialState = {
    videogames: [],
    genres: [],
    allVideogames: [],
    platforms: [],
    details: [],
}

//el valor actual de la informacion es el STATE
//hago toda la logica de las actions aca
function rootReducer(state= initialState, action) { 
    switch(action.type){
        case GET_VIDEOGAMES: 
            let platforms = [];
        action.payload.forEach(game => {
            platforms = [...platforms, ...game.platforms]
        });
            return {
            ...state, 
            videogames: action.payload,
            allVideogames: action.payload,
            platforms: Array.from(new Set(platforms)),
        }
        
        case GET_GENRE:
            return {
                ...state,
                genres: action.payload
        }

        case FILTER_BY_GENRES:
        //me hago una const que va a tener una copia del estado y lo voy a filtrar, 
        //accedo a los videogames en el reducer desde el state
        const allVideogames = state.allVideogames
        //el valor del select de home es el e.target.value y va a llegar a la action por payload
        //hago un filter de los videogames que tengo en status que incluyan el payload             e.status === action.payload ---> asi se ejecuta por el estado ya filtrado, por eso creo el estado allvideogames
        const filtergenre = action.payload === "All" ? allVideogames : allVideogames.filter((e) => e.genres.includes(action.payload))
        const error = [{id:1 , error: "No hay games en este genero"}]
        const verificacion = filtergenre.length !== 0 ? filtergenre : error
        return {
            ...state, 
            videogames: verificacion //que suceda la logica de arriba
        }
        
        case FILTER_CREATED:
        //la const q va a tener una copia del estado para poder filtrar
        const allvideogames = state.allVideogames
        //si el payload es created, me traigo de la copia de estado con un filter los elementos de createdInDb (flag q hice en el back)
        //sino traigo los q no estan ahi
        const filterDB = action.payload === 'created' ? allvideogames.filter((e)=> e.createdInDb) : allvideogames.filter((e) => !e.createdInDb)
        const errorCreado = [{id:1 , error: "No hay games creados"}]
        const verificacionCreados = filterDB.length !== 0 ? filterDB : errorCreado
        return {
            ...state,
            //si el payload es all ¿, me traigo todos, sino hago la logica de arriba
            videogames: action.payload === 'All' ? state.allVideogames : verificacionCreados
        }

        case ORDER_BY_NAME:
        //si el action.payload es asc, ordeno por ascendente, sino al reves
        //con el sort voy comparando dos valores y depende si es mas grande o mas chico lo coloca a la
        //derecha o a la izquierda
        const order = action.payload === 'Asc' ? state.allVideogames.sort((a , b) => {
            if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
            if(b.name.toLowerCase() > a.name.toLowerCase()) return -1;
            return 0;
        }) : state.allVideogames.sort((a , b) => {
            if(a.name.toLowerCase() > b.name.toLowerCase()) return - 1;
            if(b.name.toLowerCase() > a.name.toLowerCase()) return 1;
            return 0;
        })
        return {
            ...state,
            videogames: order
        }

        case ORDER_BY_RATING: 
        const orderRating = action.payload === 'low' ? state.allVideogames.sort((a , b) => {
        if(a.rating > b.rating) return 1;
        if(b.rating > a.rating) return -1;
        return 0;
        }) : state.allVideogames.sort((a , b) => {
        if(a.rating > b.rating) return - 1;
        if(b.rating > a.rating) return 1;
        })
        return {
            ...state,
            videogames: orderRating
        }

        case GET_NAME_VIDEOGAMES: 
        const errorName = [{id:1 , error: "El nombre no existe"}]
        const verificacionName = action.payload.length !== 0 ? action.payload : errorName
        return {
            ...state,
            videogames: verificacionName,
        }

        case POST_VIDEOGAME:
        return {
            ...state
        }

        case GET_DETAIL:
        return {
            ...state,
            details: action.payload
        }

        case VACIAR_DETAIL: 
        return {
            ...state,
            details:[]
        }

        case CLEAR_VIDEOGAMES:
        return {
            ...state,
            videogames:[]
        }

        default: 
            return state
    }
}

export default rootReducer