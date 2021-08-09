//import ItemCount from "../ItemCount/ItemCount.js"
import React , {useEffect,useState} from "react";
import ItemList from "../ItemList/ItemList.js"
import './ItemListContainer.css'
import productos from "../../productos.js"


  

const ItemListContainer = () => {

  const [products,setProducts] = useState([])
  

  //Uso el hook useEffect para pedir los datos al servidor (ahora esa tarea se simula con una promesa con un delay dentro)

  useEffect(()=>{
    
    const promise = new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve(productos)
      },2000)
    })

  //seteo en products el valor resuelto por la promesa (productos)

    promise.then(p=>setProducts(p))
  
  },[])

  
  return (
    <div className= "container-fluid">
      <p className= "text-center fs-2">Lista de productos</p>
      <ItemList products={products}/>
    </div>
  )
}

export default ItemListContainer



