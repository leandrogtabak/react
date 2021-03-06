import { Navbar } from "react-bootstrap"
import { Nav } from "react-bootstrap"
import { Container } from "react-bootstrap"
import {Link} from "react-router-dom"
import CartWidget from "./CartWidget.js"
import '../estilos/NavBar.css'

const NavBar = () => {

    return (

        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">The Lamp Stock</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/categoria/escritorio">Lamparas de escritorio</Nav.Link>
                    <Nav.Link as={Link} to="/categoria/pie">Lamparas de pie</Nav.Link>
                </Nav>
              <CartWidget />
                
            </Container>
        </Navbar>

    )



}

export default NavBar
