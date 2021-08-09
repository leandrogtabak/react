import React from "react"
import Item from "../Item/Item.js"

const ItemList = ({products}) => {
  return (
    <div class="row row-cols-1 row-cols-md-5 mx-auto">
        {products.map(producto=>{
          return <Item producto ={producto} />
        })}
    </div>
  )
}

export default ItemList