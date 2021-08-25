//import ItemCount from "../ItemCount/ItemCount.js"
import React, { useEffect, useState } from "react";
import ItemList from "./ItemList.js"
import '../estilos/ItemListContainer.css'
import Spinner from 'react-bootstrap/Spinner'
import { useParams } from "react-router-dom"
import { firestore } from "../firebase";




const ItemListContainer = () => {


  const [products, setProducts] = useState([])
  const [estado, setEstado] = useState("pendiente");
  const params = useParams()

  //Uso el hook useEffect para pedir los datos al servidor (ahora esa tarea se simula con una promesa con un delay dentro)

  useEffect(() => {


    const db = firestore;
    const collection = db.collection("productos");




    if (params.id) {


      const filtro = collection.where("categoria", "==", params.id)
      const query = filtro.get()


      //le saco las cosas a la promesa
      query.then((resultados) => {
        const resultados_parseado = []
        //Recorro cada uno de los documentos
        resultados.forEach((documento) => {
          //El ID esta separado del resto de la data
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
        //Recorro cada uno de los documentos
        resultados.forEach((documento) => {
          //El ID esta separado del resto de la data
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


  }, [params.id])



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



