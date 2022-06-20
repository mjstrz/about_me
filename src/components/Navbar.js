import React from 'react';

export default function Navbar(props){
    return(
       <nav className='Navigation'>
            <ul className='nav-links'>
                <li><a href="#about">About</a></li>
                <li><a href="#interest">Interests</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>       
       </nav>
    )
}

