import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap/';
import './Navs.css'

const Navs = () => {
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="/"><span class="letterlogo">M</span> Abdallah</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto links">
                        <Nav.Link href="#Services">Services</Nav.Link>
                        <Nav.Link href="#Projects">Projects</Nav.Link>
                        <Nav.Link href="#Contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navs