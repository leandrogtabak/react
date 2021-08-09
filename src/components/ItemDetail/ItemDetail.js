import React from 'react';
import "./ItemDetail.css"

const ItemDetail = ({ unItem }) => {
    return (
        <div className="card ItemDetail">
            <img src={unItem.img} class="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{unItem.nombre}</h5>
                <p className="card-text m-1">{unItem.detalles}</p>
                <p className="card-text mb-2">${unItem.precio}</p>
                <a href="#" class="btn btn-primary">Añadir al carrito</a>
            </div>
        </div>
    )

};



export default ItemDetail;
