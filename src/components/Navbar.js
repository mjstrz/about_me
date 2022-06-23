import React from 'react';

export default function Navbar(props){
    return(
       <nav className='col'>
            <ul className='nav-links'>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="resume/resume.pdf" target="_blank">Resume</a></li>
            </ul>       
       </nav>
    )
}

