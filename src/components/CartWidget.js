import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faShoppingBasket} from "@fortawesome/free-solid-svg-icons"

const CartWidget = () =>
    <div className="CartWidget" style={{fontSize:"2rem",color:"white"}}>
    <FontAwesomeIcon icon={faShoppingBasket}/>
    </div>

    
export default CartWidget    