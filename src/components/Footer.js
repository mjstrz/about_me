import React from 'react';

export default function Footer () {
    const year = new Date().getFullYear();
    return(
        <div className='footer'>
            <hr className='footer-hr' />
                <footer className='site-footer'>      
                    <h5> Copyright &copy; {year} Monica Strzelecki </h5>
                </footer>
        </div>
    )
}