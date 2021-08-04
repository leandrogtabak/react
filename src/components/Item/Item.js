import React from 'react';
import "./Item.css"

const Item = ({ usuario }) => {
    //   return <li>{usuario.producto}</li>;
    return (
        <div className="col">
            <div className="card Item mx-auto">
                <img src="https://picsum.photos/250" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{usuario.producto}</h5>
                    <p className="card-text">${usuario.precio}</p>
                    <a href="#" className="btn btn-primary">Añadir al carrito</a>
                </div>
            </ div>
        </ div>
    )

};


export default Item;
