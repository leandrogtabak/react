import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { contexto } from "./CartContext.js"
import '../estilos/CartWidget.css'

const CartWidget = () => {

    const { carrito } = useContext(contexto)

    return (
        <Link to="/cart">

            <div className="CartWidget position-relative">

                <FontAwesomeIcon icon={faShoppingBasket} />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{fontSize:"0.7rem"}}>
                {carrito.length ? carrito.length : null}
                </span>

            </div>
        </Link>
    )
}

export default CartWidget;