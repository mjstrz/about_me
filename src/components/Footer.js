import React from 'react';

export default function Footer () {
    const year = new Date().getFullYear();
    return(
        <div className='footer'>
                <footer className='site-footer'>      
                <hr className='footer-hr' />
                    <h5> Copyright &copy; {year} Mjstrz </h5>
                </footer>
        </div>
    )
}