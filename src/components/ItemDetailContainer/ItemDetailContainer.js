import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail.js"
import productos from "../../productos.js"
import './ItemDetailContainer.css'

//Utilizo un item en particular (luego vendra del id del elemento del itemList donde se haga click)

const item = productos.find(element => element.id === 2);

const ItemDetailContainer = () => {

  const [unItem, setItem] = useState([])
  const [estado, setEstado] = useState("pendiente");

  useEffect(() => {

    const promise = getItem();
    // promise.then(setEstado("terminado"))
      promise.then(i => setItem(i))
             .then(() => setEstado("terminado"))
      

  }, [])

  //Defino la funcion getItem que devuelve una promesa luego de 2 segundos, simulando un fetch al servidor

  const getItem = () => {
    const promesa = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(item)
      }, 2000)
    })

    return promesa;
  }

  if (estado === "pendiente") {
    return (
      <div>
        <p>Cargando...</p>
      </div>)
  }

  //Devuelvo ItemDetail

  return (
    <div>
      <ItemDetail unItem={unItem} />
    </div>
  )
}

export default ItemDetailContainer


