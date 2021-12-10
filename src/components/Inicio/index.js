import React from 'react';
import portada from '../../images/portada.jpg';
import {Link} from 'react-router-dom';


export const Inicio = () => {
    return (
        <div className="inicio">
            <Link to="productos">
                <h1 className="title">Productos</h1>
            </Link>
            <img src={portada} alt="" />
        </div>
    )
}
