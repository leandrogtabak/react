import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail.js"
import Spinner from 'react-bootstrap/Spinner'
import productos from "../../productos.js"
import './ItemDetailContainer.css'
import {useParams} from "react-router-dom"

//Utilizo un item en particular (luego vendra del id del elemento del itemList donde se haga click)


const ItemDetailContainer = () => {

  const [unItem, setItem] = useState([])
  const [estado, setEstado] = useState("pendiente");
  const params = useParams()

  useEffect(() => {

    const promise = getItem();
    // promise.then(setEstado("terminado"))
    promise.then(i => setItem(i))
      .then(() => setEstado("terminado"))


  }, [params.id])

  //Defino la funcion getItem que devuelve una promesa luego de 2 segundos, simulando un fetch al servidor

  const getItem = () => {
    const promesa = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productos.find(producto => producto.id == params.id))
      }, 2000)

      setEstado("pendiente")
    })

    return promesa;
  }

  if (estado === "pendiente") {

    return (
      <div className="container-fluid d-flex m-auto flex-column">
        <p className="text-center fs-2">Lista de productos</p>
        <Spinner animation="border" role="status" className="mx-auto mt-5">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div> )
    
  }

  //Devuelvo ItemDetail

  return (
    <div>
      <ItemDetail unItem={unItem} />
    </div>
  )
}

export default ItemDetailContainer


