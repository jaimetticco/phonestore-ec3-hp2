import React from 'react'
import { Routes, Route } from "react-router-dom";
import { Inicio } from './Inicio';
import { ProductosLista } from './Productos/index';
import {ProductoDetalle} from './Productos/ProductoDetalle';
import { Login } from './Login/index';


export const Paginas = () => {
    return (
        <section>
            <Routes>
            <Route path="/" element={<Inicio/>}/>
            <Route path="/productos" element={<ProductosLista/>}/>
            <Route path="/producto/:id" element={<ProductoDetalle/>}/>
            <Route path="/login" element={<Login/>}/>
            </Routes>
        </section>
    )
}
