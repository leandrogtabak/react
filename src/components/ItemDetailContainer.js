import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail.js"
import Spinner from 'react-bootstrap/Spinner'
import '../estilos/ItemDetailContainer.css'
import { useParams } from "react-router-dom"
import { firestore } from "../firebase"

//Utilizo un item en particular (luego vendra del id del elemento del itemList donde se haga click)


const ItemDetailContainer = () => {

  const [unItem, setItem] = useState([])
  const [estado, setEstado] = useState("pendiente");
  const params = useParams()


  useEffect(() => {


    const db = firestore;
    const collection = db.collection("productos");




    if (params.id) {


      const filtro = collection.doc(params.id)
      const query = filtro.get()


      //le saco las cosas a la promesa
      query.then((resultados) => {
        const id = resultados.id;


        const data = resultados.data()
        const data_final = { id, ...data }
        setItem(data_final);
      
      
    }).finally(() => {
      setEstado("terminado")
    });
  }else{
    setEstado("terminado");
  }

  }, [params.id])

if (estado === "pendiente") {

  return (
    <div className="container-fluid d-flex m-auto flex-column">
      <Spinner animation="border" role="status" className="mx-auto mt-5">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>)

}

//Devuelvo ItemDetail

return (
  <div className="m-auto">
    <ItemDetail unItem={unItem} />
  </div>
)
}

export default ItemDetailContainer


