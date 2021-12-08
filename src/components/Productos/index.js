import React from 'react';
import img01 from "../../images/img01.jpg";
import img02 from "../../images/img02.jpg";
import img04 from "../../images/img04.jpg";
import img03 from "../../images/img03.jpg";
import img05 from "../../images/img05.jpg";



export const ProductosLista = () => {
    return (
        <>
            <h1 className="title">PRODUCTOS</h1>
            <div className="productos">
                <div className="producto">
                    <a href="#">
                        <div className="producto__img">
                            <img src={img01} alt="" />
                        </div>
                    </a>
                    <div className="producto__footer">
                        <h1>IPHONE</h1>
                        <p>Categoria</p>
                        <p className="price">S/ 1500</p>
                    </div>
                    <div className="button">
                        <button className="btn">
                            Añadir al carrito
                        </button>
                        <div>
                            <a href="#" className="btn">Vista</a>
                        </div>
                    </div>
                </div>

                <div className="producto">
                    <a href="#">
                        <div className="producto__img">
                            <img src={img02} alt="" />
                        </div>
                    </a>
                    <div className="producto__footer">
                        <h1>XIOMI</h1>
                        <p>Categoria</p>
                        <p className="price">S/ 1000</p>
                    </div>
                    <div className="button">
                        <button className="btn">
                            Añadir al carrito
                        </button>
                        <div>
                            <a href="#" className="btn">Vista</a>
                        </div>
                    </div>
                </div>

                <div className="producto">
                    <a href="#">
                        <div className="producto__img">
                            <img src={img04} alt="" />
                        </div>
                    </a>
                    <div className="producto__footer">
                        <h1>GL</h1>
                        <p>Categoria</p>
                        <p className="price">S/ 1200</p>
                    </div>
                    <div className="button">
                        <button className="btn">
                            Añadir al carrito
                        </button>
                        <div>
                            <a href="#" className="btn">Vista</a>
                        </div>
                    </div>
                </div>
                <div className="producto">
                    <a href="#">
                        <div className="producto__img">
                            <img src={img03} alt="" />
                        </div>
                    </a>
                    <div className="producto__footer">
                        <h1>HUEWEI</h1>
                        <p>Categoria</p>
                        <p className="price">S/ 999</p>
                    </div>
                    <div className="button">
                        <button className="btn">
                            Añadir al carrito
                        </button>
                        <div>
                            <a href="#" className="btn">Vista</a>
                        </div>
                    </div>
                </div>
                <div className="producto">
                    <a href="#">
                        <div className="producto__img">
                            <img src={img05} alt="" />
                        </div>
                    </a>
                    <div className="producto__footer">
                        <h1>NOKIA</h1>
                        <p>Categoria</p>
                        <p className="price">S/ 659</p>
                    </div>
                    <div className="button">
                        <button className="btn">
                            Añadir al carrito
                        </button>
                        <div>
                            <a href="#" className="btn">Vista</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
