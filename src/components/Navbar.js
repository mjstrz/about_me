import React from 'react';

export default function Navbar(props){
    return(
       <nav
            // className={props.darkMode ? "dark" : ""}
       >
           <h1>Navbar will go here</h1>

           {/* <h3 className="nav--logo_text">About me</h3> */}
           {/* <div className='toggler'>
                <p className="toggler--light">Light</p>
                <div 
                    className="toggler--slider"
                    onClick={props.toggleDarkMode}
                >
                <div className="toggler--slider--circle"></div>
                </div>
                <p className='toggler--dark'>Dark</p>
           </div> */}
       </nav>
    )
}

