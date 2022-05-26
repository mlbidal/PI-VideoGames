import React from 'react'
import style from '../css/Loading.module.css'
import gifLoading from '../css/loading.jpeg'

function Loading() {

    return (
        <div className={style.contenedorLoading}>
            <img src={gifLoading}
            alt="Loading please wait"
        
            />
        </div>
    )
}

export default Loading
