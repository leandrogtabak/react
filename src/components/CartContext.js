import { createContext, useState } from "react"
export const contexto = createContext()

const { Provider } = contexto

const CustomProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([])

    const addItem = (item) => {


        if (isInCart(item.item.id)) {

            let nuevaCantidad = item.quantity + carrito[carrito.findIndex(element => element.item.id === item.item.id)].quantity;

            const nuevoItem = { ...item, quantity: nuevaCantidad };
            let carritoClon = [...carrito]
            carritoClon.splice(carrito.findIndex(element => element.item.id === item.item.id), 1, nuevoItem)
            setCarrito([...carritoClon])

        } else {
            setCarrito([...carrito, item])
        }
    }


    const removeItem = (itemId) => {

        let carritoActual = carrito.filter((item) => item.item.id !== itemId)
        setCarrito([...carritoActual])


    }

    const clear = () => {
        setCarrito([]);
    }

    const isInCart = (id) => {
        return carrito.find(item => item.item.id === id)
    }


    const contexto = { carrito, addItem, removeItem, clear }

    return (
        <Provider value={contexto}>
            {children}
        </Provider>
    )
}

export default CustomProvider