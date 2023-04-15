import React, { useState } from 'react';
import Main from './components/Main';
import Navigation from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Buttons from './components/Buttons';
import Skills from './components/Skills';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';

function App() {

  return (
      <div className="App">
        <Routes>
          <Route path="/about" element= { <Main /> } />
          <Route path="/projects" element = { <Projects /> } />

        </Routes>
          
          <Navigation />
          <Main />
          <Buttons />
          <About />
          <Skills />
          <Projects />
          <Footer />
          

      </div>
  );
}

export default App;
