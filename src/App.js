import React, { useState } from 'react';
import Main from './components/Main';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import './App.css';

function App() {

  //Requirements: 

  //Info: Photo, name, email and linkedIn buttons
  //About
  // Interests
  // Footer (social icons) i.e. github button 
  // can implement a light mode/dark mode (see React Info page)

  // https://www.figma.com/file/4ctPLUvIn5b5Ep6YPOZWWd/Digital-Business-Card?node-id=0%3A1 

  const [darkMode, setDarkMode] = useState(true)

  function toggleDarkMode() {
    setDarkMode(prevMode => !prevMode)
  }

  return (
    <div className="container">
      <Navbar         
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <Main 
        darkMode={darkMode}
      />
    </div>
  );
}

export default App;
