import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons"
import "./ItemCount.css"

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
        < > 
            <div className="d-flex justify-content-center border border-primary ItemCount"> 
                <button className="btn btn-outline-primary" onClick={restarContador}> <FontAwesomeIcon icon={faChevronDown} /></button>
                <p className="mx-3 my-auto">{contador}</p>
                <button className="btn btn-outline-primary" onClick={aumentarContador}><FontAwesomeIcon icon={faChevronUp} /></button>
            </div>
            <div className="d-flex justify-content-center">
                <button className="btn btn-outline-primary m-1" onClick={confirmar}>Confirmar</button>
            </div>

        </>

    )

}

export default ItemCount