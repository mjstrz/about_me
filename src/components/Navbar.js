import React from 'react';
import { Container, Nav, Navbar, Row } from 'react-bootstrap';

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
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#resume">Resume</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                        {/* <ul className='nav-links col-6'>
                            <li><a href="#about">About</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#contact">Contact</a></li>
                            <li><a href="resume/resume.pdf" target="_blank">Resume</a></li>
                        </ul> */}
                    </Nav> 
                </Navbar.Collapse>
               
            </Container>    
       </Navbar>
    )
}

