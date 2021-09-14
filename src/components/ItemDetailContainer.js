import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail.js"
import Spinner from 'react-bootstrap/Spinner'
import '../estilos/ItemDetailContainer.css'
import { useParams } from "react-router-dom"
import { firestore } from "../firebase"



const ItemDetailContainer = () => {

  const [unItem, setItem] = useState([])
  const [estado, setEstado] = useState("pendiente");
  const { id } = useParams()


  useEffect(() => {


    const db = firestore;
    const collection = db.collection("productos");

    if (id) {


      const filtro = collection.doc(id)
      const query = filtro.get()



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

  }, [id])

if (estado === "pendiente") {

  return (
    <div className="container-fluid d-flex m-auto flex-column">
      <Spinner animation="border" role="status" className="mx-auto mt-5">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>)

}


return (
  <div className="m-auto">
    <ItemDetail unItem={unItem} />
  </div>
)
}

export default ItemDetailContainer


