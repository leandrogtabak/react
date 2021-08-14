//import ItemCount from "../ItemCount/ItemCount.js"
import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList.js"
import './ItemListContainer.css'
import Spinner from 'react-bootstrap/Spinner'
import productos from "../../productos.js"
import {useParams} from "react-router-dom"




const ItemListContainer = () => {

  
  const [products, setProducts] = useState([])
  const [estado, setEstado] = useState("pendiente");
  const params = useParams()
  
  //Uso el hook useEffect para pedir los datos al servidor (ahora esa tarea se simula con una promesa con un delay dentro)

  useEffect(() => {

    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        
        if(params.id){
          resolve(productos.filter(producto=>producto.categoria === parseInt(params.id)))
          
          
      }
      else{
        resolve(productos)
        
      }
        
      }, 2000)
      setEstado("pendiente")
    })

    //seteo en products el valor resuelto por la promesa (productos)

    promise.then(p => setProducts(p))
           .then(() => setEstado("terminado"))

  },[params.id])

  if (estado === "pendiente") {
    return (

      <div className="container-fluid d-flex m-auto flex-column">
        <p className="text-center fs-2">Lista de productos</p>
        <Spinner animation="border" role="status" className="mx-auto mt-5">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div> )
      
  }
  
  return (
    <div className="container-fluid">
      <p className="text-center fs-2">Lista de productos</p>
      <ItemList products={products} />
    </div>
  )
}

export default ItemListContainer



