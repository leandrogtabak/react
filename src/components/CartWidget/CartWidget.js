import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons"
import './CartWidget.css'

const CartWidget = () =>
    <a href=""><div className="CartWidget">
        <FontAwesomeIcon icon={faShoppingBasket} />
    </div></a>


export default CartWidget