import { useContext } from "react";
import { contexto } from "./CartContext.js";
import ItemCart from "./ItemCart.js"
import { Link } from "react-router-dom"


const mostrarVacio = () => {
    return (
        <div className="d-flex flex-column mx-auto align-items-center my-5">
            <h5 >No hay productos en el carrito</h5>
            <Link to={"/"} className="btn btn-primary my-4">Volver a comprar</Link>
        </div>)
}

const Cart = () => {

    const { carrito, clear } = useContext(contexto);

    return (
        <div>
            <h4 style={{ textAlign: "center" }} className="my-5">Carrito de compras</h4>
            <table className="table align-middle table-image text-center">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Producto</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Total</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>

                <tbody style={{ texAlign: "center", justifyContent: "center", alignItems: "center" }} className="m-auto" >
                    {carrito.length > 0 ? carrito.map(item => { return <ItemCart item={item} /> }) : null}
                </tbody>
            </table>

            {carrito.length === 0 ? mostrarVacio() : null}

            <div className="d-flex justify-content-end me-5">
                <h5>Total: <span className="text-success"> ${carrito.length > 0 ? carrito.reduce((total, item) => (total + item.item.precio * item.quantity), 0) : " 0"} </span></h5>
            </div>

            <div className=" d-flex align-items-center flex-column m-auto">
                <button style={{ width: "20em" }} onClick={() => clear()} type="button" className="btn btn-secondary m-1">Vaciar Carrito</button>
                <Link to={"/formulario"} style={{ width: "20em" }} className="btn btn-success m-1">Continuar compra</Link>
            </div>



        </div>


    )
}

export default Cart;