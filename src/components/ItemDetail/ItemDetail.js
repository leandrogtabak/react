import React, { useState,useEffect } from 'react';
import {Link} from "react-router-dom"
import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount.js"

const ItemDetail = ({ unItem }) => {

    const [unidades, setUnidades] = useState(1);
    const [show, setShow] = useState(true);


    const onAdd = (cantidad) => {
        //console.log("State Uplifting")
        // console.log("Recibi la cantidad de un componente hijo")

        setUnidades(cantidad)
        setShow(false);
       

    }
    useEffect(() => {
        // Actualiza el título del documento usando la API del navegador
       console.log(unidades)
      });

    return (
        <div className="card ItemDetail">
            <img src={unItem.img} class="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{unItem.nombre}</h5>
                <p className="card-text m-1">{unItem.detalles}</p>
                <p className="card-text m-1">Detalles etc etc etc</p>
                <p className="card-text mb-2">${unItem.precio}</p>

                <div class="d-grid gap-2">
                    {show ? <ItemCount stock={unItem.stock} initial={unItem.stock >= 1 ? 1 : 0} onAdd={onAdd} />: <Link to={"/cart"} className="btn btn-primary">Terminar Compra</Link>}
                    
                </div>

            </div>
           
        </div>
    )
    console.log(unidades)
};



export default ItemDetail;
