import ItemCount from "../ItemCount/ItemCount.js"
import './ItemListContainer.css'

const ItemListContainer = ({saludo}) => {

    const onAdd = (cantidad) => {
        console.log(cantidad)
    }


    return (
        <div className ="d-flex flex-column ItemListContainer">
            <h1>{saludo}</h1>
            <ItemCount stock={5} initial={1} onAdd={onAdd}/>
        </div>
    )
}



export default ItemListContainer