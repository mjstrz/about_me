import React, { useState } from 'react';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import './App.css';

function App() {

  return (
    <div className="container">
      <Navbar         
        // darkMode={darkMode}
        // toggleDarkMode={toggleDarkMode}
      />
      <Main 
        // darkMode={darkMode}
      />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
