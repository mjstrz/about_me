import React from 'react';
import { Container, Nav, Navbar, Row } from 'react-bootstrap';
import Resume from '../Resume.pdf';
import { HashLink as Link } from 'react-router-hash-link';

export default function Navigation(props){
    return(
        
       <Navbar 
            expand="lg" 
            class="fixed-top"
        >
        <Container fluid id="main-nav" class="px-4 px-lg-5 fixed-top nav-container">
            
            <a class="navbar-brand" href='#page-top'>Monica Strzelecki</a>
                <Navbar.Toggle aria-controls="main-nav" id="nav-toggle" />
                <Navbar.Collapse>
                    <Nav>
                        <Nav.Link href="#about-section">About</Nav.Link>
                        <Nav.Link href={Resume} target="_blank">Resume</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav> 
                </Navbar.Collapse>
               
            </Container>    
       </Navbar>
    )
}

