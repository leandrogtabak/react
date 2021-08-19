import { useContext } from "react";
import { contexto } from "./CartContext.js";

const Cart = () => {

    const { carrito , removeItem , clear } = useContext(contexto)

    return ( 
        <>
            Cart

            { carrito.length > 0 ? carrito.map(item => <div key={item.item.id}> {item.item.nombre} x {item.quantity} - ${item.item.precio * item.quantity} <button onClick={()=>removeItem(item.item.id)}>borrar</button></div>) : null}
            <button style={{width:"150px"}} onClick={()=>clear()}>Limpiar Carrito</button>
        </>
    )
}
 
export default Cart;