import React, { useEffect, useState } from "react";
import ItemList from "./ItemList.js"
import '../estilos/ItemListContainer.css'
import Spinner from 'react-bootstrap/Spinner'
import { useParams } from "react-router-dom"
import { firestore } from "../firebase";


const ItemListContainer = () => {


  const [products, setProducts] = useState([])
  const [estado, setEstado] = useState("pendiente");
  const { id } = useParams()


  useEffect(() => {


    const db = firestore;
    const collection = db.collection("productos");


    if (id) {


      const filtro = collection.where("categoria", "==", id)
      const query = filtro.get()


      query.then((resultados) => {
        const resultados_parseado = []

        resultados.forEach((documento) => {
          const id = documento.id
          const data = documento.data()
          const data_final = { id, ...data }
          resultados_parseado.push(data_final)
        })
        setProducts(resultados_parseado)
      }).finally(() => {
        setEstado("terminado")
      });

    } else {
      const query = collection.get();
      query.then((resultados) => {
        const resultados_parseado = []

        resultados.forEach((documento) => {

          const id = documento.id
          const data = documento.data()
          const data_final = { id, ...data }
          resultados_parseado.push(data_final)
        })
        setProducts(resultados_parseado)
      }).finally(() => {
        setEstado("terminado")
      });



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
    <div className="container-fluid">
      <ItemList products={products} />
    </div>
  )
}

export default ItemListContainer



