import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons"
import { useContext } from "react"
import { Link } from "react-router-dom"
import  {contexto}  from "./CartContext.js"
import '../estilos/CartWidget.css'

const CartWidget = () => {

    const { carrito } = useContext(contexto)

    return (
        <Link to="/cart">
            <div className="CartWidget">
                <FontAwesomeIcon icon={faShoppingBasket} />
                {carrito.length ? carrito.length : null}
            </div>
        </Link>
    )
}

export default CartWidget;