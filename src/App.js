import React from 'react';
import Button from 'react-bootstrap/Button';
import './App.css';

function App() {

  //Requirements: 

  //Info: Photo, name, email and linkedIn buttons
  //About
  // Interests
  // Footer (social icons) i.e. github button 
  // can implement a light mode/dark mode (see React Info page)

  // https://www.figma.com/file/4ctPLUvIn5b5Ep6YPOZWWd/Digital-Business-Card?node-id=0%3A1 

  return (
    <div className="App">
        <h1>Monica Strzelecki</h1>
        <p>Frontend Developer</p>
        <Button className="button email">Email</Button>
        <Button className="button linkedin">LinkedIn</Button>
        <h2>About</h2>
        <h2>Interests</h2>
    </div>
  );
}

export default App;
