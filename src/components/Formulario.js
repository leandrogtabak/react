import { useState, useEffect } from "react";
import { firestore, getTimestamp } from "../firebase";
import { useContext } from "react";
import { contexto } from "./CartContext.js";
import { Form, Row, Col, Button } from "react-bootstrap"
import Alert from "./Alerta.js"
import validator from 'validator';


const mostrarId = (orden) => {

    return <Alert mostrar={true} orden={orden} />


}


const Formulario = () => {

    const { carrito, clear } = useContext(contexto);
    let [showOrder, setShowOrder] = useState(0);

    const [nombre, setNombre] = useState("")
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState("")
    const [error, setError] = useState(false)


    useEffect(() => {
        if (showOrder) {
            clear();
        }
    }, [showOrder,clear]);


    const addOrder = (cart) => {
        if (cart.length) {

            const usuario = { nombre: nombre, email: email, telefono: telefono }
  
            const db = firestore

            const collection = db.collection("ordenes")
            let total = cart.reduce((total, item) => (total + item.item.precio * item.quantity), 0)
            const query = collection.add({ buyer: usuario, items: cart, date: getTimestamp(), total: total })

            query.then((resultado) => {
                setShowOrder(resultado.id)


            })
        }
    }



    const guardarNombre = (e) => {

        const input = e.target
        const valor = input.value
        setNombre(valor)
    }

    const guardarTelefono = (e) => {

        const input = e.target
        const valor = input.value
        setTelefono(valor)
    }

    const guardarEmail = (e) => {

        const input = e.target
        const valor = input.value
        setEmail(valor)
    }

    const realizarPedido = (e) => {
        e.preventDefault()

        if (validarCampos()) {
            setError(false)
            addOrder(carrito)
            e.target.reset()

        } else {
            setError(true)
        }
    }

    const validarCampos = () => {


        if (nombre.trim().length && validator.isMobilePhone(telefono) && validator.isEmail(email)) {
            return true
        } else {
            return false
        }
    }



    return (

        <>
            {error ? <p>Por favor completar correctamente todos los campos</p> : null}


            <Form onSubmit={realizarPedido} className="my-5" style={{ width: "75%" }}>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>Nombre y apellido</Form.Label>
                        <Form.Control placeholder="Ingresar nombre completo..." onChange={guardarNombre} />
                    </Form.Group>

                </Row>
                <Form.Group className="mb-3">
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control placeholder="Ingrese su número telefónico..." onChange={guardarTelefono} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control placeholder="Ingrese su email..." onChange={guardarEmail} />
                </Form.Group>


                <Button variant="primary" type="submit">
                    Enviar y finalizar compra
                </Button>
            </Form>

            {showOrder ? mostrarId(showOrder) : null}



        </>
    );
}

export default Formulario;
