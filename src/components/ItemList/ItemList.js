import React from "react"
import Item from "../Item/Item.js"

const ItemList = ({usuarios}) => {
  console.log(usuarios)
  return (
    <div class="row row-cols-1 row-cols-md-5 px-5">
        {usuarios.map(usuario=>{
          return <Item usuario={usuario}/>
        })}
    </div>
  )
}

export default ItemList