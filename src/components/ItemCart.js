import { useContext } from "react";
import { contexto } from "./CartContext.js";


const ItemCart = ({ item }) => {

    const { removeItem } = useContext(contexto)

    return (
        <>
            <tr>
                <td className="w-25">
                    <img src={item.item.img} className="img-fluid img-thumbnail" alt="Sheep" style={{ height: "150px" }} />
                </td>
                <td>{item.item.nombre}</td>
                <td>${item.item.precio}</td>
                <td>{item.quantity}</td>
                <td>${item.item.precio * item.quantity}</td>
                <td><button onClick={() => removeItem(item.item.id)} type="button" className="btn btn-danger btn-sm" aria-label="Close">
                    <img src="img/fa.png" alt="" style={{ height: "8px" }} /></button></td>

            </tr>

        </>
    )
}

export default ItemCart
