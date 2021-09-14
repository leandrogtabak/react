import React from 'react';
import {Link} from "react-router-dom"

import "../estilos/Item.css"


const Item = ({ producto }) => {
    return (
        <div className="col p-5">
            <div className="card Item">
                <img src={producto.img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{producto.nombre}</h5>
                    <p className="card-text">${producto.precio}</p>
                    <Link to={`/item/${producto.id}`} className="btn btn-primary">Ver detalles</Link>
                </div>
            </ div>
        </ div>
    )

};


export default Item;
