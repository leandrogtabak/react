import { createContext, useState } from "react"

export const contexto = createContext()

const { Consumer, Provider } = contexto



const CustomProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([])

    const addItem = (item) => {

        /* const copia = carrito.slice(0)
        copia.push(item)
        setCarrito(copia) */

        if (isInCart(item.item.id)) {
            //Obtengo la cantidad nueva sumando la anterior con la actual
            let nueva_cantidad = item.quantity + carrito[carrito.findIndex(element => element.item.id === item.item.id)].quantity;
            //armo un nuevo item, con la cantidad actualizada, para insertarlo en la posicion original, pero con la cantidad actualizada
            const nuevo_item = { ...item, quantity: nueva_cantidad };

            //declaro un nuevo carrito copia del carrito anterior
            let carrito_clon = [...carrito]
            //reemplazo el carrito original, con el nuevo, actualizado
            carrito_clon.splice(carrito.findIndex(element => element.item.id === item.item.id), 1, nuevo_item)
            //seteo el carrito actualizado
            setCarrito([...carrito_clon])

        } else {
            setCarrito([...carrito, item])
        }
    }



    const removeItem = (itemId) => {

        let carrito_actual = carrito.filter((item) => item.item.id !== itemId)
        setCarrito([...carrito_actual])


    }

    const clear = () => {
        setCarrito([]);
    }

    const isInCart = (id) => {
        return carrito.find(item => item.item.id === id)
    }

  
    

    const contexto_para_consumir = { carrito, addItem, removeItem, clear }

    return (
        <Provider value={contexto_para_consumir}>
            {children}
        </Provider>
    )
}

export default CustomProvider