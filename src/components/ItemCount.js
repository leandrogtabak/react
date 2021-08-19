import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons"
import "../estilos/ItemCount.css"

const ItemCount = ({ stock, initial, onAdd }) => {

    const [contador, setContador] = useState(initial)



    const aumentarContador = () => {
        if (contador < stock) {
            setContador(contador + 1)
        }
    }

    const restarContador = () => {
        if (contador > 1) {
            setContador(contador - 1)
        }
    }

    const confirmar = () => {
        if (stock > 0) {
            onAdd(contador)
        }
    }

    return (
        <div className="ItemCount">
            <div className="d-flex justify-content-center border border-primary">
                <button className="btn btn-outline-primary mx-auto" onClick={restarContador}> <FontAwesomeIcon icon={faChevronDown} /></button>
                <p className="my-auto">{contador}</p>
                <button className="btn btn-outline-primary mx-auto" onClick={aumentarContador}><FontAwesomeIcon icon={faChevronUp} /></button>
            </div>
            <div class="d-grid gap-2">
                <button className="btn btn-outline-primary" onClick={confirmar}>Confirmar</button>
            </div>

        </div>

    )

}

export default ItemCount