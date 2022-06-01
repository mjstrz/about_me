import React from 'react';
import Button from 'react-bootstrap/Button';
import '../App.css';

export default function Main(props) {
    return(
    <main className={props.darkMode ? "dark" : ""}>
        <h1 className='main--title'>Monica Strzelecki</h1>
            <p>Front-End Developer</p>
            
            <i className='fa fa-map-marker'></i><h5>Boston, Massachusetts, USA</h5>
            <img src="../public/images/sobieski.jpg" alt="something goes here"/>

            <div className='buttons'>
                <ul className='social-media-buttons'>
                    <li><a role="button" href="mailto: strzelecki.monica7@gmail.com"><i className='fa fa-envelope'></i></a></li>
                    <li><a className="btn btn-social-icon btn-linkedin" href="https://www.linkedin.com/in/monica-strzelecki/" target="_blank"> <i class="bi bi-linkedin"></i></a>{' '}</li>
                    <li><a className="btn btn-social-icon btn-github" href="https://www.github.com/mjstrz" target="_blank"><i className='fa fa-github'></i></a> </li>
                </ul>                 
            </div>

            <h2 className='main--header col-6'>About</h2>
                <p>I'm a recent graduate of NuCamp's Full Stack Web and Mobile Develpment Bootcamp (March 2022). I have experience working with Bootstrap, React.js, React Native and Node.js. </p>
                <p>8+ years of professional experience in Higher Education in 2 countries. Detail-oriented and an avid learner. </p>
            <h2 className='main--header'>Interests</h2>
                <p>Being outside. Skiing. Biking. Electronic music. Porch Gardening. Building React sites!</p>

                <footer className='site-footer'>      
                    <h5> Copyright &copy; 2021 Monica Strzelecki </h5>
                </footer>
    </main>
    )
}