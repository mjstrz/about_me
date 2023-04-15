import React, { useState } from 'react';
import Main from './components/Main';
import Navigation from './components/Navbar';
import Projects from './components/Projects';
import Buttons from './components/Buttons';
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
          <Projects />
          <Footer />
          

      </div>
  );
}

export default App;
