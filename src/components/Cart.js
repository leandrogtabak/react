import { useContext, useEffect, useState } from "react";
import { contexto } from "./CartContext.js";
import ItemCart from "./ItemCart.js"
import { Link } from "react-router-dom"
import { firestore, getTimestamp } from "../firebase";
import Alert from "./Alerta.js"

const mostrarVacio = () => {
    return (
        <div className="d-flex flex-column mx-auto align-items-center my-5">
            <h5 >No hay productos en el carrito</h5>
            <Link to={"/"} className="btn btn-primary my-4">Volver a comprar</Link>
        </div>)
}

// const mostrarId = (orden) => {

//     return <Alert mostrar={true} orden={orden} />


// }



const Cart = () => {

    const { carrito, clear } = useContext(contexto);
    // let [showOrder, setShowOrder] = useState(0);

    // useEffect(() => {
    //     if (showOrder) {
    //         clear();
    //     }
    // }, [showOrder]);


    // const addOrder = (cart) => {
    //     if (cart.length) {
    //         const usuario = { nombre: "Leandro Tabak", email: "leandrogtabak@test.com", telefono: 1122223333 }
    //         //Referencia a la DB
    //         const db = firestore

    //         //Referencia a una coleccion

    //         const collection = db.collection("ordenes")
    //         let total = cart.reduce((total, item) => (total + item.item.precio * item.quantity), 0)
    //         const query = collection.add({ buyer: usuario, items: cart, date: getTimestamp(), total: total })

    //         query.then((resultado) => {
    //             setShowOrder(resultado.id)


    //         })
    //     }
    // }



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
                {/* <button style={{ width: "20em" }} onClick={() => addOrder(carrito)} type="button" className="btn btn-success m-1">Continuar compra</button> */}
                <Link to={"/formulario"} style={{ width: "20em" }} className="btn btn-success m-1">Continuar compra</Link>
            </div>
            {/* {showOrder ? mostrarId(showOrder) : null} */}



        </div>


    )
}

export default Cart;