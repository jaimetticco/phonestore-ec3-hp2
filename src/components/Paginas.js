import React from 'react'
import { Routes, Route } from "react-router-dom";
import { Inicio } from './Inicio';
import { ProductosLista } from './Productos/index';

export const Paginas = () => {
    return (
        <section>
            <Routes>
            <Route path="/" exact components={Inicio}/>
            <Route path="/productos" excat components={ProductosLista}/>
            </Routes>
        </section>
    )
}
