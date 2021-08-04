//import ItemCount from "../ItemCount/ItemCount.js"
import React , {useEffect,useState} from "react";
import ItemList from "../ItemList/ItemList.js"
import './ItemListContainer.css'

// const ItemListContainer = ({saludo}) => {

//     const onAdd = (cantidad) => {
//         console.log(cantidad)
//     }


//     return (
//         <div className ="d-flex flex-column ItemListContainer">
//             <h1>{saludo}</h1>
//             <ItemCount stock={5} initial={1} onAdd={onAdd}/>
//         </div>
//     )
// }

const u = [{
        id: 1,
        producto: "Bouillion - Fish",
        precio: 74
      }, {
        id: 2,
        producto: "Beets - Golden",
        precio: 85
      }, {
        id: 3,
        producto: "Flour - Bread",
        precio: 60
      }, {
        id: 4,
        producto: "Red Currants",
        precio: 97
      }, {
        id: 5,
        producto: "Container Clear 8 Oz",
        precio: 1
      }, {
        id: 6,
        producto: "Pernod",
        precio: 3
      }, {
        id: 7,
        producto: "Cherries - Frozen",
        precio: 82
      }, {
        id: 8,
        producto: "Pear - Packum",
        precio: 12
      }, {
        id: 9,
        producto: "Bread - Roll, Whole Wheat",
        precio: 74
      }, {
        id: 10,
        producto: "Garbage Bags - Black",
        precio: 40
      }]
  



const ItemListContainer = () => {

  const [usuarios,setUsuarios] = useState([])
  
  //Este efecto se ejecuta por CADA render
  //useEffect(()=>{})

  //Este efecto se ejecuta SOLO en el primer render
  useEffect(()=>{
    
    const promise = new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve(usuarios)
      },2000)
    })

    promise.then((usuarios)=>setUsuarios(u))
  
  },[])

  
  return (
    <div className= "mx-auto">
      <p className= "text-center fs-2">Lista de productos</p>
      <ItemList usuarios={usuarios}/>
    </div>
  )
}

export default ItemListContainer



