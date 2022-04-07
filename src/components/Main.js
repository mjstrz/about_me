import React from 'react';
import Button from 'react-bootstrap/Button';
import ReactDOM from 'react-dom';
import '../App.css';

export default function Main(props) {
    return(
    <main className={props.darkMode ? "dark" : ""}>
        <h1 className='main--title'>Monica Strzelecki</h1>
            <p>Frontend Developer</p>
            <div className='buttons'>
            <Button className="button email">Email</Button>
            <Button className="button linkedin">LinkedIn</Button>
            </div>
            <h2 className='main--header'>About</h2>
            <h2 className='main--header'>Interests</h2>
    </main>
    )
}