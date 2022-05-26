import React from 'react'
import { getVideogames, getGenre, filterByGenres, filterCreated, orderByName, orderByRating } from '../Redux/actions'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Card from './Card'
import Paginado from './Paginado'
import SerchBar from './SerchBar'
import style from "../css/Home.module.css"
import Loading from './Loading'
import Error from './Error'


function Home() {

    const dispatch = useDispatch() 
    const allVideoGames = useSelector(state => state.videogames) //traigo del state global de redux los videojuegos, igual que hacer el mapStatetoProps. 
    const genres = useSelector(state => state.genres) 
    
    //PAGINADO: ME CREO ESTADOS LOCALES. 
    const [currentPage, setCurrentPage] = useState(1) 
    const [videoGamePerPage, /*setVideoGamePerPage*/] = useState(15)  
    const [/*sort*/, setSort] = useState()
    const [/*sortRating*/, setSortRating] = useState()
     //15
    const indexOfLastVideogame = currentPage * videoGamePerPage; 
     //0
    const indexOfFirstVideogame = indexOfLastVideogame - videoGamePerPage; 
    const currentVideogames = allVideoGames.slice(indexOfFirstVideogame, indexOfLastVideogame)
    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
}

//CADA VEZ QUE SE RENDRIZA EL DOM SE EJECUTA USE EFFECTS
    useEffect(() => {
        dispatch(getVideogames())
        dispatch(getGenre())
    }, [dispatch])

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(getVideogames())//esta funcion cuando hace click me vuelve a cargar todos los videogame
    }

   
    const handleFilterGenres = (e) => {
        dispatch(filterByGenres(e.target.value))
        setCurrentPage(1)
    }

    const handleFilterCreated = (e) => {
        dispatch(filterCreated(e.target.value)) 
        setCurrentPage(1)
    }
    
    //hago el handle del order que es similar al del filtrado
    const handleOrder = (e) => {
        dispatch(orderByName(e.target.value))
        setCurrentPage(1)
        setSort(e.target.value)
    }

    const handleOrderRating = (e) => {
        dispatch(orderByRating(e.target.value))
        setCurrentPage(1)
        setSortRating(`rating ${e.target.value}`) //actuliza el render
    }
console.log('soy videogames', allVideoGames)
    return (
 
        <div className={style.fondoLoading}>
            <div className={style.fondoLoadingContenido}>
                <div className={style.clase2}>
                    <div className={style.contenidoTitulo}>
                        <h1 className={style.titulo}>Video Games</h1>   
                        
                        <SerchBar />
                    <div className={style.filtrosTarjetas}>
                        <div className={style.clase1}>
                            <Link to='/videogame'>
                                <button className={style.buttonSecond}>Create videogame</button>
                            </Link>
                            <button className={style.button} onClick={handleClick}>Refresh videogame</button>
                            <select
                                className={style.select}
                                defaultValue='Order'
                                onChange={handleOrder}
                            >
                                <option value='Order' disabled>Order</option>
                                <option value='Asc'>A-Z</option>
                                <option value='Desc'>Z-A</option>
                            </select>
                            <select
                                className={style.select}
                                defaultValue='Rating'
                                onChange={handleOrderRating}
                            >
                                <option value='Order' disabled>Rating</option>
                                <option value='high'>High</option>
                                <option value='low'>Low</option>
                            </select>
                            <select
                                className={style.select}
                                defaultValue='Genres'
                                onChange={handleFilterGenres}
                            >
                                <option className="options" disabled>Generos</option>
                                <option className="options" value="All">All</option>
                                {
                                genres.map((e) => (
                                    <option className='options' key={e.id} value={e.name}>
                                        {e.name}
                                    </option>
                                ))
                                }
                            </select>
                            <select
                                className={style.select}
                                defaultValue='filtrados'
                                onChange={handleFilterCreated}
                            >
                                <option className="options" disabled>Origin</option>
                                <option className="options" value='All'>All</option>
                                <option className="options" value='created'>Created </option>
                                <option className="options" value='api'>Api</option>
                            </select>
                        </div>
                        <div className={style.contenedorCards}>
                            {
                            currentVideogames.length !== 0 ?
                            currentVideogames?.map((e) => {
                                return (
                                    <div key={e.id}>
                                        { e.error ? <h1>hay un error</h1>: 
                                        <Link to={"/home/" + e.id}>
                                            <Card
                                                name={e.name}
                                                image={e.image}
                                                genres={e.genres}
                                                rating={e.rating}
                                            />
                                        </Link>}
                                    </div>
                                )
                            }) 
                            : <Loading />
                            }
                        </div>
                        </div>

                    </div>
                </div>
            </div>
            <Paginado
                        //le paso por props los valores
                            videoGamePerPage={videoGamePerPage}
                            allVideoGames={allVideoGames.length}
                            paginado={paginado}
                            currentPage={currentPage}           
                        />
        </div>

)
}

export default Home