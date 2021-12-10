import React from 'react';
import detalle from '../../images/img01.jpg'


export const ProductoDetalle = () => {

    return (
        <>

            {
                <div className="detalles">
                    <div className="grid">
                        <div>
                            <img src={detalle} alt="" />
                        </div>
                    </div>
                    <button>Añadir al carrito</button>
                    <div className="descripcion">
                        <p><b>Descripcion:</b> <p>El iPhone 12 tiene un diseño que combina potencia de procesamiento,un óptimo sistema operativo (iOS 14)
                        y unas dimensiones que generan comodidad a la hora de usarlo. </p>El Apple iPhone 12 tiene un tamaño de 146.7 mm x 71.5 mm x 7.4 mm, 
                        y un peso de 162 gramos. Sus bordes de aluminio aeroespacial se unen a lo demás para darle elegancia, <p>velocidad y resistencia.
                        Sin lugar a duda, es un celular iPhone que no te defraudará.</p> ¡Adquiérelo ahora en el Catálogo Movistar!. *Incluye cable de carga.
                        </p>
                    </div>
                </div>
            }

        </>
    )
}
