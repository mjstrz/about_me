import React from 'react';

export default function Navbar(props){
    return(
        
       <nav>
        <div className='container'>
            <h1 className='main--title col-6'>Monica Strzelecki</h1>
                <ul className='nav-links col-6'>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="resume/resume.pdf" target="_blank">Resume</a></li>
                </ul> 
            </div>      
       </nav>
    )
}

