import React from 'react'
import style from "../css/Card.module.css"

function Card({name,image,genres,rating}) {
    return (
        <div className={style.cardItem}>
            <div className= {style.card}>
                <h1 className= {style.nombre}>{name}</h1>
                <img className={style.imagen} 
                    src={image} 
                    alt='Img not found'
                    onError={(e)=>e.target.setAttribute('src','https://images.unsplash.com/photo-1529154691717-3306083d869e?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170')}n />
                <h2 className={style.generos}>Genres: {genres.join(", ")}</h2>
                
                <h2 className={style.rating}>Rating: {rating}</h2>
            </div>
        </div>
    )
}

export default Card