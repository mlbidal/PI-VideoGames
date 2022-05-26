import React from 'react'
import style from '../css/Paginado.module.css'

export default function Paginado({videoGamePerPage,allVideoGames, paginado,currentPage}) {
    let pageNumbers = [];
    let Paginas = Math.ceil(allVideoGames/videoGamePerPage)//math.ceil redondea para arriba.
    for(let i = 1 ; i <= Paginas; i++){  
        pageNumbers.push(i)
    }

    //componente que renderiza los numeros del paginado
    return (
        <nav>
            <ul className={style.ul}>
            {
            currentPage - 1 > 0 ? (
                <button className={style.buttonPN} onClick={() => paginado(currentPage - 1)} >Prev</button>
            )
            : null
            }
            { 
            //si tengo el arreglo de numeros, lo mapeo
            pageNumbers && pageNumbers.map(number => (
                <li className={style.li} key={number}>
                    <button className={style.botonPaginado} onClick={() => paginado(number)}>{number}</button>
                </li>
            ))
            }
            {
            currentPage < Paginas ? (
                <button className={style.buttonPN} onClick={() => paginado(currentPage + 1)} >Next</button>
            )
            : null
            }
            </ul>
        </nav>
    )
}

