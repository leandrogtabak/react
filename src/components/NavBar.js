import { Navbar } from "react-bootstrap"
import { Nav } from "react-bootstrap"
import { Container } from "react-bootstrap"

const NavBar = () => {

    return (

        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand>The Lamp Stock</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link>Home</Nav.Link>
                    <Nav.Link>Nuestros productos</Nav.Link>
                    <Nav.Link>Sobre nosotros</Nav.Link>
                    <Nav.Link>Contacto</Nav.Link>
                </Nav>
            </Container>
        </Navbar>

    )



}

export default NavBar
