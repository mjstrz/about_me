import React from 'react';
import Button from 'react-bootstrap/Button';
import '../App.css';

export default function Main(props) {
    return(
    <main className={props.darkMode ? "dark" : ""}>
        <h1 className='main--title'>Monica Strzelecki</h1>
            <p>React Developer</p>
            <img src="../public/images/sobieski.jpg" alt="something goes here"/>
            <div className='buttons'>
            <Button className="button email">Email</Button>
            <Button className="button linkedin">LinkedIn</Button>
            <Button className="button github">Github</Button> 
            </div>
            <h2 className='main--header col-6'>About</h2>
            <p>I'm a recent graduate of NuCamp's Full Stack Web and Mobile Develpment Bootcamp (March 2022). I have experience working with Bootstrap, React.js, React Native and Node.js. </p>
            <p>8+ years of professional experience in Higher Education in 2 countries. Detail-oriented and an avid learner. </p>
            <h2 className='main--header'>Interests</h2>
            <p>Being outside. Skiing. Biking. Electronic music. Porch Gardening. Building React sites!</p>
    </main>
    )
}