import React, { useState } from 'react';
import {Link} from "react-router-dom"
import "../estilos/ItemDetail.css"
import ItemCount from "./ItemCount.js"
import { useContext } from "react"
import { contexto } from "./CartContext"

const ItemDetail = ({ unItem }) => {

 
    const [show, setShow] = useState(true);

    const {addItem} = useContext(contexto)


    const onAdd = (cantidad) => {
     
        const item_para_agregar = {
            item : unItem ,
            quantity : cantidad
        }

        addItem(item_para_agregar)


        setShow(false);
       

    }

    
    

    return (
        <div className="card ItemDetail">
            <img src={unItem.img} className="card-img-top" alt="..." />
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
 
};



export default ItemDetail;
