import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap/';
import './Navs.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
    const date = new Date().getFullYear()
    return (
        <Navbar expand="lg" className='foot'>
            <Container>
                <Navbar.Brand className='footbrand'>@ {date} Made by <span className="letterlogo">M</span> Abdallah</Navbar.Brand>
                <Nav className="ms-auto links">
                    <Nav.Link href="https://www.linkedin.com/in/mohamedabdallah17/" target='blank'>
                        LinkedIn<FontAwesomeIcon icon={faLinkedin} />
                    </Nav.Link>
                    <Nav.Link href="https://github.com/mohamed17-a" target='blank'>
                        Github<FontAwesomeIcon icon={faGithub} />
                    </Nav.Link>
                    <Nav.Link href="https://leetcode.com" target='blank'>
                        LeetCode<FontAwesomeIcon icon={faCode} />
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Footer