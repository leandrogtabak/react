import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons"
import './CartWidget.css'

const CartWidget = () =>
    <div className="CartWidget">
        <FontAwesomeIcon icon={faShoppingBasket} />
    </div>


export default CartWidget