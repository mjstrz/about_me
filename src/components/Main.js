import React from 'react';
import Button from 'react-bootstrap/Button';
import '../App.css';

export default function Main(props) {
    const year = new Date().getFullYear();

    return(
    <main className={props.darkMode ? "dark" : ""}>
        <h1 className='main--title'>Monica Strzelecki</h1>
            <p>Front-End Developer</p>
            
            <i className='fa fa-map-marker'></i><h5>Boston, Massachusetts, USA</h5>
            <img src="../public/images/sobieski.jpg" alt="something goes here"/>

            <div className='buttons'>
                <ul className='social-media-buttons'>
                    <li><a role="button" href="mailto: strzelecki.monica7@gmail.com"><i className='fa fa-envelope'></i></a></li>
                    <li><a className="btn btn-social-icon btn-linkedin" href="https://www.linkedin.com/in/monica-strzelecki/" target="_blank"> <i class="fa-brands fa-linkedin-in" ></i>hello</a>{' '}</li>
                    <li><a className="btn btn-social-icon btn-github" href="https://www.github.com/mjstrz" target="_blank"><i className='fa fa-github'></i></a> </li>
                </ul>                 
            </div>

            <hr className="header-hr"/>

            <h2 className='main--header col-6'>About</h2>
            <p>I'm a dedicated developer who enjoys building high-quality responsive web and mobile apps. I recently completed a full-stack mobile and web development bootcamp focused on Bootstrap, React JS, React Native, Node.js and MongoDB. </p>

            <p>I have 8+ years of professional experience in higher education in the U.K. and U.S.  As a former teacher, I'm accustomed to working with a variety of working styles, and I understand the importance of always learning and working in a team. I am detail-oriented. an avid learner, and enjoy freelance work while I search for my place in the world of web development. </p>

            <h2 className='main--header'>Interests</h2>
                <p>Being outside. Skiing. Biking. Electronic music. Porch Gardening. Building React sites!</p>

                
                <h2>Projects</h2>

                <hr className='footer-hr' />
                <footer className='site-footer'>      
                    <h5> Copyright &copy; {year} Monica Strzelecki </h5>
                </footer>
    </main>
    )
}